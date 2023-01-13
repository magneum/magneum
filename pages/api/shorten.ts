const tinyurl = require("tinyurl");
const request = require("request");
import logger from "../../services";
import { v4 as uuidv4 } from "uuid";
const validUrl = require("valid-url");
import type { NextApiRequest, NextApiResponse } from "next";

export default async function test(req: NextApiRequest, res: NextApiResponse) {
  if (req.query.q) {
    if (validUrl.isUri(req.query.q)) {
      var _Found = [
        {
          _status: "🎊success",
          _id: uuidv4(),
          TIMESTAMP: Date.now(),
          TOPIC: "Shorten Url",
          QUERY: req.query.q,
          SHORTEN_URL: await tinyurl.shorten(req.query.q),
        },
      ];
      logger.info(_Found);
      return res.send(_Found);
    } else {
      res.send({
        _status: "Failed with error code 911",
        TIMESTAMP: Date.now(),
        USAGE: {
          endpoint: "/api/shorten?q=",
          example: "/api/shorten?q=https://google.com",
        },
      });
    }
  } else {
    return res.send({
      _status: "Failed with error code 911",
      TIMESTAMP: Date.now(),
      USAGE: {
        endpoint: "/api/shorten?q=",
        example: "/api/shorten?q=https://google.com",
      },
    });
  }
}
