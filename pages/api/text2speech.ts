import logger from "@/log";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
const googleTTS = require("google-tts-api");
import type { NextApiRequest, NextApiResponse } from "next";

export default async function test(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.query.q) {
      let argument = req.query.q as any;
      const urlMedia = googleTTS.getAudioUrl(decodeURI(argument), {
        lang: "en",
        slow: false,
        host: "https://translate.google.com",
      });
      return res.status(200).json({
        resp: {
          id: uuidv4(),
          status: true,
          timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
        },
        meta: {
          topic: "Text To Speech",
          query: decodeURI(argument),
          url: urlMedia,
        },
      });
    } else
      return res.status(500).json({
        id: uuidv4(),
        status: false,
        message: "Arguments not satisfied.",
        timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
        usage: {
          endpoint: "/api/text2speech?q=",
          example: "/api/text2speech?q=Hello. How are You?",
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
