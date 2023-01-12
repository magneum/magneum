import axios from "axios";
import fetch from "node-fetch";
const unirest = require("unirest");
const request = require("request");
import logger from "../../services";
import { v4 as uuidv4 } from "uuid";
const malScraper = require("mal-scraper");
import type { NextApiRequest, NextApiResponse } from "next";

export default async function test(req: NextApiRequest, res: NextApiResponse) {
  if (req.query.q) {
    malScraper.getInfoFromName(req.query.q).then((cobra: any) => {
      res.send([
        {
          status: "✓ success ✓",
          _id: uuidv4(),
          MAL_ID: cobra.id,
          TITLE: cobra.title,
          EN_TITLE: cobra.englishTitle,
          JP_TITLE: cobra.japaneseTitle,
          IMAGE: cobra.picture,
          PREMIERED: cobra.premiered,
          WEBPAGE: cobra.url,
          BROADCAST: cobra.broadcast,
          GENRES: cobra.genres,
          TYPE: cobra.type,
          EPISODES: cobra.episodes,
          RATING: cobra.rating,
          AIRED: cobra.aired,
          SCORE: cobra.score,
          FAVORITES: cobra.favorites,
          RANK: cobra.ranked,
          DURATION: cobra.duration,
          STUDIOS: cobra.studios,
          PRODUCERS: cobra.producers,
          POPULARITY: cobra.popularity,
          TOTAL_MEMBERS: cobra.members,
          SCORE_STATUS: cobra.scoreStats,
          SOURCE: cobra.source,
          SYNONYMS: cobra.synonyms,
          STATUS: cobra.status,
          SYNOPSIS: cobra.synopsis,
          CHARACTERS: cobra.charaters,
          STAFF: cobra.staff,
        },
      ]);
    });
  } else {
    res.send({
      _status: "⚠️ failed",
      TIMESTAMP: Date.now(),
      USAGE: {
        endpoint: "/api/youtube?q=",
        example: ["/api/anime?q=death note"],
      },
    });
  }
}
