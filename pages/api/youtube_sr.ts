import moment from "moment";
import YouTube_Sr from "yt-search";
import logger from "../../services";
import { v4 as uuidv4 } from "uuid";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function test(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.query.q) {
      let _Found;
      let Query: any = await YouTube_Sr(req.query.q);
      let QueryFound: any = Query.videos.slice(0, 1);
      QueryFound.forEach(function (response: any) {
        _Found = {
          _status: "🎊success",
          _uuid: uuidv4(),
          _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
          _topic: "[YouTube Meta Searcher]",
          _query: req.query.q,
          _youtube_search: [
            {
              YT_ID: response.videoId,
              TITLE: response.title,
              UPLOADED: response.ago,
              VIEWS: response.views,
              DURATION_FULL: response.duration.timestamp,
              DURATION_SECONDS: response.duration.seconds,
              AUTHOR_NAME: response.author.name,
              AUTHOR_CHANNEL: response.author.url,
              LINK: response.url,
              THUMB: response.thumbnail,
              HQ_IMAGE: response.image,
              DESCRIPTION: response.description,
            },
          ],
        };
      });
      logger.info(_Found);
      return res.send(_Found);
    } else {
      return res.send({
        _status: "Failed with error code 911",
        _message: "Parameters requirement not met.",
        _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
        _usage: {
          _api_link: "/api/youtube_sr?q=",
          _example: [
            "/api/youtube_sr?q=ncs music 5 minutes",
            "/api/youtube_sr?q=https://youtu.be/3gxus8LnMfI",
          ],
        },
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
}
