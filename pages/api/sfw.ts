import moment from "moment";
import tinyurl from "tinyurl";
import fetch from "node-fetch";
import logger from "../../services";
import { v4 as uuidv4 } from "uuid";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function test(req: NextApiRequest, res: NextApiResponse) {
  switch (req.query.q) {
    case "waifu":
      return fetch("https://waifu.pics/api/sfw/waifu")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _uuid: uuidv4(),
              _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              _topic: "[SFW Images]: yeet",
              _query: req.query.q,
              _url: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "neko":
      return fetch("https://waifu.pics/api/sfw/neko")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _uuid: uuidv4(),
              _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              _topic: "[SFW Images]: neko",
              _query: req.query.q,
              _url: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "shinobu":
      return fetch("https://waifu.pics/api/sfw/shinobu")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _uuid: uuidv4(),
              _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              _topic: "[SFW Images]: shinobu",
              _query: req.query.q,
              _url: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "megumin":
      return fetch("https://waifu.pics/api/sfw/megumin")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _uuid: uuidv4(),
              _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              _topic: "[SFW Images]: megumin",
              _query: req.query.q,
              _url: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "bully":
      return fetch("https://waifu.pics/api/sfw/bully")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _uuid: uuidv4(),
              _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              _topic: "[SFW Images]: bully",
              _query: req.query.q,
              _url: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "cuddle":
      return fetch("https://waifu.pics/api/sfw/cuddle")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _uuid: uuidv4(),
              _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              _topic: "[SFW Images]: cuddle",
              _query: req.query.q,
              _url: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "cry":
      return fetch("https://waifu.pics/api/sfw/cry")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _uuid: uuidv4(),
              _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              _topic: "[SFW Images]: cry",
              _query: req.query.q,
              _url: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "hug":
      return fetch("https://waifu.pics/api/sfw/hug")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _uuid: uuidv4(),
              _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              _topic: "[SFW Images]: hug",
              _query: req.query.q,
              _url: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "awoo":
      return fetch("https://waifu.pics/api/sfw/awoo")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _uuid: uuidv4(),
              _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              _topic: "[SFW Images]: awoo",
              _query: req.query.q,
              _url: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "kiss":
      return fetch("https://waifu.pics/api/sfw/kiss")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _uuid: uuidv4(),
              _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              _topic: "[SFW Images]: kiss",
              _query: req.query.q,
              _url: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "lick":
      return fetch("https://waifu.pics/api/sfw/lick")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _uuid: uuidv4(),
              _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              _topic: "[SFW Images]: lick",
              _query: req.query.q,
              _url: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "pat":
      return fetch("https://waifu.pics/api/sfw/pat")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _uuid: uuidv4(),
              _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              _topic: "[SFW Images]: yeet",
              _query: req.query.q,
              _url: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "smug":
      return fetch("https://waifu.pics/api/sfw/smug")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _uuid: uuidv4(),
              _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              _topic: "[SFW Images]: smug",
              _query: req.query.q,
              _url: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "bonk":
      return fetch("https://waifu.pics/api/sfw/bonk")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _uuid: uuidv4(),
              _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              _topic: "[SFW Images]: bonk",
              _query: req.query.q,
              _url: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "yeet":
      return fetch("https://waifu.pics/api/sfw/yeet")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _uuid: uuidv4(),
              _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              _topic: "[SFW Images]: yeet",
              _query: req.query.q,
              _url: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "blush":
      return fetch("https://waifu.pics/api/sfw/blush")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _uuid: uuidv4(),
              _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              _topic: "[SFW Images]: blush",
              _query: req.query.q,
              _url: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "smile":
      return fetch("https://waifu.pics/api/sfw/smile")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _uuid: uuidv4(),
              _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              _topic: "[SFW Images]: smile",
              _query: req.query.q,
              _url: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "wave":
      return fetch("https://waifu.pics/api/sfw/wave")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _uuid: uuidv4(),
              _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              _topic: "[SFW Images]: wave",
              _query: req.query.q,
              _url: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "highfive":
      return fetch("https://waifu.pics/api/sfw/highfive")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _uuid: uuidv4(),
              _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              _topic: "[SFW Images]: highfive",
              _query: req.query.q,
              _url: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "handhold":
      return fetch("https://waifu.pics/api/sfw/handhold")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _uuid: uuidv4(),
              _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              _topic: "[SFW Images]: handhold",
              _query: req.query.q,
              _url: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "nom":
      return fetch("https://waifu.pics/api/sfw/nom")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _uuid: uuidv4(),
              _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              _topic: "[SFW Images]: nom",
              _query: req.query.q,
              _url: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "bite":
      return fetch("https://waifu.pics/api/sfw/bite")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _uuid: uuidv4(),
              _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              _topic: "[SFW Images]: bite",
              _query: req.query.q,
              _url: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "glomp":
      return fetch("https://waifu.pics/api/sfw/glomp")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _uuid: uuidv4(),
              _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              _topic: "[SFW Images]: glomp",
              _query: req.query.q,
              _url: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "slap":
      return fetch("https://waifu.pics/api/sfw/slap")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _uuid: uuidv4(),
              _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              _topic: "[SFW Images]: slap",
              _query: req.query.q,
              _url: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "kill":
      return fetch("https://waifu.pics/api/sfw/kill")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _uuid: uuidv4(),
              _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              _topic: "[SFW Images]: kill",
              _query: req.query.q,
              _url: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "kick":
      return fetch("https://waifu.pics/api/sfw/kick")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _uuid: uuidv4(),
              _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              _topic: "[SFW Images]: kick",
              _query: req.query.q,
              _url: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "happy":
      return fetch("https://waifu.pics/api/sfw/happy")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _uuid: uuidv4(),
              _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              _topic: "[SFW Images]: happy",
              _query: req.query.q,
              _url: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "wink":
      return fetch("https://waifu.pics/api/sfw/wink")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _uuid: uuidv4(),
              _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              _topic: "[SFW Images]: wink",
              _query: req.query.q,
              _url: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "poke":
      return fetch("https://waifu.pics/api/sfw/poke")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _uuid: uuidv4(),
              _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              _topic: "[SFW Images]: poke",
              _query: req.query.q,
              _url: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "dance":
      return fetch("https://waifu.pics/api/sfw/dance")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _uuid: uuidv4(),
              _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              _topic: "[SFW Images]: dance",
              _query: req.query.q,
              _url: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "cringe":
      return fetch("https://waifu.pics/api/sfw/cringe")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _uuid: uuidv4(),
              _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              _topic: "[SFW Images]: cringe",
              _query: req.query.q,
              _url: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    default:
      return res.send({
        _status: "Failed with error code 911",
        _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
        USAGE: {
          endpoint: "/api/sfw?q=",
          example: "/api/sfw?q=waifu",
          commands: [
            "waifu",
            "neko",
            "shinobu",
            "megumin",
            "bully",
            "cuddle",
            "cry",
            "hug",
            "awoo",
            "kiss",
            "lick",
            "pat",
            "smug",
            "bonk",
            "yeet",
            "blush",
            "smile",
            "wave",
            "highfive",
            "handhold",
            "nom",
            "bite",
            "glomp",
            "slap",
            "kill",
            "kick",
            "happy",
            "wink",
            "poke",
            "dance",
            "cringe",
          ],
        },
      });
      break;
  }
}
