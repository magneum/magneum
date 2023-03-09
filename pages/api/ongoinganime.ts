import axios from "axios";
import logger from "@/log";
import moment from "moment";
import { load } from "cheerio";
import { v4 as uuidv4 } from "uuid";
const malScraper = require("mal-scraper");
import type { NextApiRequest, NextApiResponse } from "next";

export default async function test(req: NextApiRequest, res: NextApiResponse) {
  try {
    const _data = await axios.get("https://otakudesu.moe/ongoing-anime/");
    const $ = load(_data.data);
    const result: any = [];
    const thumbnail: any = [];
    const release: any = [];
    const webpage: any = [];
    const episode: any = [];
    const title: any = [];
    $("div.detpost").each(function (a, b) {
      thumbnail.push($(b).find("img").attr("src"));
      title.push($(b).find("h2").text());
      webpage.push($(b).find("a").attr("href"));
    });
    $("div.newnime").each(function (f, g) {
      release.push($(g).text());
    });
    $("div.epz").each(function (m, n) {
      episode.push($(n).text());
    });
    for (let i = 0; i < thumbnail.length; i++) {
      result.push({
        title: title[i],
        thumbnail: thumbnail[i],
        current: episode[i],
        release: release[i],
        webpage: webpage[i],
      });
    }

    return res.status(200).json({
      resp: {
        id: uuidv4(),
        status: true,
        timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
      },
      meta: {
        topic: "ANIME: on going",
        animes: result,
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
