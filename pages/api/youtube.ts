import got from "got";
import axios from "axios";
const chalk = require("chalk");
import { shorten } from "tinyurl";
import YouTube_Sr from "yt-search";
import logger from "../../services";
import { v4 as uuidv4 } from "uuid";
import type { NextApiRequest, NextApiResponse } from "next";

function _throw(url, v_id, ftype, fquality, token, timeExpire, fname) {
  return new Promise(async (resolve, reject) => {
    var _started = await got(url, {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        origin: "https://yt5s.com",
        referer: "https://yt5s.com/",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",
        "X-Requested-Key": "de0cfuirtgf67a",
      },
      form: {
        v_id,
        ftype,
        fquality,
        token,
        timeExpire,
        client: "yt5s.com",
      },
    }).json();
    var server = _started.c_server;
    if (!server && ftype === "mp3")
      return resolve(server || _started.d_url || "");
    var _results = await got(`${server}/api/json/convert`, {
      method: "POST",
      form: {
        v_id,
        ftype,
        fquality,
        fname,
        token,
        timeExpire,
      },
    }).json();
    if (_results.statusCode === 200) {
      return resolve(_results.result);
    } else if (_results.statusCode === 300) {
      try {
        var WebSocket = (await import("ws")).default;
        var Url = new URL(server);

        var ws = new WebSocket(
          `${/https/i.test(Url.protocol) ? "wss:" : "ws:"}//${Url.host}/sub/${
            _results.jobId
          }?fname=yt5s.com`,
          undefined,
          {
            headers: {
              "Accept-Encoding": "gzip, deflate, br",
              Host: Url.host,
              Origin: "https://yt5s.com",
              "Sec-WebSocket-Extensions":
                "permessage-deflate; client_max_window_bits",
              "User-Agent":
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",
            },
          }
        );
        ws.on("message", function incoming(message) {
          var msg = JSON.parse(message.toString());
          if (msg.action === "success") {
            try {
              ws.close();
            } catch (e) {
              console.error(e);
            }
            ws.removeAllListeners("message");
            return resolve(msg.url);
          } else if (msg.action === "error") return reject(msg);
        });
      } catch (e) {
        console.error(e);
        return reject(e);
      }
    } else return reject(_results);
  });
}

async function YouTube(url) {
  var html = await got("https://yt5s.com/en32").text();
  var urlConvert = (/k_url_convert="(.*?)"/.exec(html) || ["", ""])[1];
  var json = await got((/k_url_search="(.*?)"/.exec(html) || ["", ""])[1], {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      cookie:
        "__cflb=04dToSoFRg9oqH9pYF2En9gKJK4fe8D9TcYtUD6tYu; _ga=GA1.2.1350132744.1641709803; _gid=GA1.2.1492233267.1641709803; _gat_gtag_UA_122831834_4=1",
      origin: "https://yt5s.com",
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",
    },
    searchParams: new URLSearchParams(
      Object.entries({
        q: url,
        vt: "home",
      })
    ),
  }).json();
  var video = {};
  Object.values(json.links.mp4).forEach(({ k, size }) => {
    video[k] = {
      quality: k,
      filesize: size,
      download: _throw.bind(
        null,
        urlConvert,
        json.vid,
        "mp4",
        k,
        json.token,
        parseInt(json.timeExpires),
        json.fn
      ),
    };
  });
  var audio = {};
  Object.values(json.links.mp3).forEach(({ key, size }) => {
    audio[key] = {
      quality: key,
      filesize: size,
      download: _throw.bind(
        null,
        urlConvert,
        json.vid,
        "mp3",
        key.replace(/kbps/i, ""),
        json.token,
        parseInt(json.timeExpires),
        json.fn
      ),
    };
  });
  return {
    id: json.vid,
    title: json.title,
    thumbnail: `https://i.ytimg.com/vi/${json.vid}/0.jpg`,
    video,
    audio,
  };
}

function userInput(url) {
  return new Promise((resolve, reject) => {
    YouTube(url).then(async (_got) => {
      var _send = {
        _1080p: {
          size: _got.video["1080p"].filesize,
          direct_dL: await _got.video["1080p"].download(),
        },
        _720p: {
          size: _got.video["720p"].filesize,
          direct_dL: await _got.video["720p"].download(),
        },
        _480p: {
          size: _got.video["480p"].filesize,
          direct_dL: await _got.video["480p"].download(),
        },
        _360p: {
          size: _got.video["360p"].filesize,
          direct_dL: await _got.video["360p"].download(),
        },
        _240p: {
          size: _got.video["240p"].filesize,
          direct_dL: await _got.video["240p"].download(),
        },
        _144p: {
          size: _got.video["144p"].filesize,
          direct_dL: await _got.video["144p"].download(),
        },
        _128kbps: {
          size: _got.audio["128kbps"].filesize,
          direct_dL: await _got.audio["128kbps"].download(),
        },
      };
      return resolve(_send);
    });
  });
}

export default async function test(req: NextApiRequest, res: NextApiResponse) {
  var Query = await YouTube_Sr(req.query.q);
  var QueryFound = Query.videos.slice(0, 1);
  var _datuh = await userInput(QueryFound[0].url);
  var _Found = {
    _status: "🎊success",
    _id: uuidv4(),
    TIMESTAMP: Date.now(),
    TOPIC: "[YouTube Meta Searcher]",
    QUERY: req.query.q,
    _youtube_search: [
      {
        YT_ID: QueryFound[0].videoId,
        TITLE: QueryFound[0].title,
        UPLOADED: QueryFound[0].ago,
        VIEWS: QueryFound[0].views,
        DURATION_FULL: QueryFound[0].duration.timestamp,
        DURATION_SECONDS: QueryFound[0].duration.seconds,
        AUTHOR_NAME: QueryFound[0].author.name,
        AUTHOR_CHANNEL: QueryFound[0].author.url,
        LINK: QueryFound[0].url,
        THUMB: QueryFound[0].thumbnail,
        HQ_IMAGE: QueryFound[0].image,
        DESCRIPTION: QueryFound[0].description,
      },
    ],
    _youtube_downloader: [
      {
        video_1080p: [_datuh._1080p.size, _datuh._1080p.direct_dL],
        video_720p: [_datuh._720p.size, _datuh._720p.direct_dL],
        video_480p: [_datuh._480p.size, _datuh._480p.direct_dL],
        video_360p: [_datuh._360p.size, _datuh._360p.direct_dL],
        video_240p: [_datuh._240p.size, _datuh._240p.direct_dL],
        video_144p: [_datuh._144p.size, _datuh._144p.direct_dL],
        audio_128kbps: [_datuh._128kbps.size, _datuh._128kbps.direct_dL],
      },
    ],
  };
  logger.info(_Found);
  return res.send(_Found);
}
