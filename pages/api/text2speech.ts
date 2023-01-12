import axios from "axios";
import fetch from "node-fetch";
const unirest = require("unirest");
const request = require("request");
import logger from "../../services";
import { v4 as uuidv4 } from "uuid";
const googleTTS = require("google-tts-api");
import type { NextApiRequest, NextApiResponse } from "next";

export default async function test(req: NextApiRequest, res: NextApiResponse) {
  if (req.query.q) {
    const urlMedia = googleTTS.getAudioUrl(req.query.q, {
      lang: "en",
      slow: false,
      host: "https://translate.google.com",
    });
    var _Found = [
      {
        _status: "🎊success",
        _id: uuidv4(),
        TIMESTAMP: Date.now(),
        TOPIC: "Text To Speech",
        QUERY: req.query.q,
        SHORTEN_URL: urlMedia,
      },
    ];
    logger.info(_Found);
    return res.send(_Found);
  } else {
    res.send({
      _status: "⚠️ failed",
      TIMESTAMP: Date.now(),
      USAGE: {
        endpoint: "/api/text2speech?q=",
        example: "/api/text2speech?q=Hello. How are You?",
      },
    });
  }
}
