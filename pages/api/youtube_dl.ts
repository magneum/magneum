import got from "got";
import https from "https";
import moment from "moment";
import singer from "play-dl";
import YouTube_Sr from "yt-search";
import logger from "../../services";
import { v4 as uuidv4 } from "uuid";
import type { NextApiRequest, NextApiResponse } from "next";


function shorten(url: any) {
https.get(
"https://tinyurl.com/api-create.php?url=" + encodeURIComponent(url),
(res) => {
res.on("data", (chunk) => {
return chunk.toString();
});
}
);
}

function _(
url: any,
v_id: any,
ftype: any,
fquality: any,
token: any,
timeExpire: any,
fname: any
) {
return new Promise(async (resolve, reject) => {
const _started: any = await got(url, {
method: "POST",
headers: {
"_content-type": "application/x-www-form-urlencoded; charset=UTF-8",
get "content-type"() {
return this["_content-type"];
},
set "content-type"(value) {
this["_content-type"] = value;
},
origin: "https://yt5s.com",
referer: "https://yt5s.com/",
"user-agent":
"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",
"X-Requested-Key": "de0cfuirtgf67a",
},
form: {
v_id,
ftype,
fquality,
token,
timeExpire,
client: "yt5s.com",
},
}).json();
const server: any = _started.c_server;
if (!server && ftype === "mp3")
return resolve(server || _started.d_url || "");
const _results: any = await got(`${server}/api/json/convert`, {
method: "POST",
form: {
v_id,
ftype,
fquality,
fname,
token,
timeExpire,
},
}).json();
if (_results.statusCode === 200) {
return resolve(_results.result);
} else if (_results.statusCode === 300) {
try {
const WebSocket: any = (await import("ws")).default;
const Url: any = new URL(server);
const ws: any = new WebSocket(
`${/https/i.test(Url.protocol) ? "wss:" : "ws:"}//${Url.host}/sub/${
_results.jobId
}?fname=yt5s.com`,
undefined,
{
headers: {
"Accept-Encoding": "gzip, deflate, br",
Host: Url.host,
Origin: "https://yt5s.com",
"Sec-WebSocket-Extensions":
"permessage-deflate; client_max_window_bits",
"User-Agent":
"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",
},
}
);
ws.on("message", function incoming(message: any) {
const msg: any = JSON.parse(message.toString());
if (msg.action === "success") {
try {
ws.close();
} catch (e) {
return reject(e);
}
ws.removeAllListeners("message");
return resolve(msg.url);
} else if (msg.action === "error") return reject(msg);
});
} catch (e) {
return reject(e);
}
} else return reject(_results);
});
}

function YouTube_Genre(url: any) {
return new Promise(async (resolve, reject) => {
const html: any = await got("https://yt5s.com/en32").text();
const json: any = await got(
(/k_url_search="(.*?)"/.exec(html) || ["", ""])[1],
{
method: "POST",
headers: {
"content-type": "application/x-www-form-urlencoded; charset=UTF-8",
cookie:
"__cflb=04dToSoFRg9oqH9pYF2En9gKJK4fe8D9TcYtUD6tYu; _ga=GA1.2.1350132744.1641709803; _gid=GA1.2.1492233267.1641709803; _gat_gtag_UA_122831834_4=1",
origin: "https://yt5s.com",
"user-agent":
"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",
},
searchParams: new URLSearchParams(
Object.entries({
q: url,
vt: "home",
})
),
}
).json();
if (!json) return reject(new Error("Sorry no json found!"));
const Video_obj: any = {};
Object.values(json.links.mp4).forEach(({ k, size }) => {
Video_obj[k] = {
quality: k,
Fsize: size,
download: _.bind(
null,
(/k_url_convert="(.*?)"/.exec(html) || ["", ""])[1],
json.vid,
"mp4",
k,
json.token,
parseInt(json.timeExpires),
json.fn
),
};
});
const Audio_obj: any = {};
Object.values(json.links.mp3).forEach(({ key, size }) => {
Audio_obj[key] = {
quality: key,
Fsize: size,
download: _.bind(
null,
(/k_url_convert="(.*?)"/.exec(html) || ["", ""])[1],
json.vid,
"mp3",
key.replace(/kbps/i, ""),
json.token,
parseInt(json.timeExpires),
json.fn
),
};
});
return resolve({
id: json.vid,
title: json.title,
video: Video_obj,
audio: Audio_obj,
});
});
}

export default async function test(req: NextApiRequest, res: NextApiResponse) {
try {
const query: any = req.query;
const { q, quality } = query;
console.log(query);
if (q) {
const Query: any = await YouTube_Sr(q);
const QueryFound: any = Query.videos.slice(0, 1);
const Queryrslt: any = QueryFound;
if (quality === "music") {
let stream: any = await singer.stream(QueryFound[0].url);
const _Found = [
{
type: "[ AUDIO ]: highest quality",
quick_dl: stream.url,
YT_ID: Queryrslt[0].videoId,
TITLE: Queryrslt[0].title,
LINK: Queryrslt[0].url,
THUMB: Queryrslt[0].thumbnail,
HQ_IMAGE: Queryrslt[0].image,
},
];
logger.info(_Found);
return res.send(_Found);
} else {
const _maker: any = await YouTube_Genre(QueryFound[0].url);
if (quality === "1080p") {
const _Found = [
{
type: "[ VIDEO ]: 1080p",
id: _maker.id,
title: _maker.title,
size: _maker.video["1080p"].Fsize,
quick_dl: await _maker.video["1080p"].download(),
YT_ID: Queryrslt[0].videoId,
TITLE: Queryrslt[0].title,
LINK: Queryrslt[0].url,
THUMB: Queryrslt[0].thumbnail,
HQ_IMAGE: Queryrslt[0].image,
},
];
logger.info(_Found);
return res.send(_Found);
} else if (quality === "720p") {
const _Found = [
{
type: "[ VIDEO ]: 720p",
id: _maker.id,
title: _maker.title,
size: _maker.video["720p"].Fsize,
quick_dl: await _maker.video["720p"].download(),
YT_ID: Queryrslt[0].videoId,
TITLE: Queryrslt[0].title,
LINK: Queryrslt[0].url,
THUMB: Queryrslt[0].thumbnail,
HQ_IMAGE: Queryrslt[0].image,
},
];
logger.info(_Found);
return res.send(_Found);
} else if (quality === "480p") {
const _Found = [
{
type: "[ VIDEO ]: 480p",
id: _maker.id,
title: _maker.title,
size: _maker.video["480p"].Fsize,
quick_dl: await _maker.video["480p"].download(),
YT_ID: Queryrslt[0].videoId,
TITLE: Queryrslt[0].title,
LINK: Queryrslt[0].url,
THUMB: Queryrslt[0].thumbnail,
HQ_IMAGE: Queryrslt[0].image,
},
];
logger.info(_Found);
return res.send(_Found);
} else if (quality === "360p") {
const _Found = [
{
type: "[ VIDEO ]: 360p",
id: _maker.id,
title: _maker.title,
size: _maker.video["360p"].Fsize,
quick_dl: await _maker.video["360p"].download(),
YT_ID: Queryrslt[0].videoId,
TITLE: Queryrslt[0].title,
LINK: Queryrslt[0].url,
THUMB: Queryrslt[0].thumbnail,
HQ_IMAGE: Queryrslt[0].image,
},
];
logger.info(_Found);
return res.send(_Found);
} else if (quality === "240p") {
const _Found = [
{
type: "[ VIDEO ]: 240p",
id: _maker.id,
title: _maker.title,
size: _maker.video["240p"].Fsize,
quick_dl: await _maker.video["240p"].download(),
YT_ID: Queryrslt[0].videoId,
TITLE: Queryrslt[0].title,
LINK: Queryrslt[0].url,
THUMB: Queryrslt[0].thumbnail,
HQ_IMAGE: Queryrslt[0].image,
},
];
logger.info(_Found);
return res.send(_Found);
} else if (quality === "144p") {
const _Found = [
{
type: "[ VIDEO ]: 144p",
id: _maker.id,
title: _maker.title,
size: _maker.video["144p"].Fsize,
quick_dl: await _maker.video["144p"].download(),
YT_ID: Queryrslt[0].videoId,
TITLE: Queryrslt[0].title,
LINK: Queryrslt[0].url,
THUMB: Queryrslt[0].thumbnail,
HQ_IMAGE: Queryrslt[0].image,
},
];
logger.info(_Found);
return res.send(_Found);
} else if (quality === "128kbps") {
let stream: any = await singer.stream("https://youtu.be/RpHIdB7i0oM");
const _Found = [
{
type: "[ AUDIO ]: 128kbps",
id: _maker.id,
title: _maker.title,
size: _maker.audio["128kbps"].Fsize,
quick_dl: await shorten(stream.url),
YT_ID: Queryrslt[0].videoId,
TITLE: Queryrslt[0].title,
LINK: Queryrslt[0].url,
THUMB: Queryrslt[0].thumbnail,
HQ_IMAGE: Queryrslt[0].image,
},
];
logger.info(_Found);
return res.send(_Found);
} else {
return res.send({
_status: "Failed with error code 911",
_message: "Please provide download quality",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_example: [
"/api/youtube_dl?q=ncs music 5 minutes&quality=1080p",
"/api/youtube_dl?q=ncs music 5 minutes&quality=128kbps",
],
_usage: [
{
_1080p: "'https://youtu.be/need_arg', '1080p'",
_720p: "'https://youtu.be/need_arg', '720p'",
_480p: "'https://youtu.be/need_arg', '480p'",
_360p: "'https://youtu.be/need_arg', '360p'",
_240p: "'https://youtu.be/need_arg', '144p'",
_144p: "'https://youtu.be/need_arg', '144p'",
_128kbps: "'https://youtu.be/need_arg', '128kbps'",
},
],
});
}
}
} else {
return res.send({
_status: "Failed with error code 911",
_message: "Please provide download quality",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_example: [
"/api/youtube_dl?q=ncs music 5 minutes&quality=1080p",
"/api/youtube_dl?q=ncs music 5 minutes&quality=128kbps",
],
_usage: [
{
_1080p: "'https://youtu.be/need_arg', '1080p'",
_720p: "'https://youtu.be/need_arg', '720p'",
_480p: "'https://youtu.be/need_arg', '480p'",
_360p: "'https://youtu.be/need_arg', '360p'",
_240p: "'https://youtu.be/need_arg', '144p'",
_144p: "'https://youtu.be/need_arg', '144p'",
_128kbps: "'https://youtu.be/need_arg', '128kbps'",
},
],
});
}
} catch (error: any) {
return res.status(500).json({
status: "error",
message: error.message,
});
}
}
