import axios from "axios";
import moment from "moment";
import logger from "../../services";
import { v4 as uuidv4 } from "uuid";
import { load as cLoad } from "cheerio";
import type { NextApiRequest, NextApiResponse } from "next";

function Wallpaper_Flare(query: any) {
  return new Promise((resolve, reject) => {
    axios
      .get("https://www.wallpaperflare.com/search?wallpaper=" + query, {
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",
          cookie:
            "_ga=GA1.2.863074474.1624987429; _gid=GA1.2.857771494.1624987429; __gads=ID=84d12a6ae82d0a63-2242b0820eca0058:T=1624987427:RT=1624987427:S=ALNI_MaJYaH0-_xRbokdDkQ0B49vSYgYcQ",
        },
      })
      .then(({ data }) => {
        const $ = cLoad(data);
        const result: any = [];
        $("#gallery > li > figure > a").each(function (a: any, b: any) {
          result.push($(b).find("img").attr("data-src"));
        });
        resolve(result);
      })
      .catch();
  });
}

export default async function test(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.query.q) {
      const cobra = await Wallpaper_Flare(req.query.q);
      var _Found = [
        {
          _status: "🎊success",
          _uuid: uuidv4(),
          _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
          _topic: "Wallpapers from Wallpaper Flare",
          _query: req.query.q,
          links: cobra,
        },
      ];
      logger.info(_Found);
      return res.send(_Found);
    } else {
      return res.send({
        _status: "Failed with error code 911",
        _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
        _usage: {
          _api_link: "/api/wallpaper?q=",
          _example: ["/api/wallpaper?q=dog"],
        },
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
}
