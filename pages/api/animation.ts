import moment from "moment";
import fetch from "node-fetch";
import { shorten } from "tinyurl";
import logger from "../../services";
import { v4 as uuidv4 } from "uuid";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function animation(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    switch (req.query.q) {
      case "blush":
        fetch("https://api.waifu.pics/sfw/blush")
          .then((res) => res.json())
          .then(async (json: any) => {
            var _Found = [
              {
                _status: "🎊success",
                _uuid: uuidv4(),
                _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
                _topic: "[ ANIMATION ]: gif",
                _query: req.query.q,
                _url: await shorten(json.url),
              },
            ];
            logger.info(_Found);
            return res.send(_Found);
          });
        break;
      case "dance":
        fetch("https://api.waifu.pics/sfw/dance")
          .then((res) => res.json())
          .then(async (json: any) => {
            var _Found = [
              {
                _status: "🎊success",
                _uuid: uuidv4(),
                _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
                _topic: "[ ANIMATION ]: gif",
                _query: req.query.q,
                _url: await shorten(json.url),
              },
            ];
            logger.info(_Found);
            return res.send(_Found);
          });
        break;
      case "cuddle":
        fetch("https://nekos.life/api/v2/img/cuddle")
          .then((res) => res.json())
          .then(async (json: any) => {
            var _Found = [
              {
                _status: "🎊success",
                _uuid: uuidv4(),
                _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
                _topic: "[ ANIMATION ]: gif",
                _query: req.query.q,
                _url: await shorten(json.url),
              },
            ];
            logger.info(_Found);
            return res.send(_Found);
          });
        break;
      case "bite":
        fetch("https://api.waifu.pics/sfw/bite")
          .then((res) => res.json())
          .then(async (json: any) => {
            var _Found = [
              {
                _status: "🎊success",
                _uuid: uuidv4(),
                _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
                _topic: "[ ANIMATION ]: gif",
                _query: req.query.q,
                _url: await shorten(json.url),
              },
            ];
            logger.info(_Found);
            return res.send(_Found);
          });
        break;
      case "slap":
        fetch("https://nekos.life/api/v2/img/slap")
          .then((res) => res.json())
          .then(async (json: any) => {
            var _Found = [
              {
                _status: "🎊success",
                _uuid: uuidv4(),
                _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
                _topic: "[ ANIMATION ]: gif",
                _query: req.query.q,
                _url: await shorten(json.url),
              },
            ];
            logger.info(_Found);
            return res.send(_Found);
          });
        break;
      case "wink":
        fetch("https://api.waifu.pics/sfw/wink")
          .then((res) => res.json())
          .then(async (json: any) => {
            var _Found = [
              {
                _status: "🎊success",
                _uuid: uuidv4(),
                _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
                _topic: "[ ANIMATION ]: gif",
                _query: req.query.q,
                _url: await shorten(json.url),
              },
            ];
            logger.info(_Found);
            return res.send(_Found);
          });
        break;
      case "bonk":
        fetch("https://api.waifu.pics/sfw/bonk")
          .then((res) => res.json())
          .then(async (json: any) => {
            var _Found = [
              {
                _status: "🎊success",
                _uuid: uuidv4(),
                _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
                _topic: "[ ANIMATION ]: gif",
                _query: req.query.q,
                _url: await shorten(json.url),
              },
            ];
            logger.info(_Found);
            return res.send(_Found);
          });
        break;
      case "bully":
        fetch("https://nekos.life/api/v2/img/bully")
          .then((res) => res.json())
          .then(async (json: any) => {
            var _Found = [
              {
                _status: "🎊success",
                _uuid: uuidv4(),
                _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
                _topic: "[ ANIMATION ]: gif",
                _query: req.query.q,
                _url: await shorten(json.url),
              },
            ];
            logger.info(_Found);
            return res.send(_Found);
          });
        break;
      case "hug":
        fetch("https://api.waifu.pics/sfw/hug")
          .then((res) => res.json())
          .then(async (json: any) => {
            var _Found = [
              {
                _status: "🎊success",
                _uuid: uuidv4(),
                _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
                _topic: "[ ANIMATION ]: gif",
                _query: req.query.q,
                _url: await shorten(json.url),
              },
            ];
            logger.info(_Found);
            return res.send(_Found);
          });
        break;
      case "kiss":
        fetch("https://api.waifu.pics/sfw/kiss")
          .then((res) => res.json())
          .then(async (json: any) => {
            var _Found = [
              {
                _status: "🎊success",
                _uuid: uuidv4(),
                _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
                _topic: "[ ANIMATION ]: gif",
                _query: req.query.q,
                _url: await shorten(json.url),
              },
            ];
            logger.info(_Found);
            return res.send(_Found);
          });
        break;
      case "pat":
        fetch("https://api.waifu.pics/sfw/pat")
          .then((res) => res.json())
          .then(async (json: any) => {
            var _Found = [
              {
                _status: "🎊success",
                _uuid: uuidv4(),
                _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
                _topic: "[ ANIMATION ]: gif",
                _query: req.query.q,
                _url: await shorten(json.url),
              },
            ];
            logger.info(_Found);
            return res.send(_Found);
          });
        break;
      case "wallpaper":
        fetch("https://akaneko-api.herokuapp.com/api/wallpapers")
          .then((res) => res.json())
          .then(async (json: any) => {
            var _Found = [
              {
                _status: "🎊success",
                _uuid: uuidv4(),
                _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
                _topic: "[ ANIMATION ]: gif",
                _query: req.query.q,
                _url: await shorten(json.url),
              },
            ];
            logger.info(_Found);
            return res.send(_Found);
          });
        break;
      case "happy":
        fetch("https://api.waifu.pics/sfw/happy")
          .then((res) => res.json())
          .then(async (json: any) => {
            var _Found = [
              {
                _status: "🎊success",
                _uuid: uuidv4(),
                _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
                _topic: "[ ANIMATION ]: gif",
                _query: req.query.q,
                _url: await shorten(json.url),
              },
            ];
            logger.info(_Found);
            return res.send(_Found);
          });
        break;
      case "kill":
        fetch("https://api.waifu.pics/sfw/kill")
          .then((res) => res.json())
          .then(async (json: any) => {
            var _Found = [
              {
                _status: "🎊success",
                _uuid: uuidv4(),
                _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
                _topic: "[ ANIMATION ]: gif",
                _query: req.query.q,
                _url: await shorten(json.url),
              },
            ];
            logger.info(_Found);
            return res.send(_Found);
          });
        break;
      case "highfive":
        fetch("https://api.waifu.pics/sfw/highfive")
          .then((res) => res.json())
          .then(async (json: any) => {
            var _Found = [
              {
                _status: "🎊success",
                _uuid: uuidv4(),
                _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
                _topic: "[ ANIMATION ]: gif",
                _query: req.query.q,
                _url: await shorten(json.url),
              },
            ];
            logger.info(_Found);
            return res.send(_Found);
          });
        break;
      case "wave":
        fetch("https://api.waifu.pics/sfw/wave")
          .then((res) => res.json())
          .then(async (json: any) => {
            var _Found = [
              {
                _status: "🎊success",
                _uuid: uuidv4(),
                _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
                _topic: "[ ANIMATION ]: gif",
                _query: req.query.q,
                _url: await shorten(json.url),
              },
            ];
            logger.info(_Found);
            return res.send(_Found);
          });
        break;
      case "cry":
        fetch("https://api.waifu.pics/sfw/cry")
          .then((res) => res.json())
          .then(async (json: any) => {
            var _Found = [
              {
                _status: "🎊success",
                _uuid: uuidv4(),
                _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
                _topic: "[ ANIMATION ]: gif",
                _query: req.query.q,
                _url: await shorten(json.url),
              },
            ];
            logger.info(_Found);
            return res.send(_Found);
          });
        break;
      case "smile":
        fetch("https://api.waifu.pics/sfw/smile")
          .then((res) => res.json())
          .then(async (json: any) => {
            var _Found = [
              {
                _status: "🎊success",
                _uuid: uuidv4(),
                _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
                _topic: "[ ANIMATION ]: gif",
                _query: req.query.q,
                _url: await shorten(json.url),
              },
            ];
            logger.info(_Found);
            return res.send(_Found);
          });
        break;
      case "punch":
        fetch("https://neko-love.xyz/api/v1/punch")
          .then((res) => res.json())
          .then(async (json: any) => {
            var _Found = [
              {
                _status: "🎊success",
                _uuid: uuidv4(),
                _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
                _topic: "[ ANIMATION ]: gif",
                _query: req.query.q,
                _url: await shorten(json.url),
              },
            ];
            logger.info(_Found);
            return res.send(_Found);
          });
        break;
      case "kick":
        fetch("https://api.waifu.pics/sfw/kick")
          .then((res) => res.json())
          .then(async (json: any) => {
            var _Found = [
              {
                _status: "🎊success",
                _uuid: uuidv4(),
                _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
                _topic: "[ ANIMATION ]: gif",
                _query: req.query.q,
                _url: await shorten(json.url),
              },
            ];
            logger.info(_Found);
            return res.send(_Found);
          });
        break;
      case "poke":
        fetch("https://nekos.life/api/v2/img/poke")
          .then((res) => res.json())
          .then(async (json: any) => {
            var _Found = [
              {
                _status: "🎊success",
                _uuid: uuidv4(),
                _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
                _topic: "[ ANIMATION ]: gif",
                _query: req.query.q,
                _url: await shorten(json.url),
              },
            ];
            logger.info(_Found);
            return res.send(_Found);
          });
        break;
      case "goodnight":
        fetch("https://api.deltaa.me/goodnight")
          .then((res) => res.json())
          .then(async (json: any) => {
            var _Found = [
              {
                _status: "🎊success",
                _uuid: uuidv4(),
                _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
                _topic: "[ ANIMATION ]: gif",
                _query: req.query.q,
                _url: await shorten(json.url),
              },
            ];
            logger.info(_Found);
            return res.send(_Found);
          });
        break;
      case "zerotwo":
        fetch("https://api.deltaa.me/zerotwo")
          .then((res) => res.json())
          .then(async (json: any) => {
            var _Found = [
              {
                _status: "🎊success",
                _uuid: uuidv4(),
                _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
                _topic: "[ ANIMATION ]: gif",
                _query: req.query.q,
                _url: await shorten(json.url),
              },
            ];
            logger.info(_Found);
            return res.send(_Found);
          });
        break;
      case "confused":
        fetch(
          "https://anime-reactions.uzairashraf.dev/api/reactions/random?category=confused"
        )
          .then((res) => res.json())
          .then(async (json: any) => {
            var _Found = [
              {
                _status: "🎊success",
                _uuid: uuidv4(),
                _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
                _query: req.query.q,
                _url: json.reaction,
              },
            ];
            logger.info(_Found);
            return res.send(_Found);
          });
        break;
      case "sad":
        fetch(
          "https://anime-reactions.uzairashraf.dev/api/reactions/random?category=sad"
        )
          .then((res) => res.json())
          .then(async (json: any) => {
            var _Found = [
              {
                _status: "🎊success",
                _uuid: uuidv4(),
                _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
                _query: req.query.q,
                _url: json.reaction,
              },
            ];
            logger.info(_Found);
            return res.send(_Found);
          });
        break;
      case "thinking":
        fetch(
          "https://anime-reactions.uzairashraf.dev/api/reactions/random?category=thinking"
        )
          .then((res) => res.json())
          .then(async (json: any) => {
            var _Found = [
              {
                _status: "🎊success",
                _uuid: uuidv4(),
                _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
                _query: req.query.q,
                _url: json.reaction,
              },
            ];
            logger.info(_Found);
            return res.send(_Found);
          });
        break;
      case "yeah":
        fetch(
          "https://anime-reactions.uzairashraf.dev/api/reactions/random?category=yes"
        )
          .then((res) => res.json())
          .then(async (json: any) => {
            var _Found = [
              {
                _status: "🎊success",
                _uuid: uuidv4(),
                _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
                _query: req.query.q,
                _url: json.reaction,
              },
            ];
            logger.info(_Found);
            return res.send(_Found);
          });
        break;
      case "yeet":
        fetch("https://api.waifu.pics/sfw/yeet")
          .then((res) => res.json())
          .then(async (json: any) => {
            var _Found = [
              {
                _status: "🎊success",
                _uuid: uuidv4(),
                _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
                _topic: "[ ANIMATION ]: gif",
                _query: req.query.q,
                _url: await shorten(json.url),
              },
            ];
            logger.info(_Found);
            return res.send(_Found);
          });
        break;
      case "stare":
        fetch("https://nekoapi.vanillank2006.repl.co/api/action/stare")
          .then((res) => res.json())
          .then(async (json: any) => {
            var _Found = [
              {
                _status: "🎊success",
                _uuid: uuidv4(),
                _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
                _topic: "[ ANIMATION ]: gif",
                _query: req.query.q,
                _url: await shorten(json.url),
              },
            ];
            logger.info(_Found);
            return res.send(_Found);
          });
        break;
      case "bored":
        fetch("https://nekoapi.vanillank2006.repl.co/api/reaction/bored")
          .then((res) => res.json())
          .then(async (json: any) => {
            var _Found = [
              {
                _status: "🎊success",
                _uuid: uuidv4(),
                _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
                _topic: "[ ANIMATION ]: gif",
                _query: req.query.q,
                _url: await shorten(json.url),
              },
            ];
            logger.info(_Found);
            return res.send(_Found);
          });
        break;
      case "scream":
        fetch("https://nekoapi.vanillank2006.repl.co/api/reaction/scream")
          .then((res) => res.json())
          .then(async (json: any) => {
            var _Found = [
              {
                _status: "🎊success",
                _uuid: uuidv4(),
                _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
                _topic: "[ ANIMATION ]: gif",
                _query: req.query.q,
                _url: await shorten(json.url),
              },
            ];
            logger.info(_Found);
            return res.send(_Found);
          });
        break;
      case "nervous":
        fetch("https://nekoapi.vanillank2006.repl.co/api/reaction/nervous")
          .then((res) => res.json())
          .then(async (json: any) => {
            var _Found = [
              {
                _status: "🎊success",
                _uuid: uuidv4(),
                _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
                _topic: "[ ANIMATION ]: gif",
                _query: req.query.q,
                _url: await shorten(json.url),
              },
            ];
            logger.info(_Found);
            return res.send(_Found);
          });
        break;
      default:
        res.send({
          _status: "Failed with error code 911",
          _message: "Parameters requirement not met.",
          _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
          _usage: {
            _api_link: "/api/animation?q=",
            _example: "/api/animation?q=bite",
            _querry: [
              "bite",
              "blush",
              "bonk",
              "bully",
              "bored",
              "confused",
              "cry",
              "cuddle",
              "dance",
              "goodnight",
              "happy",
              "highfive",
              "hug",
              "kick",
              "kill",
              "kiss",
              "nervous",
              "pat",
              "poke",
              "punch",
              "sad",
              "scream",
              "slap",
              "smile",
              "stare",
              "wave",
              "wink",
              "yeet",
              "yes",
              "zerotwo",
              "thinking",
              "wallpaper",
            ],
          },
        });
        break;
    }
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
}
