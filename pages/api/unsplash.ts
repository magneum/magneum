import moment from "moment";
import logger from "../../services";
import { v4 as uuidv4 } from "uuid";
import { createApi } from "unsplash-js";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function test(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.query.q) {
      const unsplash = createApi({
        accessKey: "OGx0PMTS_u06PSSsRwTmmxjxfe3OhABXYpDimOjE4d4",
      });
      const cobra: any = await unsplash.search.getPhotos({
        query: `${req.query.q}`,
        page: 1,
        perPage: 1,
        orderBy: "latest",
        orientation: "portrait",
      });
      if (!cobra) {
        res.send({
          _status: "Failed with error code 911",
          _message: "Parameters requirement not met.",
          _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
          _usage: {
            _api_link: "/api/manga?q=",
            _example: "/api/manga?q=My Hero Academia by Kohei Horikoshi",
          },
        });
      } else {
        var _Found = [
          {
            _status: "🎊success",
            _uuid: uuidv4(),
            _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
            _topic: "Unsplash HD Wallpapers",
            _query: req.query.q,
            _created_at: cobra.response.results[0].created_at,
            _updated_at: cobra.response.results[0].updated_at,
            _promoted_at: cobra.response.results[0].promoted_at,
            _width: cobra.response.results[0].width,
            _height: cobra.response.results[0].height,
            _color: cobra.response.results[0].color,
            _blur_hash: cobra.response.results[0].blur_hash,
            _description: cobra.response.results[0].description,
            _alt_description: cobra.response.results[0].alt_description,
            _images: [
              {
                _raw: cobra.response.results[0].urls.raw,
                _full: cobra.response.results[0].urls.full,
                _regular: cobra.response.results[0].urls.regular,
                _small: cobra.response.results[0].urls.small,
                _thumb: cobra.response.results[0].urls.thumb,
                _small_s3: cobra.response.results[0].urls.small_s3,
              },
            ],
            _links: [
              {
                _self: cobra.response.results[0].links.self,
                _html: cobra.response.results[0].links.html,
                _download: cobra.response.results[0].links.download,
                _download_location:
                  cobra.response.results[0].links.download_location,
              },
            ],
          },
        ];
        logger.info(_Found);
        return res.send(_Found);
      }
    } else {
      return res.send({
        _status: "Failed with error code 911",
        _message: "Parameters requirement not met.",
        _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
        _usage: {
          _api_link: "/api/unsplash?q=",
          _example: ["/api/unsplash?q=cat"],
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
