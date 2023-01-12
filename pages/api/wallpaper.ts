import axios from "axios";
import fetch from "node-fetch";
const tinyurl = require("tinyurl");
const unirest = require("unirest");
const request = require("request");
import logger from "../../services";
import { v4 as uuidv4 } from "uuid";
import { createApi } from "unsplash-js";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function test(req: NextApiRequest, res: NextApiResponse) {
  if (req.query.q) {
    const unsplash = createApi({
      accessKey: "OGx0PMTS_u06PSSsRwTmmxjxfe3OhABXYpDimOjE4d4",
      fetch: fetch,
    });
    const cobra = await unsplash.search.getPhotos({
      query: req.query.q,
      page: 1,
      perPage: 1,
      orderBy: "latest",
      orientation: "portrait",
    });
    if (!cobra) {
      res.send({
        _status: "⚠️ failed",
        TIMESTAMP: Date.now(),
        USAGE: {
          endpoint: "/api/manga?q=",
          example: "/api/manga?q=My Hero Academia by Kohei Horikoshi",
        },
      });
    } else {
      var _Found = [
        {
          _status: "🎊success",
          _id: uuidv4(),
          TIMESTAMP: Date.now(),
          TOPIC: "HD Wallpapers",
          QUERY: req.query.q,
          width: cobra.response.results[0].width,
          height: cobra.response.results[0].height,
          images: [
            {
              raw_size: await tinyurl.shorten(
                cobra.response.results[0].urls.raw
              ),
              full_size: await tinyurl.shorten(
                cobra.response.results[0].urls.full
              ),
              regular_size: await tinyurl.shorten(
                cobra.response.results[0].urls.regular
              ),
              small_size: await tinyurl.shorten(
                cobra.response.results[0].urls.small
              ),
              thumbnail_size: await tinyurl.shorten(
                cobra.response.results[0].urls.thumb
              ),
            },
          ],
        },
      ];
      logger.info(_Found);
      return res.send(_Found);
    }
  } else {
    res.send({
      _status: "⚠️ failed",
      TIMESTAMP: Date.now(),
      USAGE: {
        endpoint: "/api/wallpaper?q=",
        example: [
          "/api/wallpaper?q=dog",
        ],
      },
    });
  }
}
