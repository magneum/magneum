import axios from "axios";
import moment from "moment";
import { load } from "cheerio";
import logger from "../../services";
import { v4 as uuidv4 } from "uuid";
const malScraper = require("mal-scraper");
import type { NextApiRequest, NextApiResponse } from "next";

export default async function test(req: NextApiRequest, res: NextApiResponse) {
  try {
    const _data = await axios.get("https://otakudesu.moe/ongoing-anime/");
    const $ = load(_data.data);
    const result = [];
    const thumbnail = [];
    const release = [];
    const webpage = [];
    const episode = [];
    const title = [];
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
        _title: title[i],
        _thumbnail: thumbnail[i],
        _current: episode[i],
        _release: release[i],
        _webpage: webpage[i],
      });
    }
    var _Found = [
      {
        _status: "🎊success",
        _uuid: uuidv4(),
        _animes: result,
      },
    ];
    logger.info(_Found);
    return res.send(_Found);
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
}
