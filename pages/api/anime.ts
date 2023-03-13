import logger from "@/log";
import moment from "moment";
import { uuid as uuidv4 } from "uuidv4";
var malScraper = require("mal-scraper");
import type { NextApiRequest, NextApiResponse } from "next";

export default async function test(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.query.q) {
      let argument = req.query.q as any;
      var _resp: any = await malScraper.getInfoFromName(argument);
      if (!_resp) {
        return res.status(500).json({
          status: false,
          message: "Server time error.",
        });
      } else
        return res.status(200).json({
          resp: {
            id: uuidv4(),
            status: true,
            timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
          },
          meta: {
            id_mal: _resp.id,
            title: _resp.title,
            en_title: _resp.englishTitle,
            jp_title: _resp.japaneseTitle,
            image: _resp.picture,
            premiered: _resp.premiered,
            webpage: _resp.url,
            broadcast: _resp.broadcast,
            genres: _resp.genres,
            type: _resp.type,
            episodes: _resp.episodes,
            rating: _resp.rating,
            aired: _resp.aired,
            score: _resp.score,
            favourites: _resp.favorites,
            rank: _resp.ranked,
            duration: _resp.duration,
            studios: _resp.studios,
            producers: _resp.producers,
            popularity: _resp.popularity,
            members: _resp.members,
            scores: _resp.scoreStats,
            source: _resp.source,
            synonyms: _resp.synonyms,
            synopsis: _resp.synopsis,
            characters: _resp.charaters,
            staffs: _resp.staff,
          },
        });
    } else
      return res.status(500).json({
        id: uuidv4(),
        status: false,
        message: "Arguments not satisfied.",
        timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
        usage: {
          endpoint: "/api/anime?q=",
          example: ["/api/anime?q=death note"],
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
