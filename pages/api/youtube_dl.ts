import axios from "axios";
const chalk = require("chalk");
const y2 = require("y2mate-api");
import YouTube_Sr from "yt-search";
import logger from "../../services";
import { v4 as uuidv4 } from "uuid";
const { load } = require("cheerio");
import type { NextApiRequest, NextApiResponse } from "next";

async function Tube_D(url) {
  function regex(url) {
    try {
      const regex =
        /https:\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?[\w\?=]*)?/;
      const result = url.match(regex);
      return result[1];
    } catch {
      return false;
    }
  }
  return new Promise(async (resolve, reject) => {
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
        url: url,
        q_auto: 0,
        ajax: 2,
      },
    }).then(async (res) => {
      const $ = load(res.data.result);
      const a_imageSrc = $('div[class="thumbnail cover"]')
        .find("a > img")
        .attr("src");
      const a_title = $('div[class="caption text-left"]').find("b").text();
      const a_size = $("div")
        .find("#mp3 > table > tbody > tr > td:nth-child(2)")
        .text();
      const a_type = $("div")
        .find("#mp3 > table > tbody > tr > td:nth-child(3) > a")
        .attr("data-ftype");
      const a_quality = $("div")
        .find("#mp3 > table > tbody > tr > td:nth-child(3) > a")
        .attr("data-fquality");
      const a_id = /var k__id = "(.*?)"/.exec(res.data.result)[1];
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
          v_id: await regex(url),
          _id: a_id,
          ajax: "1",
          token: "",
          ftype: a_type,
          fquality: a_quality,
        },
      }).then(async function (body) {
        const $ = load(body.data.result);
        var urlDown = $('div[class="form-group has-success has-feedback"]')
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
            url: url,
            q_auto: 0,
            ajax: 2,
          },
        }).then(async (res) => {
          const $ = load(res.data.result);
          const imageSrc = $('div[class="thumbnail cover"]')
            .find("a > img")
            .attr("src");
          const title = $('div[class="caption text-left"]').find("b").text();
          const size = $("div")
            .find("#mp4 > table > tbody > tr > td:nth-child(2)")
            .text();
          const type = $("div")
            .find("#mp4 > table > tbody > tr > td:nth-child(3) > a")
            .attr("data-ftype");
          const quality = $("div")
            .find("#mp4 > table > tbody > tr > td:nth-child(3) > a")
            .attr("data-fquality");
          const id = /var k__id = "(.*?)"/.exec(res.data.result)[1];
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
              v_id: await regex(url),
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
            resolve({
              _meta: {
                title,
                image: imageSrc,
                y2mate_id: id,
              },
              _audio: {
                size: a_size.replace(/ .*/, "") + "mb",
                type: a_type,
                quality: a_quality + "kbps",
                link: a_urlDown,
              },
              _video: {
                size: size.replace(/ .*/, "") + "mb",
                type: type,
                quality: quality + "p",
                link: urlDown,
              },
            });
          });
        });
      });
    });
  });
}

export default async function test(req: NextApiRequest, res: NextApiResponse) {
  if (req.query.q) {
    let Query = await YouTube_Sr(req.query.q);
    let QueryFound = Query.videos.slice(0, 1);
    QueryFound.forEach(function (qr_response) {
      try {
        Tube_D(qr_response.url).then((data) => {
          var _Found = {
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
            _youtube_downloader: {
              _meta: {
                y2mate_id: data._meta.y2mate_id,
              },
              _audio: {
                SIZE: data._audio.size,
                TYPE: data._audio.type,
                QUALITY: data._audio.quality,
                DOWNLOAD: data._audio.link,
              },
              _video: {
                SIZE: data._video.size,
                TYPE: data._video.type,
                QUALITY: data._video.quality,
                DOWNLOAD: data._video.link,
              },
            },
          };
          logger.info(_Found);
          return res.send(_Found);
        });
      } catch (e) {
        logger.error(e);
        y2.GetVideo(qr_response.url).then((data) => {
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
