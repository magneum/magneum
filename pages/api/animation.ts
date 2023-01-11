import fetch from "node-fetch";
const tinyurl = require("tinyurl");
import logger from "../../services";
import { v4 as uuidv4 } from "uuid";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function animation(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.query.q) {
    case "blush":
      return fetch("https://api.waifu.pics/sfw/blush")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _id: uuidv4(),
              TIMESTAMP: Date.now(),
              TOPIC: "Animation (gif)",
              QUERY: req.query.q,
              URL: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "dance":
      return fetch("https://api.waifu.pics/sfw/dance")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _id: uuidv4(),
              TIMESTAMP: Date.now(),
              TOPIC: "Animation (gif)",
              QUERY: req.query.q,
              URL: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "cuddle":
      return fetch("https://nekos.life/api/v2/img/cuddle")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _id: uuidv4(),
              TIMESTAMP: Date.now(),
              TOPIC: "Animation (gif)",
              QUERY: req.query.q,
              URL: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "bite":
      return fetch("https://api.waifu.pics/sfw/bite")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _id: uuidv4(),
              TIMESTAMP: Date.now(),
              TOPIC: "Animation (gif)",
              QUERY: req.query.q,
              URL: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "slap":
      return fetch("https://nekos.life/api/v2/img/slap")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _id: uuidv4(),
              TIMESTAMP: Date.now(),
              TOPIC: "Animation (gif)",
              QUERY: req.query.q,
              URL: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "wink":
      return fetch("https://api.waifu.pics/sfw/wink")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _id: uuidv4(),
              TIMESTAMP: Date.now(),
              TOPIC: "Animation (gif)",
              QUERY: req.query.q,
              URL: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "bonk":
      return fetch("https://api.waifu.pics/sfw/bonk")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _id: uuidv4(),
              TIMESTAMP: Date.now(),
              TOPIC: "Animation (gif)",
              QUERY: req.query.q,
              URL: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "bully":
      return fetch("https://nekos.life/api/v2/img/bully")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _id: uuidv4(),
              TIMESTAMP: Date.now(),
              TOPIC: "Animation (gif)",
              QUERY: req.query.q,
              URL: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "hug":
      return fetch("https://api.waifu.pics/sfw/hug")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _id: uuidv4(),
              TIMESTAMP: Date.now(),
              TOPIC: "Animation (gif)",
              QUERY: req.query.q,
              URL: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "kiss":
      return fetch("https://api.waifu.pics/sfw/kiss")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _id: uuidv4(),
              TIMESTAMP: Date.now(),
              TOPIC: "Animation (gif)",
              QUERY: req.query.q,
              URL: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "pat":
      return fetch("https://api.waifu.pics/sfw/pat")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _id: uuidv4(),
              TIMESTAMP: Date.now(),
              TOPIC: "Animation (gif)",
              QUERY: req.query.q,
              URL: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "wallpaper":
      return fetch("https://akaneko-api.herokuapp.com/api/wallpapers")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _id: uuidv4(),
              TIMESTAMP: Date.now(),
              TOPIC: "Animation (gif)",
              QUERY: req.query.q,
              URL: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "happy":
      return fetch("https://api.waifu.pics/sfw/happy")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _id: uuidv4(),
              TIMESTAMP: Date.now(),
              TOPIC: "Animation (gif)",
              QUERY: req.query.q,
              URL: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "kill":
      return fetch("https://api.waifu.pics/sfw/kill")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _id: uuidv4(),
              TIMESTAMP: Date.now(),
              TOPIC: "Animation (gif)",
              QUERY: req.query.q,
              URL: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "highfive":
      return fetch("https://api.waifu.pics/sfw/highfive")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _id: uuidv4(),
              TIMESTAMP: Date.now(),
              TOPIC: "Animation (gif)",
              QUERY: req.query.q,
              URL: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "wave":
      return fetch("https://api.waifu.pics/sfw/wave")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _id: uuidv4(),
              TIMESTAMP: Date.now(),
              TOPIC: "Animation (gif)",
              QUERY: req.query.q,
              URL: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "cry":
      return fetch("https://api.waifu.pics/sfw/cry")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _id: uuidv4(),
              TIMESTAMP: Date.now(),
              TOPIC: "Animation (gif)",
              QUERY: req.query.q,
              URL: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "smile":
      return fetch("https://api.waifu.pics/sfw/smile")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _id: uuidv4(),
              TIMESTAMP: Date.now(),
              TOPIC: "Animation (gif)",
              QUERY: req.query.q,
              URL: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "punch":
      return fetch("https://neko-love.xyz/api/v1/punch")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _id: uuidv4(),
              TIMESTAMP: Date.now(),
              TOPIC: "Animation (gif)",
              QUERY: req.query.q,
              URL: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "kick":
      return fetch("https://api.waifu.pics/sfw/kick")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _id: uuidv4(),
              TIMESTAMP: Date.now(),
              TOPIC: "Animation (gif)",
              QUERY: req.query.q,
              URL: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "poke":
      return fetch("https://nekos.life/api/v2/img/poke")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _id: uuidv4(),
              TIMESTAMP: Date.now(),
              TOPIC: "Animation (gif)",
              QUERY: req.query.q,
              URL: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "goodnight":
      return fetch("https://api.deltaa.me/goodnight")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _id: uuidv4(),
              TIMESTAMP: Date.now(),
              TOPIC: "Animation (gif)",
              QUERY: req.query.q,
              URL: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "zerotwo":
      return fetch("https://api.deltaa.me/zerotwo")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _id: uuidv4(),
              TIMESTAMP: Date.now(),
              TOPIC: "Animation (gif)",
              QUERY: req.query.q,
              URL: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "confused":
      return fetch(
        "https://anime-reactions.uzairashraf.dev/api/reactions/random?category=confused"
      )
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _id: uuidv4(),
              TIMESTAMP: Date.now(),
              QUERY: req.query.q,
              URL: json.reaction,
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "sad":
      return fetch(
        "https://anime-reactions.uzairashraf.dev/api/reactions/random?category=sad"
      )
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _id: uuidv4(),
              TIMESTAMP: Date.now(),
              QUERY: req.query.q,
              URL: json.reaction,
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "thinking":
      return fetch(
        "https://anime-reactions.uzairashraf.dev/api/reactions/random?category=thinking"
      )
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _id: uuidv4(),
              TIMESTAMP: Date.now(),
              QUERY: req.query.q,
              URL: json.reaction,
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "yeah":
      return fetch(
        "https://anime-reactions.uzairashraf.dev/api/reactions/random?category=yes"
      )
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _id: uuidv4(),
              TIMESTAMP: Date.now(),
              QUERY: req.query.q,
              URL: json.reaction,
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "yeet":
      return fetch("https://api.waifu.pics/sfw/yeet")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _id: uuidv4(),
              TIMESTAMP: Date.now(),
              TOPIC: "Animation (gif)",
              QUERY: req.query.q,
              URL: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "stare":
      return fetch("https://nekoapi.vanillank2006.repl.co/api/action/stare")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _id: uuidv4(),
              TIMESTAMP: Date.now(),
              TOPIC: "Animation (gif)",
              QUERY: req.query.q,
              URL: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "bored":
      return fetch("https://nekoapi.vanillank2006.repl.co/api/reaction/bored")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _id: uuidv4(),
              TIMESTAMP: Date.now(),
              TOPIC: "Animation (gif)",
              QUERY: req.query.q,
              URL: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "scream":
      return fetch("https://nekoapi.vanillank2006.repl.co/api/reaction/scream")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _id: uuidv4(),
              TIMESTAMP: Date.now(),
              TOPIC: "Animation (gif)",
              QUERY: req.query.q,
              URL: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "nervous":
      return fetch("https://nekoapi.vanillank2006.repl.co/api/reaction/nervous")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _id: uuidv4(),
              TIMESTAMP: Date.now(),
              TOPIC: "Animation (gif)",
              QUERY: req.query.q,
              URL: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    default:
      res.send({
        _status: "⚠️ failed",
        _id: uuidv4(),
        TIMESTAMP: Date.now(),
        USAGE: {
          endpoint: "/api/animation?q=",
          example: "/api/animation?q=bite",
          commands: [
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
}
