import moment from "moment";
import logger from "../../services";
import { v4 as uuidv4 } from "uuid";
const malScraper = require("mal-scraper");
import type { NextApiRequest, NextApiResponse } from "next";

export default async function test(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.query.q) {
      malScraper.getInfoFromName(req.query.q).then((cobra: any) => {
        var _Found = [
          {
            _status: "🎊success",
            _uuid: uuidv4(),
            _mal_id: cobra.id,
            _title: cobra.title,
            _en_title: cobra.englishTitle,
            _jp_title: cobra.japaneseTitle,
            _image: cobra.picture,
            _premiered: cobra.premiered,
            _webpage: cobra.url,
            _broadcast: cobra.broadcast,
            _genres: cobra.genres,
            _type: cobra.type,
            _episodes: cobra.episodes,
            _rating: cobra.rating,
            _aired: cobra.aired,
            _score: cobra.score,
            _favourites: cobra.favorites,
            _rank: cobra.ranked,
            _duration: cobra.duration,
            _studios: cobra.studios,
            _producers: cobra.producers,
            _popularity: cobra.popularity,
            _members: cobra.members,
            _scores: cobra.scoreStats,
            _source: cobra.source,
            _synonyms: cobra.synonyms,
            _synopsis: cobra.synopsis,
            _characters: cobra.charaters,
            _staffs: cobra.staff,
          },
        ];
        logger.info(_Found);
        return res.send(_Found);
      });
    } else {
      return res.send({
        _status: "Failed with error code 911",
        _message: "Parameters requirement not met.",
        _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
        _usage: {
          _api_link: "/api/youtube?q=",
          _example: ["/api/anime?q=death note"],
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
