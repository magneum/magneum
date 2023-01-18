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
      case "ass":
        fetch("https://cuteasfubuki.cf/api/ass")
          .then((res) => res.json())
          .then(async (json: any) => {
            var _Found = [
              {
                _status: "🎊success",
                _uuid: uuidv4(),
                _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
                _topic: "Hentai (image)",
                _description: "I know you like anime ass~ uwu",
                _query: req.query.q,
                _url: await shorten(json.url),
              },
            ];
            logger.info(_Found);
            return res.send(_Found);
          });
        break;
      case "bdsm":
        fetch("https://cuteasfubuki.cf/api/bdsm")
          .then((res) => res.json())
          .then(async (json: any) => {
            var _Found = [
              {
                _status: "🎊success",
                _uuid: uuidv4(),
                _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
                _topic: "Hentai (image)",
                _description: "If you don't know what it is, search it up",
                _query: req.query.q,
                _url: await shorten(json.url),
              },
            ];
            logger.info(_Found);
            return res.send(_Found);
          });
        break;
      case "blowjob":
        fetch("https://cuteasfubuki.cf/api/blowjob")
          .then((res) => res.json())
          .then(async (json: any) => {
            var _Found = [
              {
                _status: "🎊success",
                _uuid: uuidv4(),
                _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
                _topic: "Hentai (image)",
                _description:
                  "Basically an image of a girl sucking on a sharp blade!",
                _query: req.query.q,
                _url: await shorten(json.url),
              },
            ];
            logger.info(_Found);
            return res.send(_Found);
          });
        break;
      case "cum":
        fetch("https://cuteasfubuki.cf/api/cum")
          .then((res) => res.json())
          .then(async (json: any) => {
            var _Found = [
              {
                _status: "🎊success",
                _uuid: uuidv4(),
                _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
                _topic: "Hentai (image)",
                _description:
                  "Basically sticky white stuff that is usually milked from sharpies.",
                _query: req.query.q,
                _url: await shorten(json.url),
              },
            ];
            logger.info(_Found);
            return res.send(_Found);
          });
        break;
      case "doujin":
        fetch("https://cuteasfubuki.cf/api/doujin")
          .then((res) => res.json())
          .then(async (json: any) => {
            var _Found = [
              {
                _status: "🎊success",
                _uuid: uuidv4(),
                _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
                _topic: "Hentai (image)",
                _description: "Sends a random doujin page imageURL!",
                _query: req.query.q,
                _url: await shorten(json.url),
              },
            ];
            logger.info(_Found);
            return res.send(_Found);
          });
        break;
      case "feet":
        fetch("https://cuteasfubuki.cf/api/feet")
          .then((res) => res.json())
          .then(async (json: any) => {
            var _Found = [
              {
                _status: "🎊success",
                _uuid: uuidv4(),
                _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
                _topic: "Hentai (image)",
                _description: "So you like smelly feet huh?",
                _query: req.query.q,
                _url: await shorten(json.url),
              },
            ];
            logger.info(_Found);
            return res.send(_Found);
          });
        break;
      case "femdom":
        fetch("https://cuteasfubuki.cf/api/femdom")
          .then((res) => res.json())
          .then(async (json: any) => {
            var _Found = [
              {
                _status: "🎊success",
                _uuid: uuidv4(),
                _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
                _topic: "Hentai (image)",
                _description: "Female Domination over you",
                _query: req.query.q,
                _url: await shorten(json.url),
              },
            ];
            logger.info(_Found);
            return res.send(_Found);
          });
        break;
      case "foxgirl":
        fetch("https://cuteasfubuki.cf/api/foxgirl")
          .then((res) => res.json())
          .then(async (json: any) => {
            var _Found = [
              {
                _status: "🎊success",
                _uuid: uuidv4(),
                _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
                _topic: "Hentai (image)",
                _description: "Girl's that are wannabe foxes, yes",
                _query: req.query.q,
                _url: await shorten(json.url),
              },
            ];
            logger.info(_Found);
            return res.send(_Found);
          });
        break;
      case "glasses":
        fetch("https://cuteasfubuki.cf/api/glasses")
          .then((res) => res.json())
          .then(async (json: any) => {
            var _Found = [
              {
                _status: "🎊success",
                _uuid: uuidv4(),
                _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
                _topic: "Hentai (image)",
                _description: "Girls that wear glasses, uwu~",
                _query: req.query.q,
                _url: await shorten(json.url),
              },
            ];
            logger.info(_Found);
            return res.send(_Found);
          });
        break;
      case "netorare":
        fetch("https://cuteasfubuki.cf/api/netorare")
          .then((res) => res.json())
          .then(async (json: any) => {
            var _Found = [
              {
                _status: "🎊success",
                _uuid: uuidv4(),
                _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
                _topic: "Hentai (image)",
                _description: "Wow, I won't even question your fetishes.",
                _query: req.query.q,
                _url: await shorten(json.url),
              },
            ];
            logger.info(_Found);
            return res.send(_Found);
          });
        break;
      case "maid":
        fetch("https://cuteasfubuki.cf/api/maid")
          .then((res) => res.json())
          .then(async (json: any) => {
            var _Found = [
              {
                _status: "🎊success",
                _uuid: uuidv4(),
                _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
                _topic: "Hentai (image)",
                _description:
                  "Maids, Maid Uniforms, etc, you know what maids are :3",
                _query: req.query.q,
                _url: await shorten(json.url),
              },
            ];
            logger.info(_Found);
            return res.send(_Found);
          });
        break;
      case "masturbation":
        fetch("https://cuteasfubuki.cf/api/masturbation")
          .then((res) => res.json())
          .then(async (json: any) => {
            var _Found = [
              {
                _status: "🎊success",
                _uuid: uuidv4(),
                _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
                _topic: "Hentai (image)",
                _description: "The power of solo queue",
                _query: req.query.q,
                _url: await shorten(json.url),
              },
            ];
            logger.info(_Found);
            return res.send(_Found);
          });
        break;
      case "orgy":
        fetch("https://cuteasfubuki.cf/api/orgy")
          .then((res) => res.json())
          .then(async (json: any) => {
            var _Found = [
              {
                _status: "🎊success",
                _uuid: uuidv4(),
                _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
                _topic: "Hentai (image)",
                _description: "Group Lewd Acts",
                _query: req.query.q,
                _url: await shorten(json.url),
              },
            ];
            logger.info(_Found);
            return res.send(_Found);
          });
        break;
      case "panties":
        fetch("https://cuteasfubuki.cf/api/panties")
          .then((res) => res.json())
          .then(async (json: any) => {
            var _Found = [
              {
                _status: "🎊success",
                _uuid: uuidv4(),
                _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
                _topic: "Hentai (image)",
                _description: "I mean... just why? You like underwear?",
                _query: req.query.q,
                _url: await shorten(json.url),
              },
            ];
            logger.info(_Found);
            return res.send(_Found);
          });
        break;
      case "pussy":
        fetch("https://cuteasfubuki.cf/api/pussy")
          .then((res) => res.json())
          .then(async (json: any) => {
            var _Found = [
              {
                _status: "🎊success",
                _uuid: uuidv4(),
                _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
                _topic: "Hentai (image)",
                _description: "School Uniforms!~ Yatta~!",
                _query: req.query.q,
                _url: await shorten(json.url),
              },
            ];
            logger.info(_Found);
            return res.send(_Found);
          });
        break;
      case "school":
        fetch("https://cuteasfubuki.cf/api/school")
          .then((res) => res.json())
          .then(async (json: any) => {
            var _Found = [
              {
                _status: "🎊success",
                _uuid: uuidv4(),
                _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
                _topic: "Hentai (image)",
                _description: "School Uniforms!~ Yatta~!",
                _query: req.query.q,
                _url: await shorten(json.url),
              },
            ];
            logger.info(_Found);
            return res.send(_Found);
          });
        break;
      case "succubus":
        fetch("https://cuteasfubuki.cf/api/succubus")
          .then((res) => res.json())
          .then(async (json: any) => {
            var _Found = [
              {
                _status: "🎊success",
                _uuid: uuidv4(),
                _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
                _topic: "Hentai (image)",
                _description:
                  "Spooky Succubus, oh I'm so scared~ Totally don't suck me~",
                _query: req.query.q,
                _url: await shorten(json.url),
              },
            ];
            logger.info(_Found);
            return res.send(_Found);
          });
        break;
      case "tentacles":
        fetch("https://cuteasfubuki.cf/api/tentacles")
          .then((res) => res.json())
          .then(async (json: any) => {
            var _Found = [
              {
                _status: "🎊success",
                _uuid: uuidv4(),
                _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
                _topic: "Hentai (image)",
                _description:
                  "I'm sorry but, why do they look like intestines?",
                _query: req.query.q,
                _url: await shorten(json.url),
              },
            ];
            logger.info(_Found);
            return res.send(_Found);
          });
        break;
      case "thighs":
        fetch("https://cuteasfubuki.cf/api/thighs")
          .then((res) => res.json())
          .then(async (json: any) => {
            var _Found = [
              {
                _status: "🎊success",
                _uuid: uuidv4(),
                _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
                _topic: "Hentai (image)",
                _description: "The top part of your legs, very hot, isn't it?",
                _query: req.query.q,
                _url: await shorten(json.url),
              },
            ];
            logger.info(_Found);
            return res.send(_Found);
          });
        break;
      case "uglyBastard":
        fetch("https://cuteasfubuki.cf/api/uglyBastard")
          .then((res) => res.json())
          .then(async (json: any) => {
            var _Found = [
              {
                _status: "🎊success",
                _uuid: uuidv4(),
                _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
                _topic: "Hentai (image)",
                _description:
                  "The one thing most of us can all agree to hate :)",
                _query: req.query.q,
                _url: await shorten(json.url),
              },
            ];
            logger.info(_Found);
            return res.send(_Found);
          });
        break;
      case "uniform":
        fetch("https://cuteasfubuki.cf/api/uniform")
          .then((res) => res.json())
          .then(async (json: any) => {
            var _Found = [
              {
                _status: "🎊success",
                _uuid: uuidv4(),
                _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
                _topic: "Hentai (image)",
                _description:
                  "Military, Konbini, Work, Nurse Uniforms, etc!~ Sexy~",
                _query: req.query.q,
                _url: await shorten(json.url),
              },
            ];
            logger.info(_Found);
            return res.send(_Found);
          });
        break;
      case "yuri":
        fetch("https://cuteasfubuki.cf/api/yuri")
          .then((res) => res.json())
          .then(async (json: any) => {
            var _Found = [
              {
                _status: "🎊success",
                _uuid: uuidv4(),
                _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
                _topic: "Hentai (image)",
                _description: "yuri | Girls on Girls, and Girl's only!<3",
                _query: req.query.q,
                _url: await shorten(json.url),
              },
            ];
            logger.info(_Found);
            return res.send(_Found);
          });
        break;
      case "zettaiRyouiki":
        fetch("https://cuteasfubuki.cf/api/zettaiRyouiki")
          .then((res) => res.json())
          .then(async (json: any) => {
            var _Found = [
              {
                _status: "🎊success",
                _uuid: uuidv4(),
                _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
                _topic: "Hentai (image)",
                _description:
                  "That one part of the flesh being squeeze in thigh-highs~<3",
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
          _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
          _usage: {
            _api_link: "/api/hentai?q=",
            _example: "/api/hentai?q=ass",
            _querry: [
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
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
}
