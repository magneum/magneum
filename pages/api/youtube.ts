import axios from "axios";
const chalk = require("chalk");
const y2 = require("y2mate-api");
import logger from "../../services";
import { v4 as uuidv4 } from "uuid";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function test(req: NextApiRequest, res: NextApiResponse) {
  if (req.query.q) {
    axios({
      method: "get",
      url: "https://vp10fo-4736.preview.csb.app/youtube?q=" + req.query.q,
      headers: {
        accept: "*/*",
        "accept-language": "en-US,en;q=0.9",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
    }).then((response) => {
      var _youtube = {
        status: response.data.status,
        _id: response.data._id,
        _youtube_search: [
          {
            YT_ID: response.data._youtube_search[0].YT_ID,
            TITLE: response.data._youtube_search[0].TITLE,
            UPLOADED: response.data._youtube_search[0].UPLOADED,
            VIEWS: response.data._youtube_search[0].VIEWS,
            DURATION_FULL: response.data._youtube_search[0].DURATION_FULL,
            DURATION_SECONDS: response.data._youtube_search[0].DURATION_SECONDS,
          },
          {
            AUTHOR_NAME: response.data._youtube_search[1].AUTHOR_NAME,
            AUTHOR_CHANNEL: response.data._youtube_search[1].AUTHOR_CHANNEL,
          },
          {
            LINK: response.data._youtube_search[2].LINK,
            THUMB: response.data._youtube_search[2].THUMB,
            DESCRIPTION: response.data._youtube_search[2].DESCRIPTION,
          },
        ],
        _youtube_downloader: [
          {
            VIDEO_QUALITY: response.data._youtube_downloader[0].VIDEO_QUALITY,
            VIDEO_SIZE: response.data._youtube_downloader[0].VIDEO_SIZE,
            VIDEO_DOWNLOAD_LINK:
              response.data._youtube_downloader[0].VIDEO_RAW_LINK,
          },
          {
            AUDIO_QUALITY: response.data._youtube_downloader[1].AUDIO_QUALITY,
            AUDIO_SIZE: response.data._youtube_downloader[1].AUDIO_SIZE,
            AUDIO_DOWNLOAD_LINK:
              response.data._youtube_downloader[1].AUDIO_RAW_LINK,
          },
        ],
      };
      logger.info(" [ YouTube Search By Magneum Api ]");
      return resp.send(_youtube);
    });
  } else {
    res.send({
      _status: "⚠️ failed",
      _id: uuidv4(),
      TIMESTAMP: Date.now(),
      USAGE: {
        endpoint: "/api/youtube?q=",
        example: [
          "/api/youtube?q=ncs music 5 minutes",
          "/api/youtube?q=https://youtu.be/3gxus8LnMfI",
        ],
      },
    });
  }
}
