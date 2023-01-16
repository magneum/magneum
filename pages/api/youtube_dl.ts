import axios from "axios";
const chalk = require("chalk");
const y2 = require("y2mate-api");
import YouTube_Sr from "yt-search";
import logger from "../../services";
import { v4 as uuidv4 } from "uuid";
const { load } = require("cheerio");
const promise = require("bluebird");
var cloudscraper = require("cloudscraper");
import type { NextApiRequest, NextApiResponse } from "next";

function regex(url: any) {
  try {
    const regex =
      /https:\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?[\w\?=]*)?/;
    const result = url.match(regex);
    return result[1];
  } catch {
    return false;
  }
}

export default async function test(req: NextApiRequest, res: NextApiResponse) {
  if (req.query.q) {
    let Query = await YouTube_Sr(req.query.q);
    let QueryFound = Query.videos.slice(0, 1);
    QueryFound.forEach(function (qr_response) {
      try {
        promise
          .resolve(
            axios({
              method: "post",
              url: "https://www.y2mate.com/mates/en68/analyze/ajax",
              headers: {
                accept: "*/*",
                "accept-language": "en-US,en;q=0.9,vi;q=0.8",
                "content-type": "multipart/form-data",
                "user-agent":
                  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
              },
              data: {
                url: qr_response.url,
                q_auto: 0,
                ajax: 2,
              },
            }).then(async (response: any) => {
              const $: any = load(response.data.result);
              const a_imageSrc: any = $('div[class="thumbnail cover"]')
                .find("a > img")
                .attr("src");
              const a_title: any = $('div[class="caption text-left"]')
                .find("b")
                .text();
              const a_size: any = $("div")
                .find("#mp3 > table > tbody > tr > td:nth-child(2)")
                .text();
              const a_type: any = $("div")
                .find("#mp3 > table > tbody > tr > td:nth-child(3) > a")
                .attr("data-ftype");
              const a_quality: any = $("div")
                .find("#mp3 > table > tbody > tr > td:nth-child(3) > a")
                .attr("data-fquality");
              const a_id: any = /var k__id = "(.*?)"/.exec(
                response.data.result
              )[1];
              await axios({
                method: "post",
                url: "https://www.y2mate.com/mates/en68/convert",
                headers: {
                  accept: "*/*",
                  "accept-language": "en-US,en;q=0.9,vi;q=0.8",
                  "content-type": "multipart/form-data",
                  "user-agent":
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
                },
                data: {
                  type: "youtube",
                  v_id: await regex(qr_response.url),
                  _id: a_id,
                  ajax: "1",
                  token: "",
                  ftype: a_type,
                  fquality: a_quality,
                },
              }).then(function (body) {
                const $: any = load(body.data.result);
                var urlDown = $(
                  'div[class="form-group has-success has-feedback"]'
                )
                  .find("a")
                  .attr("href");
                var a_urlDown = urlDown;
                axios({
                  method: "post",
                  url: "https://www.y2mate.com/mates/en68/analyze/ajax",
                  headers: {
                    accept: "*/*",
                    "accept-language": "en-US,en;q=0.9,vi;q=0.8",
                    "content-type": "multipart/form-data",
                    "user-agent":
                      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
                  },
                  data: {
                    url: qr_response.url,
                    q_auto: 0,
                    ajax: 2,
                  },
                }).then(async (response) => {
                  const $: any = load(response.data.result);
                  const imageSrc = $('div[class="thumbnail cover"]')
                    .find("a > img")
                    .attr("src");
                  const title = $('div[class="caption text-left"]')
                    .find("b")
                    .text();
                  const size = $("div")
                    .find("#mp4 > table > tbody > tr > td:nth-child(2)")
                    .text();
                  const type = $("div")
                    .find("#mp4 > table > tbody > tr > td:nth-child(3) > a")
                    .attr("data-ftype");
                  const quality = $("div")
                    .find("#mp4 > table > tbody > tr > td:nth-child(3) > a")
                    .attr("data-fquality");
                  const id = /var k__id = "(.*?)"/.exec(
                    response.data.result
                  )[1];
                  await axios({
                    method: "post",
                    url: "https://www.y2mate.com/mates/en68/convert",
                    headers: {
                      accept: "*/*",
                      "accept-language": "en-US,en;q=0.9,vi;q=0.8",
                      "content-type": "multipart/form-data",
                      "user-agent":
                        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
                    },
                    data: {
                      type: "youtube",
                      v_id: await regex(qr_response.url),
                      _id: id,
                      ajax: "1",
                      token: "",
                      ftype: type,
                      fquality: quality,
                    },
                  }).then(async function (body) {
                    const $ = load(body.data.result);
                    var v_urlDown = $(
                      'div[class="form-group has-success has-feedback"]'
                    )
                      .find("a")
                      .attr("href");
                    var urlDown = v_urlDown;
                    var _Final_Found = [
                      {
                        _status: "🎊success",
                        _id: uuidv4(),
                        TIMESTAMP: Date.now(),
                        TOPIC: "[YouTube Meta Searcher]: server-y2mate",
                        QUERY: req.query.q,
                        _youtube_search: [
                          {
                            YT_ID: qr_response.videoId,
                            TITLE: qr_response.title,
                            UPLOADED: qr_response.ago,
                            VIEWS: qr_response.views,
                            DURATION_FULL: qr_response.duration.timestamp,
                            DURATION_SECONDS: qr_response.duration.seconds,
                            AUTHOR_NAME: qr_response.author.name,
                            AUTHOR_CHANNEL: qr_response.author.url,
                            LINK: qr_response.url,
                            THUMB: qr_response.thumbnail,
                            HQ_IMAGE: qr_response.image,
                            DESCRIPTION: qr_response.description,
                          },
                        ],
                        _youtube_downloader: [
                          {
                            dl_meta: {
                              META_ID: id,
                            },
                            dl_audio: {
                              SIZE: a_size.replace(/ .*/, "") + "mb",
                              TYPE: a_type,
                              QUALITY: a_quality + "kbps",
                              DOWNLOAD: a_urlDown,
                            },
                            dl_video: {
                              SIZE: size.replace(/ .*/, "") + "mb",
                              TYPE: type,
                              QUALITY: quality + "p",
                              DOWNLOAD: urlDown,
                            },
                          },
                        ],
                      },
                    ];
                    logger.info(_Final_Found);
                    res.send(_Final_Found);
                  });
                });
              });
            })
          )
          .catch((err) => {
            console.error(err);
            return false;
          });
      } catch (e) {
        logger.error(e);
        y2.GetVideo(qr_response.url).then((data: any) => {
          var _Found = {
            _status: "🎊success",
            _id: uuidv4(),
            TIMESTAMP: Date.now(),
            TOPIC: "[YouTube Meta Searcher]: server-backup",
            QUERY: req.query.q,
            _youtube_search: [
              {
                YT_ID: qr_response.videoId,
                TITLE: qr_response.title,
                UPLOADED: qr_response.ago,
                VIEWS: qr_response.views,
                DURATION_FULL: qr_response.duration.timestamp,
                DURATION_SECONDS: qr_response.duration.seconds,
                AUTHOR_NAME: qr_response.author.name,
                AUTHOR_CHANNEL: qr_response.author.url,
                LINK: qr_response.url,
                THUMB: qr_response.thumbnail,
                HQ_IMAGE: qr_response.image,
                DESCRIPTION: qr_response.description,
              },
            ],
            _youtube_downloader: [
              {
                VIDEO_QUALITY: data.quality,
                VIDEO_SIZE: data.size,
                VIDEO_DOWNLOAD_LINK: data.urlDown,
                VIDEO_TYPE: data.type,
              },
            ],
          };
          logger.info(_Found);
          return res.send(_Found);
        });
      }
    });
  } else {
    return res.send({
      _status: "Failed with error code 911",
      TIMESTAMP: Date.now(),
      USAGE: {
        endpoint: "/api/youtube_sr?q=",
        example: [
          "/api/youtube_sr?q=ncs music 5 minutes",
          "/api/youtube_sr?q=https://youtu.be/3gxus8LnMfI",
        ],
      },
    });
  }
}
