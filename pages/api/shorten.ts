import moment from "moment";
import tinyurl from "tinyurl";
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
          _uuid: uuidv4(),
          _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
          _topic: "Shorten Url",
          QUERY: req.query.q,
          SHORTEN_URL: await tinyurl.shorten(req.query.q),
        },
      ];
      logger.info(_Found);
      return res.send(_Found);
    } else {
      res.send({
        _status: "Failed with error code 911",
        _uuid: uuidv4(),
        _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
        USAGE: {
          endpoint: "/api/shorten?q=",
          example: "/api/shorten?q=https://google.com",
        },
      });
    }
  } else {
    return res.send({
      _status: "Failed with error code 911",
      _uuid: uuidv4(),
      _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
      USAGE: {
        endpoint: "/api/shorten?q=",
        example: "/api/shorten?q=https://google.com",
      },
    });
  }
}
