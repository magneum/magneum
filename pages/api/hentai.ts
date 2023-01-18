import moment from "moment";
import tinyurl from "tinyurl";
import fetch from "node-fetch";
import logger from "../../services";
import { v4 as uuidv4 } from "uuid";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function animation(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.query.q) {
    case "ass":
      return fetch("https://cuteasfubuki.cf/api/ass")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _uuid: uuidv4(),
              _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              _topic: "Hentai (image)",
              DESCRIPTION: "I know you like anime ass~ uwu",
              _query: req.query.q,
              _url: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "bdsm":
      return fetch("https://cuteasfubuki.cf/api/bdsm")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _uuid: uuidv4(),
              _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              _topic: "Hentai (image)",
              DESCRIPTION: "If you don't know what it is, search it up",
              _query: req.query.q,
              _url: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "blowjob":
      return fetch("https://cuteasfubuki.cf/api/blowjob")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _uuid: uuidv4(),
              _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              _topic: "Hentai (image)",
              DESCRIPTION:
                "Basically an image of a girl sucking on a sharp blade!",
              _query: req.query.q,
              _url: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "cum":
      return fetch("https://cuteasfubuki.cf/api/cum")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _uuid: uuidv4(),
              _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              _topic: "Hentai (image)",
              DESCRIPTION:
                "Basically sticky white stuff that is usually milked from sharpies.",
              _query: req.query.q,
              _url: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "doujin":
      return fetch("https://cuteasfubuki.cf/api/doujin")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _uuid: uuidv4(),
              _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              _topic: "Hentai (image)",
              DESCRIPTION: "Sends a random doujin page imageURL!",
              _query: req.query.q,
              _url: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "feet":
      return fetch("https://cuteasfubuki.cf/api/feet")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _uuid: uuidv4(),
              _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              _topic: "Hentai (image)",
              DESCRIPTION: "So you like smelly feet huh?",
              _query: req.query.q,
              _url: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "femdom":
      return fetch("https://cuteasfubuki.cf/api/femdom")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _uuid: uuidv4(),
              _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              _topic: "Hentai (image)",
              DESCRIPTION: "Female Domination over you",
              _query: req.query.q,
              _url: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "foxgirl":
      return fetch("https://cuteasfubuki.cf/api/foxgirl")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _uuid: uuidv4(),
              _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              _topic: "Hentai (image)",
              DESCRIPTION: "Girl's that are wannabe foxes, yes",
              _query: req.query.q,
              _url: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "glasses":
      return fetch("https://cuteasfubuki.cf/api/glasses")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _uuid: uuidv4(),
              _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              _topic: "Hentai (image)",
              DESCRIPTION: "Girls that wear glasses, uwu~",
              _query: req.query.q,
              _url: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "netorare":
      return fetch("https://cuteasfubuki.cf/api/netorare")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _uuid: uuidv4(),
              _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              _topic: "Hentai (image)",
              DESCRIPTION: "Wow, I won't even question your fetishes.",
              _query: req.query.q,
              _url: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "maid":
      return fetch("https://cuteasfubuki.cf/api/maid")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _uuid: uuidv4(),
              _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              _topic: "Hentai (image)",
              DESCRIPTION:
                "Maids, Maid Uniforms, etc, you know what maids are :3",
              _query: req.query.q,
              _url: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "masturbation":
      return fetch("https://cuteasfubuki.cf/api/masturbation")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _uuid: uuidv4(),
              _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              _topic: "Hentai (image)",
              DESCRIPTION: "The power of solo queue",
              _query: req.query.q,
              _url: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "orgy":
      return fetch("https://cuteasfubuki.cf/api/orgy")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _uuid: uuidv4(),
              _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              _topic: "Hentai (image)",
              DESCRIPTION: "Group Lewd Acts",
              _query: req.query.q,
              _url: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "panties":
      return fetch("https://cuteasfubuki.cf/api/panties")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _uuid: uuidv4(),
              _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              _topic: "Hentai (image)",
              DESCRIPTION: "I mean... just why? You like underwear?",
              _query: req.query.q,
              _url: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "pussy":
      return fetch("https://cuteasfubuki.cf/api/pussy")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _uuid: uuidv4(),
              _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              _topic: "Hentai (image)",
              DESCRIPTION: "School Uniforms!~ Yatta~!",
              _query: req.query.q,
              _url: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "school":
      return fetch("https://cuteasfubuki.cf/api/school")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _uuid: uuidv4(),
              _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              _topic: "Hentai (image)",
              DESCRIPTION: "School Uniforms!~ Yatta~!",
              _query: req.query.q,
              _url: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "succubus":
      return fetch("https://cuteasfubuki.cf/api/succubus")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _uuid: uuidv4(),
              _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              _topic: "Hentai (image)",
              DESCRIPTION:
                "Spooky Succubus, oh I'm so scared~ Totally don't suck me~",
              _query: req.query.q,
              _url: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "tentacles":
      return fetch("https://cuteasfubuki.cf/api/tentacles")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _uuid: uuidv4(),
              _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              _topic: "Hentai (image)",
              DESCRIPTION: "I'm sorry but, why do they look like intestines?",
              _query: req.query.q,
              _url: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "thighs":
      return fetch("https://cuteasfubuki.cf/api/thighs")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _uuid: uuidv4(),
              _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              _topic: "Hentai (image)",
              DESCRIPTION: "The top part of your legs, very hot, isn't it?",
              _query: req.query.q,
              _url: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "uglyBastard":
      return fetch("https://cuteasfubuki.cf/api/uglyBastard")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _uuid: uuidv4(),
              _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              _topic: "Hentai (image)",
              DESCRIPTION: "The one thing most of us can all agree to hate :)",
              _query: req.query.q,
              _url: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "uniform":
      return fetch("https://cuteasfubuki.cf/api/uniform")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _uuid: uuidv4(),
              _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              _topic: "Hentai (image)",
              DESCRIPTION:
                "Military, Konbini, Work, Nurse Uniforms, etc!~ Sexy~",
              _query: req.query.q,
              _url: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "yuri":
      return fetch("https://cuteasfubuki.cf/api/yuri")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _uuid: uuidv4(),
              _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              _topic: "Hentai (image)",
              DESCRIPTION: "yuri | Girls on Girls, and Girl's only!<3",
              _query: req.query.q,
              _url: await tinyurl.shorten(json.url),
            },
          ];
          logger.info(_Found);
          return res.send(_Found);
        });
      break;
    case "zettaiRyouiki":
      return fetch("https://cuteasfubuki.cf/api/zettaiRyouiki")
        .then((res) => res.json())
        .then(async (json: any) => {
          var _Found = [
            {
              _status: "🎊success",
              _uuid: uuidv4(),
              _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              _topic: "Hentai (image)",
              DESCRIPTION:
                "That one part of the flesh being squeeze in thigh-highs~<3",
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
          endpoint: "/api/hentai?q=",
          example: "/api/hentai?q=ass",
          commands: [
            "ass",
            "bdsm",
            "blowjob",
            "cum",
            "doujin",
            "feet",
            "femdom",
            "foxgirl",
            "glasses",
            "hentai",
            "netorare",
            "maid",
            "masturbation",
            "orgy",
            "panties",
            "pussy",
            "school",
            "succubus",
            "tentacles",
            "thighs",
            "uglyBastard",
            "uniform",
            "yuri",
            "zettaiRyouiki",
          ],
        },
      });
      break;
  }
}
