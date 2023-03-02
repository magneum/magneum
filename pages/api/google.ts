import got from "got";
import moment from "moment";
import { load } from "cheerio";
import logger from "../../log";
import { v4 as uuidv4 } from "uuid";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function Google(
req: NextApiRequest,
res: NextApiResponse
) {
try {
if (req.query.q) {
const body = await got("https://www.google.com/search", {
searchParams: {
q: `${req.query.q}`,
},
headers: {
origin: "https://www.google.com",
referer: "https://www.google.com/",
"User-Agent":
"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",
},
}).text();
const $ = load(body);
const data_: any = [];
$("div.tF2Cxc").each(function () {
const el = $(this);
const header = el.find("cite.iUh30").text();
const title = el.find("div.yuRUbf > a > h3").text();
const url = el.find("div.yuRUbf > a[href]").attr("href");
if (el.length && url) {
data_.push({
header: header,
title: title,
url,
});
}
});
var _Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "Google Search",
_title: $("div.I6TXqe > div.osrp-blk")
.find("h2.qrShPb > span")
.text()
.trim(),
_data: data_,
},
];
logger.info(_Found);
return res.send(_Found);
} else {
return res.send({
_status: "Failed with error code 911",
_message: "Parameters requirement not met.",
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_usage: {
_api_link: "/api/google?q=",
_example: "/api/google?q=github",
},
});
}
} catch (error: any) {
return res.status(500).json({
status: "error",
message: error.message,
});
}
}
