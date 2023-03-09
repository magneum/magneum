import got from "got";
import logger from "@/log";
import moment from "moment";
import { load } from "cheerio";
import { v4 as uuidv4 } from "uuid";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function Google(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.query.q) {
      let argument = req.query.q as any;
      const body = await got("https://www.google.com/search", {
        searchParams: {
          q: `${decodeURI(argument)}`,
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
      return res.send({
        status: true,
        uuid: uuidv4(),
        date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
        topic: "GOOGLE: search",
        title: $("div.I6TXqe > div.osrp-blk")
          .find("h2.qrShPb > span")
          .text()
          .trim(),
        data: data_,
      });
    } else
      return res.status(500).json({
        id: uuidv4(),
        status: false,
        message: "Arguments not satisfied.",
        timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
        usage: {
          endpoint: "/api/google?q=",
          example: "/api/google?q=github",
        },
      });
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
