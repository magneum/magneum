import https from "https";
import moment from "moment";
import logger from "@/log";
import { uuid as uuidv4 } from "uuidv4";
const validUrl = require("valid-url");
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
      if (validUrl.isUri(argument)) {
        return res.status(200).json({
          resp: {
            id: uuidv4(),
            status: true,
            timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
          },
          meta: {
            topic: "Shorten Url",
            query: argument,
            url: shorten(argument),
          },
        });
      } else
        return res.status(500).json({
          id: uuidv4(),
          status: false,
          message: "Arguments not satisfied.",
          timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
          usage: {
            endpoint: "/api/shorten?q=",
            example: "/api/shorten?q=https://google.com",
          },
        });
    } else
      return res.status(500).json({
        id: uuidv4(),
        status: false,
        message: "Arguments not satisfied.",
        timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
        usage: {
          endpoint: "/api/shorten?q=",
          example: "/api/shorten?q=https://google.com",
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
