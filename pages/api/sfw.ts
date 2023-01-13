import axios from "axios";
import fetch from "node-fetch";
const tinyurl = require("tinyurl");
const unirest = require("unirest");
const request = require("request");
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
              _id: uuidv4(),
              TIMESTAMP: Date.now(),
              TOPIC: "[SFW Images]: yeet",
              QUERY: req.query.q,
              URL: await tinyurl.shorten(json.url),
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
              _id: uuidv4(),
              TIMESTAMP: Date.now(),
              TOPIC: "[SFW Images]: neko",
              QUERY: req.query.q,
              URL: await tinyurl.shorten(json.url),
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
              _id: uuidv4(),
              TIMESTAMP: Date.now(),
              TOPIC: "[SFW Images]: shinobu",
              QUERY: req.query.q,
              URL: await tinyurl.shorten(json.url),
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
              _id: uuidv4(),
              TIMESTAMP: Date.now(),
              TOPIC: "[SFW Images]: megumin",
              QUERY: req.query.q,
              URL: await tinyurl.shorten(json.url),
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
              _id: uuidv4(),
              TIMESTAMP: Date.now(),
              TOPIC: "[SFW Images]: bully",
              QUERY: req.query.q,
              URL: await tinyurl.shorten(json.url),
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
              _id: uuidv4(),
              TIMESTAMP: Date.now(),
              TOPIC: "[SFW Images]: cuddle",
              QUERY: req.query.q,
              URL: await tinyurl.shorten(json.url),
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
              _id: uuidv4(),
              TIMESTAMP: Date.now(),
              TOPIC: "[SFW Images]: cry",
              QUERY: req.query.q,
              URL: await tinyurl.shorten(json.url),
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
              _id: uuidv4(),
              TIMESTAMP: Date.now(),
              TOPIC: "[SFW Images]: hug",
              QUERY: req.query.q,
              URL: await tinyurl.shorten(json.url),
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
              _id: uuidv4(),
              TIMESTAMP: Date.now(),
              TOPIC: "[SFW Images]: awoo",
              QUERY: req.query.q,
              URL: await tinyurl.shorten(json.url),
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
              _id: uuidv4(),
              TIMESTAMP: Date.now(),
              TOPIC: "[SFW Images]: kiss",
              QUERY: req.query.q,
              URL: await tinyurl.shorten(json.url),
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
              _id: uuidv4(),
              TIMESTAMP: Date.now(),
              TOPIC: "[SFW Images]: lick",
              QUERY: req.query.q,
              URL: await tinyurl.shorten(json.url),
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
              _id: uuidv4(),
              TIMESTAMP: Date.now(),
              TOPIC: "[SFW Images]: yeet",
              QUERY: req.query.q,
              URL: await tinyurl.shorten(json.url),
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
              _id: uuidv4(),
              TIMESTAMP: Date.now(),
              TOPIC: "[SFW Images]: smug",
              QUERY: req.query.q,
              URL: await tinyurl.shorten(json.url),
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
              _id: uuidv4(),
              TIMESTAMP: Date.now(),
              TOPIC: "[SFW Images]: bonk",
              QUERY: req.query.q,
              URL: await tinyurl.shorten(json.url),
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
              _id: uuidv4(),
              TIMESTAMP: Date.now(),
              TOPIC: "[SFW Images]: yeet",
              QUERY: req.query.q,
              URL: await tinyurl.shorten(json.url),
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
              _id: uuidv4(),
              TIMESTAMP: Date.now(),
              TOPIC: "[SFW Images]: blush",
              QUERY: req.query.q,
              URL: await tinyurl.shorten(json.url),
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
              _id: uuidv4(),
              TIMESTAMP: Date.now(),
              TOPIC: "[SFW Images]: smile",
              QUERY: req.query.q,
              URL: await tinyurl.shorten(json.url),
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
              _id: uuidv4(),
              TIMESTAMP: Date.now(),
              TOPIC: "[SFW Images]: wave",
              QUERY: req.query.q,
              URL: await tinyurl.shorten(json.url),
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
              _id: uuidv4(),
              TIMESTAMP: Date.now(),
              TOPIC: "[SFW Images]: highfive",
              QUERY: req.query.q,
              URL: await tinyurl.shorten(json.url),
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
              _id: uuidv4(),
              TIMESTAMP: Date.now(),
              TOPIC: "[SFW Images]: handhold",
              QUERY: req.query.q,
              URL: await tinyurl.shorten(json.url),
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
              _id: uuidv4(),
              TIMESTAMP: Date.now(),
              TOPIC: "[SFW Images]: nom",
              QUERY: req.query.q,
              URL: await tinyurl.shorten(json.url),
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
              _id: uuidv4(),
              TIMESTAMP: Date.now(),
              TOPIC: "[SFW Images]: bite",
              QUERY: req.query.q,
              URL: await tinyurl.shorten(json.url),
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
              _id: uuidv4(),
              TIMESTAMP: Date.now(),
              TOPIC: "[SFW Images]: glomp",
              QUERY: req.query.q,
              URL: await tinyurl.shorten(json.url),
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
              _id: uuidv4(),
              TIMESTAMP: Date.now(),
              TOPIC: "[SFW Images]: slap",
              QUERY: req.query.q,
              URL: await tinyurl.shorten(json.url),
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
              _id: uuidv4(),
              TIMESTAMP: Date.now(),
              TOPIC: "[SFW Images]: kill",
              QUERY: req.query.q,
              URL: await tinyurl.shorten(json.url),
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
              _id: uuidv4(),
              TIMESTAMP: Date.now(),
              TOPIC: "[SFW Images]: kick",
              QUERY: req.query.q,
              URL: await tinyurl.shorten(json.url),
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
              _id: uuidv4(),
              TIMESTAMP: Date.now(),
              TOPIC: "[SFW Images]: happy",
              QUERY: req.query.q,
              URL: await tinyurl.shorten(json.url),
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
              _id: uuidv4(),
              TIMESTAMP: Date.now(),
              TOPIC: "[SFW Images]: wink",
              QUERY: req.query.q,
              URL: await tinyurl.shorten(json.url),
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
              _id: uuidv4(),
              TIMESTAMP: Date.now(),
              TOPIC: "[SFW Images]: poke",
              QUERY: req.query.q,
              URL: await tinyurl.shorten(json.url),
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
              _id: uuidv4(),
              TIMESTAMP: Date.now(),
              TOPIC: "[SFW Images]: dance",
              QUERY: req.query.q,
              URL: await tinyurl.shorten(json.url),
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
              _id: uuidv4(),
              TIMESTAMP: Date.now(),
              TOPIC: "[SFW Images]: cringe",
              QUERY: req.query.q,
              URL: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    default:
      return res.send({
        _status: "Failed with error code 911",
        TIMESTAMP: Date.now(),
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
