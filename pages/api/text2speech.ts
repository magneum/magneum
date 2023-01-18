import moment from "moment";
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
        _uuid: uuidv4(),
        _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
        _topic: "Text To Speech",
        _query: req.query.q,
        SHORTEN_URL: urlMedia,
      },
    ];
    logger.info(_Found);
    return res.send(_Found);
  } else {
    return res.send({
      _status: "Failed with error code 911",
      _uuid: uuidv4(),
      _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
      USAGE: {
        endpoint: "/api/text2speech?q=",
        example: "/api/text2speech?q=Hello. How are You?",
      },
    });
  }
}
