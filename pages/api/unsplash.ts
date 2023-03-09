import logger from "@/log";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import { createApi } from "unsplash-js";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function test(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.query.q) {
      let argument = req.query.q as any;
      const unsplash = createApi({
        accessKey: "OGx0PMTS_u06PSSsRwTmmxjxfe3OhABXYpDimOjE4d4",
      });
      const cobra: any = await unsplash.search.getPhotos({
        query: `${decodeURI(argument)}`,
        page: 1,
        perPage: 1,
        orderBy: "latest",
        orientation: "portrait",
      });
      if (!cobra) {
        return res.status(500).json({
          id: uuidv4(),
          status: false,
          message: "Server error.",
          timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
          usage: {
            endpoint: "/api/unsplash?q=",
            example: "/api/unsplash?q=cat",
          },
        });
      } else
        return res.status(200).json({
          resp: {
            id: uuidv4(),
            status: true,
            timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
          },
          meta: {
            topic: "Unsplash HD Wallpapers",
            query: decodeURI(argument),
            created_at: cobra.resp.results[0].created_at,
            updated_at: cobra.resp.results[0].updated_at,
            promoted_at: cobra.resp.results[0].promoted_at,
            width: cobra.resp.results[0].width,
            height: cobra.resp.results[0].height,
            color: cobra.resp.results[0].color,
            blur_hash: cobra.resp.results[0].blur_hash,
            description: cobra.resp.results[0].description,
            alt_description: cobra.resp.results[0].alt_description,
            images: [
              {
                raw: cobra.resp.results[0].urls.raw,
                full: cobra.resp.results[0].urls.full,
                regular: cobra.resp.results[0].urls.regular,
                small: cobra.resp.results[0].urls.small,
                thumb: cobra.resp.results[0].urls.thumb,
                small_s3: cobra.resp.results[0].urls.small_s3,
              },
            ],
            links: [
              {
                self: cobra.resp.results[0].links.self,
                html: cobra.resp.results[0].links.html,
                download: cobra.resp.results[0].links.download,
                download_location:
                  cobra.resp.results[0].links.download_location,
              },
            ],
          },
        });
    } else
      return res.status(500).json({
        id: uuidv4(),
        status: false,
        message: "Arguments not satisfied.",
        timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
        usage: {
          endpoint: "/api/unsplash?q=",
          example: ["/api/unsplash?q=cat"],
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
