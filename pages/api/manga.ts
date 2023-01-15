const tinyurl = require("tinyurl");
const request = require("request");
import logger from "../../services";
import { v4 as uuidv4 } from "uuid";
const validUrl = require("valid-url");
import { Anime, Character, Manga } from "@shineiichijo/marika";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function test(req: NextApiRequest, res: NextApiResponse) {
  if (req.query.q) {
    var manga = new Manga();
    var argument: any = req.query.q;
    var response = await manga.searchManga(argument);
    if (!response) {
      res.send({
        _status: "Failed with error code 911",
        TIMESTAMP: Date.now(),
        USAGE: {
          endpoint: "/api/manga?q=",
          example: "/api/manga?q=My Hero Academia by Kohei Horikoshi",
        },
      });
    } else {
      let Genres = "";
      let Authors = "";
      for (var i = 0; i < response.data[0].genres.length; i++) {
        Genres += `${response.data[0].genres[i].name}`;
      }
      for (var i = 0; i < response.data[0].authors.length; i++) {
        Authors += `name=>${response.data[0].authors[i].name} | type=>${response.data[0].authors[0].type}`;
      }
      var _Found = [
        {
          _status: "🎊success",
          _id: uuidv4(),
          TIMESTAMP: Date.now(),
          TOPIC: "Manga Search",
          QUERY: argument,
          Title: response.data[0].title,
          Status: response.data[0].status,
          Total_Chapters: response.data[0].chapters,
          Published_On: response.data[0].published.from,
          Score: response.data[0].scored,
          Popularity: response.data[0].popularity,
          Favorites: response.data[0].favorites,
          URL: response.data[0].url,
          Genres: Genres || null,
          Authors: Authors || null,
          Background: response.data[0].background || null,
          Thumbnail:
            (await tinyurl.shorten(
              response.data[0].images.jpg.large_image_url
            )) || null,
          Description: response.data[0].synopsis,
        },
      ];
      logger.info(_Found);
      return res.send(_Found);
    }
  } else {
    return res.send({
      _status: "Failed with error code 911",
      TIMESTAMP: Date.now(),
      USAGE: {
        endpoint: "/api/manga?q=",
        example: "/api/manga?q=My Hero Academia by Kohei Horikoshi",
      },
    });
  }
}
