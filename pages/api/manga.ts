import https from "https";
import logger from "@/log";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
const { Manga } = require("@shineiichijo/marika");
import type { NextApiRequest, NextApiResponse } from "next";

function shorten(url: any) {
  https.get(
    "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(url),
    (res) => {
      res.on("data", (chunk) => {
        return chunk.toString();
      });
    }
  );
}

export default async function test(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.query.q) {
      let argument = req.query.q as any;
      var manga = new Manga();
      var resp = await manga.searchManga(decodeURI(argument));
      if (!resp.data) {
        return res.status(500).json({
          id: uuidv4(),
          status: false,
          message: "Server error.",
          timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
          usage: {
            endpoint: "/api/manga?q=",
            example: "/api/manga?q=My Hero Academia by Kohei Horikoshi",
          },
        });
      }
      let Genres = "";
      let Authors = "";
      for (var i = 0; i < resp.data[0].genres.length; i++) {
        Genres += `${resp.data[0].genres[i].name}`;
      }
      for (var i = 0; i < resp.data[0].authors.length; i++) {
        Authors += `NAME: ${resp.data[0].authors[i].name} | TYPE: ${resp.data[0].authors[0].type}`;
      }
      return res.status(200).json({
        resp: {
          id: uuidv4(),
          status: true,
          timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
        },
        meta: {
          topic: "MANGA: finder",
          query: argument,
          title: resp.data[0].title,
          chapters: resp.data[0].chapters,
          published_on: resp.data[0].published.from,
          score: resp.data[0].scored,
          popularity: resp.data[0].popularity,
          favorites: resp.data[0].favorites,
          url: resp.data[0].url,
          genres: Genres || null,
          authors: Authors || null,
          background: resp.data[0].background || null,
          image: shorten(resp.data[0].images.jpg.large_image_url),
          description: resp.data[0].synopsis,
        },
      });
    } else
      return res.status(500).json({
        id: uuidv4(),
        status: false,
        message: "Arguments not satisfied.",
        timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
        usage: {
          endpoint: "/api/manga?q=",
          example: "/api/manga?q=My Hero Academia by Kohei Horikoshi",
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
