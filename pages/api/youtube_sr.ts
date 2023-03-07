import logger from "@/log";
import moment from "moment";
import YouTube_Sr from "yt-search";
import { v4 as uuidv4 } from "uuid";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function test(req: NextApiRequest, res: NextApiResponse) {
try {
const query: any = req.query;
const { q } = query;
console.log(query);
if (q) {
let Found;
let Query: any = await YouTube_Sr(q);
let QueryFound: any = Query.videos.slice(0, 1);
QueryFound.forEach(function (resp: any) {
Found = {
status: true,
uuid: uuidv4(),
date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
topic: "[YouTube Meta Searcher]",
query: q,
youtube_search: [
{
YT_ID: resp.videoId,
TITLE: resp.title,
UPLOADED: resp.ago,
VIEWS: resp.views,
DURATION_FULL: resp.duration.timestamp,
DURATION_SECONDS: resp.duration.seconds,
AUTHOR_NAME: resp.author.name,
AUTHOR_CHANNEL: resp.author.url,
LINK: resp.url,
THUMB: resp.thumbnail,
HQ_IMAGE: resp.image,
DESCRIPTION: resp.description,
},
],
};
});
logger.info(Found);
return res.send(Found);
} else {
return res.send({
status: "Failed with error code 911",
message: "Parameters requirement not met.",
date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
usage: {
endpoint: "/api/youtube_sr?q=",
example: [
"/api/youtube_sr?q=ncs music 5 minutes",
"/api/youtube_sr?q=https://youtu.be/3gxus8LnMfI",
],
},
});
}
} catch (error: any) {
logger.error(error.message);
return res.status(500).json({
id: uuidv4(),
status: false,
timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
message: error.message,
});
}
}
