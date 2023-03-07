import got from "got";
import https from "https";
import moment from "moment";
import logger from "../../log";
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

export default async function animation(
req: NextApiRequest,
res: NextApiResponse
) {
try {
switch (req.query.q) {
case "nsfw":
await got("https://www.reddit.com/r/nsfw/random.json").then(
async (Form) => {
var FF = JSON.parse(Form.body);
var FFLink = FF[0].data.children[0].data.url;
if (FFLink) {
var _Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[NSFW Images]",
_query: req.query.q,
_url: await shorten(FFLink),
_domain: FF[0].data.children[0].data.domain,
_sub_reddit_id: FF[0].data.children[0].data.subreddit_id,
_title: FF[0].data.children[0].data.title,
_author: FF[0].data.children[0].data.author,
_thumbnail: FF[0].data.children[0].data.thumbnail,
_web_link:
"https://www.reddit.com" +
FF[0].data.children[0].data.permalink,
},
];
logger.info(_Found);
return res.send(_Found);
}
}
);
break;
case "nsfw2":
await got("https://www.reddit.com/r/nsfw2/random.json").then(
async (Form) => {
var FF = JSON.parse(Form.body);
var FFLink = FF[0].data.children[0].data.url;
if (FFLink) {
var _Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[NSFW Images]",
_query: req.query.q,
_url: await shorten(FFLink),
_domain: FF[0].data.children[0].data.domain,
_sub_reddit_id: FF[0].data.children[0].data.subreddit_id,
_title: FF[0].data.children[0].data.title,
_author: FF[0].data.children[0].data.author,
_thumbnail: FF[0].data.children[0].data.thumbnail,
_web_link:
"https://www.reddit.com" +
FF[0].data.children[0].data.permalink,
},
];
logger.info(_Found);
return res.send(_Found);
}
}
);
break;
case "bonermaterial":
await got("https://www.reddit.com/r/bonermaterial/random.json").then(
async (Form) => {
var FF = JSON.parse(Form.body);
var FFLink = FF[0].data.children[0].data.url;
if (FFLink) {
var _Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[NSFW Images]",
_query: req.query.q,
_url: await shorten(FFLink),
_domain: FF[0].data.children[0].data.domain,
_sub_reddit_id: FF[0].data.children[0].data.subreddit_id,
_title: FF[0].data.children[0].data.title,
_author: FF[0].data.children[0].data.author,
_thumbnail: FF[0].data.children[0].data.thumbnail,
_web_link:
"https://www.reddit.com" +
FF[0].data.children[0].data.permalink,
},
];
logger.info(_Found);
return res.send(_Found);
}
}
);
break;
case "nsfw411":
await got("https://www.reddit.com/r/nsfw411/random.json").then(
async (Form) => {
var FF = JSON.parse(Form.body);
var FFLink = FF[0].data.children[0].data.url;
if (FFLink) {
var _Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[NSFW Images]",
_query: req.query.q,
_url: await shorten(FFLink),
_domain: FF[0].data.children[0].data.domain,
_sub_reddit_id: FF[0].data.children[0].data.subreddit_id,
_title: FF[0].data.children[0].data.title,
_author: FF[0].data.children[0].data.author,
_thumbnail: FF[0].data.children[0].data.thumbnail,
_web_link:
"https://www.reddit.com" +
FF[0].data.children[0].data.permalink,
},
];
logger.info(_Found);
return res.send(_Found);
}
}
);
break;
case "iwanttofuckher":
await got("https://www.reddit.com/r/iWantToFuckHer/random.json").then(
async (Form) => {
var FF = JSON.parse(Form.body);
var FFLink = FF[0].data.children[0].data.url;
if (FFLink) {
var _Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[NSFW Images]",
_query: req.query.q,
_url: await shorten(FFLink),
_domain: FF[0].data.children[0].data.domain,
_sub_reddit_id: FF[0].data.children[0].data.subreddit_id,
_title: FF[0].data.children[0].data.title,
_author: FF[0].data.children[0].data.author,
_thumbnail: FF[0].data.children[0].data.thumbnail,
_web_link:
"https://www.reddit.com" +
FF[0].data.children[0].data.permalink,
},
];
logger.info(_Found);
return res.send(_Found);
}
}
);
break;
case "exxxtras":
await got("https://www.reddit.com/r/exxxtras/random.json").then(
async (Form) => {
var FF = JSON.parse(Form.body);
var FFLink = FF[0].data.children[0].data.url;
if (FFLink) {
var _Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[NSFW Images]",
_query: req.query.q,
_url: await shorten(FFLink),
_domain: FF[0].data.children[0].data.domain,
_sub_reddit_id: FF[0].data.children[0].data.subreddit_id,
_title: FF[0].data.children[0].data.title,
_author: FF[0].data.children[0].data.author,
_thumbnail: FF[0].data.children[0].data.thumbnail,
_web_link:
"https://www.reddit.com" +
FF[0].data.children[0].data.permalink,
},
];
logger.info(_Found);
return res.send(_Found);
}
}
);
break;
case "distension":
await got("https://www.reddit.com/r/distension/random.json").then(
async (Form) => {
var FF = JSON.parse(Form.body);
var FFLink = FF[0].data.children[0].data.url;
if (FFLink) {
var _Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[NSFW Images]",
_query: req.query.q,
_url: await shorten(FFLink),
_domain: FF[0].data.children[0].data.domain,
_sub_reddit_id: FF[0].data.children[0].data.subreddit_id,
_title: FF[0].data.children[0].data.title,
_author: FF[0].data.children[0].data.author,
_thumbnail: FF[0].data.children[0].data.thumbnail,
_web_link:
"https://www.reddit.com" +
FF[0].data.children[0].data.permalink,
},
];
logger.info(_Found);
return res.send(_Found);
}
}
);
break;
case "bimbofetish":
await got("https://www.reddit.com/r/bimbofetish/random.json").then(
async (Form) => {
var FF = JSON.parse(Form.body);
var FFLink = FF[0].data.children[0].data.url;
if (FFLink) {
var _Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[NSFW Images]",
_query: req.query.q,
_url: await shorten(FFLink),
_domain: FF[0].data.children[0].data.domain,
_sub_reddit_id: FF[0].data.children[0].data.subreddit_id,
_title: FF[0].data.children[0].data.title,
_author: FF[0].data.children[0].data.author,
_thumbnail: FF[0].data.children[0].data.thumbnail,
_web_link:
"https://www.reddit.com" +
FF[0].data.children[0].data.permalink,
},
];
logger.info(_Found);
return res.send(_Found);
}
}
);
break;
case "christiangirls":
await got("https://www.reddit.com/r/christiangirls/random.json").then(
async (Form) => {
var FF = JSON.parse(Form.body);
var FFLink = FF[0].data.children[0].data.url;
if (FFLink) {
var _Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[NSFW Images]",
_query: req.query.q,
_url: await shorten(FFLink),
_domain: FF[0].data.children[0].data.domain,
_sub_reddit_id: FF[0].data.children[0].data.subreddit_id,
_title: FF[0].data.children[0].data.title,
_author: FF[0].data.children[0].data.author,
_thumbnail: FF[0].data.children[0].data.thumbnail,
_web_link:
"https://www.reddit.com" +
FF[0].data.children[0].data.permalink,
},
];
logger.info(_Found);
return res.send(_Found);
}
}
);
break;
case "dirtygaming":
await got("https://www.reddit.com/r/dirtygaming/random.json").then(
async (Form) => {
var FF = JSON.parse(Form.body);
var FFLink = FF[0].data.children[0].data.url;
if (FFLink) {
var _Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[NSFW Images]",
_query: req.query.q,
_url: await shorten(FFLink),
_domain: FF[0].data.children[0].data.domain,
_sub_reddit_id: FF[0].data.children[0].data.subreddit_id,
_title: FF[0].data.children[0].data.title,
_author: FF[0].data.children[0].data.author,
_thumbnail: FF[0].data.children[0].data.thumbnail,
_web_link:
"https://www.reddit.com" +
FF[0].data.children[0].data.permalink,
},
];
logger.info(_Found);
return res.send(_Found);
}
}
);
break;
case "sexybutnotporn":
await got("https://www.reddit.com/r/sexybutnotporn/random.json").then(
async (Form) => {
var FF = JSON.parse(Form.body);
var FFLink = FF[0].data.children[0].data.url;
if (FFLink) {
var _Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[NSFW Images]",
_query: req.query.q,
_url: await shorten(FFLink),
_domain: FF[0].data.children[0].data.domain,
_sub_reddit_id: FF[0].data.children[0].data.subreddit_id,
_title: FF[0].data.children[0].data.title,
_author: FF[0].data.children[0].data.author,
_thumbnail: FF[0].data.children[0].data.thumbnail,
_web_link:
"https://www.reddit.com" +
FF[0].data.children[0].data.permalink,
},
];
logger.info(_Found);
return res.send(_Found);
}
}
);
break;
case "femalepov":
await got("https://www.reddit.com/r/femalepov/random.json").then(
async (Form) => {
var FF = JSON.parse(Form.body);
var FFLink = FF[0].data.children[0].data.url;
if (FFLink) {
var _Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[NSFW Images]",
_query: req.query.q,
_url: await shorten(FFLink),
_domain: FF[0].data.children[0].data.domain,
_sub_reddit_id: FF[0].data.children[0].data.subreddit_id,
_title: FF[0].data.children[0].data.title,
_author: FF[0].data.children[0].data.author,
_thumbnail: FF[0].data.children[0].data.thumbnail,
_web_link:
"https://www.reddit.com" +
FF[0].data.children[0].data.permalink,
},
];
logger.info(_Found);
return res.send(_Found);
}
}
);
break;
case "omgbeckylookathiscock":
await got(
"https://www.reddit.com/r/omgbeckylookathiscock/random.json"
).then(async (Form) => {
var FF = JSON.parse(Form.body);
var FFLink = FF[0].data.children[0].data.url;
if (FFLink) {
var _Found = [
{
_status: "🎊success",
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_query: req.query.q,
_url: await shorten(FFLink),
_domain: FF[0].data.children[0].data.domain,
_sub_reddit_id: FF[0].data.children[0].data.subreddit_id,
_title: FF[0].data.children[0].data.title,
_author: FF[0].data.children[0].data.author,
_thumbnail: FF[0].data.children[0].data.thumbnail,
_web_link:
"https://www.reddit.com" +
FF[0].data.children[0].data.permalink,
},
];
logger.info(_Found);
return res.send(_Found);
}
});
break;
case "sexygirls":
await got("https://www.reddit.com/r/sexygirls/random.json").then(
async (Form) => {
var FF = JSON.parse(Form.body);
var FFLink = FF[0].data.children[0].data.url;
if (FFLink) {
var _Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[NSFW Images]",
_query: req.query.q,
_url: await shorten(FFLink),
_domain: FF[0].data.children[0].data.domain,
_sub_reddit_id: FF[0].data.children[0].data.subreddit_id,
_title: FF[0].data.children[0].data.title,
_author: FF[0].data.children[0].data.author,
_thumbnail: FF[0].data.children[0].data.thumbnail,
_web_link:
"https://www.reddit.com" +
FF[0].data.children[0].data.permalink,
},
];
logger.info(_Found);
return res.send(_Found);
}
}
);
break;
case "breedingmaterial":
await got("https://www.reddit.com/r/breedingmaterial/random.json").then(
async (Form) => {
var FF = JSON.parse(Form.body);
var FFLink = FF[0].data.children[0].data.url;
if (FFLink) {
var _Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[NSFW Images]",
_query: req.query.q,
_url: await shorten(FFLink),
_domain: FF[0].data.children[0].data.domain,
_sub_reddit_id: FF[0].data.children[0].data.subreddit_id,
_title: FF[0].data.children[0].data.title,
_author: FF[0].data.children[0].data.author,
_thumbnail: FF[0].data.children[0].data.thumbnail,
_web_link:
"https://www.reddit.com" +
FF[0].data.children[0].data.permalink,
},
];
logger.info(_Found);
return res.send(_Found);
}
}
);
break;
case "toocuteforporn":
await got("https://www.reddit.com/r/toocuteforporn/random.json").then(
async (Form) => {
var FF = JSON.parse(Form.body);
var FFLink = FF[0].data.children[0].data.url;
if (FFLink) {
var _Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[NSFW Images]",
_query: req.query.q,
_url: await shorten(FFLink),
_domain: FF[0].data.children[0].data.domain,
_sub_reddit_id: FF[0].data.children[0].data.subreddit_id,
_title: FF[0].data.children[0].data.title,
_author: FF[0].data.children[0].data.author,
_thumbnail: FF[0].data.children[0].data.thumbnail,
_web_link:
"https://www.reddit.com" +
FF[0].data.children[0].data.permalink,
},
];
logger.info(_Found);
return res.send(_Found);
}
}
);
break;
case "justhotwomen":
await got("https://www.reddit.com/r/justhotwomen/random.json").then(
async (Form) => {
var FF = JSON.parse(Form.body);
var FFLink = FF[0].data.children[0].data.url;
if (FFLink) {
var _Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[NSFW Images]",
_query: req.query.q,
_url: await shorten(FFLink),
_domain: FF[0].data.children[0].data.domain,
_sub_reddit_id: FF[0].data.children[0].data.subreddit_id,
_title: FF[0].data.children[0].data.title,
_author: FF[0].data.children[0].data.author,
_thumbnail: FF[0].data.children[0].data.thumbnail,
_web_link:
"https://www.reddit.com" +
FF[0].data.children[0].data.permalink,
},
];
logger.info(_Found);
return res.send(_Found);
}
}
);
break;
case "stripgirls":
await got("https://www.reddit.com/r/stripgirls/random.json").then(
async (Form) => {
var FF = JSON.parse(Form.body);
var FFLink = FF[0].data.children[0].data.url;
if (FFLink) {
var _Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[NSFW Images]",
_query: req.query.q,
_url: await shorten(FFLink),
_domain: FF[0].data.children[0].data.domain,
_sub_reddit_id: FF[0].data.children[0].data.subreddit_id,
_title: FF[0].data.children[0].data.title,
_author: FF[0].data.children[0].data.author,
_thumbnail: FF[0].data.children[0].data.thumbnail,
_web_link:
"https://www.reddit.com" +
FF[0].data.children[0].data.permalink,
},
];
logger.info(_Found);
return res.send(_Found);
}
}
);
break;
case "hotstuffnsfw":
await got("https://www.reddit.com/r/hotstuffnsfw/random.json").then(
async (Form) => {
var FF = JSON.parse(Form.body);
var FFLink = FF[0].data.children[0].data.url;
if (FFLink) {
var _Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[NSFW Images]",
_query: req.query.q,
_url: await shorten(FFLink),
_domain: FF[0].data.children[0].data.domain,
_sub_reddit_id: FF[0].data.children[0].data.subreddit_id,
_title: FF[0].data.children[0].data.title,
_author: FF[0].data.children[0].data.author,
_thumbnail: FF[0].data.children[0].data.thumbnail,
_web_link:
"https://www.reddit.com" +
FF[0].data.children[0].data.permalink,
},
];
logger.info(_Found);
return res.send(_Found);
}
}
);
break;
case "uncommonposes":
await got("https://www.reddit.com/r/uncommonposes/random.json").then(
async (Form) => {
var FF = JSON.parse(Form.body);
var FFLink = FF[0].data.children[0].data.url;
if (FFLink) {
var _Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[NSFW Images]",
_query: req.query.q,
_url: await shorten(FFLink),
_domain: FF[0].data.children[0].data.domain,
_sub_reddit_id: FF[0].data.children[0].data.subreddit_id,
_title: FF[0].data.children[0].data.title,
_author: FF[0].data.children[0].data.author,
_thumbnail: FF[0].data.children[0].data.thumbnail,
_web_link:
"https://www.reddit.com" +
FF[0].data.children[0].data.permalink,
},
];
logger.info(_Found);
return res.send(_Found);
}
}
);
break;
case "gifsofremoval":
await got("https://www.reddit.com/r/gifsofremoval/random.json").then(
async (Form) => {
var FF = JSON.parse(Form.body);
var FFLink = FF[0].data.children[0].data.url;
if (FFLink) {
var _Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[NSFW Images]",
_query: req.query.q,
_url: await shorten(FFLink),
_domain: FF[0].data.children[0].data.domain,
_sub_reddit_id: FF[0].data.children[0].data.subreddit_id,
_title: FF[0].data.children[0].data.title,
_author: FF[0].data.children[0].data.author,
_thumbnail: FF[0].data.children[0].data.thumbnail,
_web_link:
"https://www.reddit.com" +
FF[0].data.children[0].data.permalink,
},
];
logger.info(_Found);
return res.send(_Found);
}
}
);
break;
case "nostalgiafapping":
await got("https://www.reddit.com/r/nostalgiafapping/random.json").then(
async (Form) => {
var FF = JSON.parse(Form.body);
var FFLink = FF[0].data.children[0].data.url;
if (FFLink) {
var _Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[NSFW Images]",
_query: req.query.q,
_url: await shorten(FFLink),
_domain: FF[0].data.children[0].data.domain,
_sub_reddit_id: FF[0].data.children[0].data.subreddit_id,
_title: FF[0].data.children[0].data.title,
_author: FF[0].data.children[0].data.author,
_thumbnail: FF[0].data.children[0].data.thumbnail,
_web_link:
"https://www.reddit.com" +
FF[0].data.children[0].data.permalink,
},
];
logger.info(_Found);
return res.send(_Found);
}
}
);
break;
case "truefmk":
await got("https://www.reddit.com/r/truefmk/random.json").then(
async (Form) => {
var FF = JSON.parse(Form.body);
var FFLink = FF[0].data.children[0].data.url;
if (FFLink) {
var _Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[NSFW Images]",
_query: req.query.q,
_url: await shorten(FFLink),
_domain: FF[0].data.children[0].data.domain,
_sub_reddit_id: FF[0].data.children[0].data.subreddit_id,
_title: FF[0].data.children[0].data.title,
_author: FF[0].data.children[0].data.author,
_thumbnail: FF[0].data.children[0].data.thumbnail,
_web_link:
"https://www.reddit.com" +
FF[0].data.children[0].data.permalink,
},
];
logger.info(_Found);
return res.send(_Found);
}
}
);
break;
case "nudes":
await got("https://www.reddit.com//r/nudes/random.json").then(
async (Form) => {
var FF = JSON.parse(Form.body);
var FFLink = FF[0].data.children[0].data.url;
if (FFLink) {
var _Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[NSFW Images]",
_query: req.query.q,
_url: await shorten(FFLink),
_domain: FF[0].data.children[0].data.domain,
_sub_reddit_id: FF[0].data.children[0].data.subreddit_id,
_title: FF[0].data.children[0].data.title,
_author: FF[0].data.children[0].data.author,
_thumbnail: FF[0].data.children[0].data.thumbnail,
_web_link:
"https://www.reddit.com" +
FF[0].data.children[0].data.permalink,
},
];
logger.info(_Found);
return res.send(_Found);
}
}
);
break;
case "4k":
case "realgirls":
await got("https://www.reddit.com/r/RealGirls/random.json").then(
async (Form) => {
var FF = JSON.parse(Form.body);
var FFLink = FF[0].data.children[0].data.url;
if (FFLink) {
var _Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[NSFW Images]",
_query: req.query.q,
_url: await shorten(FFLink),
_domain: FF[0].data.children[0].data.domain,
_sub_reddit_id: FF[0].data.children[0].data.subreddit_id,
_title: FF[0].data.children[0].data.title,
_author: FF[0].data.children[0].data.author,
_thumbnail: FF[0].data.children[0].data.thumbnail,
_web_link:
"https://www.reddit.com" +
FF[0].data.children[0].data.permalink,
},
];
logger.info(_Found);
return res.send(_Found);
}
}
);
break;
case "blowjobs":
await got("https://www.reddit.com/r/Blowjobs/random.json").then(
async (Form) => {
var FF = JSON.parse(Form.body);
var FFLink = FF[0].data.children[0].data.url;
if (FFLink) {
var _Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[NSFW Images]",
_query: req.query.q,
_url: await shorten(FFLink),
_domain: FF[0].data.children[0].data.domain,
_sub_reddit_id: FF[0].data.children[0].data.subreddit_id,
_title: FF[0].data.children[0].data.title,
_author: FF[0].data.children[0].data.author,
_thumbnail: FF[0].data.children[0].data.thumbnail,
_web_link:
"https://www.reddit.com" +
FF[0].data.children[0].data.permalink,
},
];
logger.info(_Found);
return res.send(_Found);
}
}
);
break;
case "milf":
await got("https://www.reddit.com/r/milf/random.json").then(
async (Form) => {
var FF = JSON.parse(Form.body);
var FFLink = FF[0].data.children[0].data.url;
if (FFLink) {
var _Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[NSFW Images]",
_query: req.query.q,
_url: await shorten(FFLink),
_domain: FF[0].data.children[0].data.domain,
_sub_reddit_id: FF[0].data.children[0].data.subreddit_id,
_title: FF[0].data.children[0].data.title,
_author: FF[0].data.children[0].data.author,
_thumbnail: FF[0].data.children[0].data.thumbnail,
_web_link:
"https://www.reddit.com" +
FF[0].data.children[0].data.permalink,
},
];
logger.info(_Found);
return res.send(_Found);
}
}
);
break;
case "milk":
case "milking":
case "lactating":
await got("https://www.reddit.com/r/lactating/random.json").then(
async (Form) => {
var FF = JSON.parse(Form.body);
var FFLink = FF[0].data.children[0].data.url;
if (FFLink) {
var _Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[NSFW Images]",
_query: req.query.q,
_url: await shorten(FFLink),
_domain: FF[0].data.children[0].data.domain,
_sub_reddit_id: FF[0].data.children[0].data.subreddit_id,
_title: FF[0].data.children[0].data.title,
_author: FF[0].data.children[0].data.author,
_thumbnail: FF[0].data.children[0].data.thumbnail,
_web_link:
"https://www.reddit.com" +
FF[0].data.children[0].data.permalink,
},
];
logger.info(_Found);
return res.send(_Found);
}
}
);
break;
case "pussy":
await got("https://www.reddit.com/r/pussy/random.json").then(
async (Form) => {
var FF = JSON.parse(Form.body);
var FFLink = FF[0].data.children[0].data.url;
if (FFLink) {
var _Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[NSFW Images]",
_query: req.query.q,
_url: await shorten(FFLink),
_domain: FF[0].data.children[0].data.domain,
_sub_reddit_id: FF[0].data.children[0].data.subreddit_id,
_title: FF[0].data.children[0].data.title,
_author: FF[0].data.children[0].data.author,
_thumbnail: FF[0].data.children[0].data.thumbnail,
_web_link:
"https://www.reddit.com" +
FF[0].data.children[0].data.permalink,
},
];
logger.info(_Found);
return res.send(_Found);
}
}
);
break;
case "cum":
case "slut":
case "cumslut":
await got("https://www.reddit.com/r/cumsluts/random.json").then(
async (Form) => {
var FF = JSON.parse(Form.body);
var FFLink = FF[0].data.children[0].data.url;
if (FFLink) {
var _Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[NSFW Images]",
_query: req.query.q,
_url: await shorten(FFLink),
_domain: FF[0].data.children[0].data.domain,
_sub_reddit_id: FF[0].data.children[0].data.subreddit_id,
_title: FF[0].data.children[0].data.title,
_author: FF[0].data.children[0].data.author,
_thumbnail: FF[0].data.children[0].data.thumbnail,
_web_link:
"https://www.reddit.com" +
FF[0].data.children[0].data.permalink,
},
];
logger.info(_Found);
return res.send(_Found);
}
}
);
break;
default:
res.send({
_status: "Failed with error code 911",
_message: "Parameters requirement not met.",
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_usage: {
_api_link: "/api/nsfw?q=",
_example: "/api/nsfw?q=ass",
_querry: [
"nsfw",
"nsfw2",
"bonermaterial",
"nsfw411",
"iwanttofuckher",
"exxxtras",
"distension",
"bimbofetish",
"christiangirls",
"dirtygaming",
"sexybutnotporn",
"femalepov",
"omgbeckylookathiscock",
"sexygirls",
"breedingmaterial",
"canthold",
"toocuteforporn",
"justhotwomen",
"stripgirls",
"hotstuffnsfw",
"uncommonposes",
"gifsofremoval",
"nostalgiafapping",
"truefmk",
"nudes",
"4k",
"realgirls",
"blowjobs",
"milf",
"milk",
"milking",
"lactating",
"pussy",
"cum",
"slut",
"cumslut",
],
},
});
break;
}
} catch (error: any) {
return res.status(500).json({
status: "error",
message: error.message,
});
}
}
