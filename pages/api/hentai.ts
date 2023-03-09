import logger from "@/log";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import type { NextApiRequest, NextApiResponse } from "next";

// Local Storage For imports of all local.jsons
import ls_ass from "@/db/hentai/ass.json";
import ls_cum from "@/db/hentai/cum.json";
import ls_bdsm from "@/db/hentai/bdsm.json";
import ls_feet from "@/db/hentai/feet.json";
import ls_maid from "@/db/hentai/maid.json";
import ls_orgy from "@/db/hentai/orgy.json";
import ls_yuri from "@/db/hentai/yuri.json";
import ls_pussy from "@/db/hentai/pussy.json";
import ls_hentai from "@/db/hentai/hentai.json";
import ls_doujin from "@/db/hentai/doujin.json";
import ls_femdom from "@/db/hentai/femdom.json";
import ls_thighs from "@/db/hentai/thighs.json";
import ls_school from "@/db/hentai/school.json";
import ls_blowjob from "@/db/hentai/blowjob.json";
import ls_foxgirl from "@/db/hentai/foxgirl.json";
import ls_panties from "@/db/hentai/panties.json";
import ls_uniform from "@/db/hentai/uniform.json";
import ls_succubus from "@/db/hentai/succubus.json";
import ls_netorare from "@/db/hentai/netorare.json";
import ls_tentacles from "@/db/hentai/tentacles.json";
import ls_uglyBastard from "@/db/hentai/uglyBastard.json";
import ls_masturbation from "@/db/hentai/masturbation.json";

let _Found: any;
export default async function animation(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    switch (decodeURI(req.query.q)) {
      case "ass":
        var __ass = ls_ass[Math.floor(Math.random() * ls_ass.length)];
        res.status(200).json({
          resp: {
            id: uuidv4(),
            status: true,
            timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
          },
          meta: {
            topic: "HENTAI: .png, .jpg",
            description: "I know you like anime ass~ uwu",
            query: decodeURI(req.query.q),
            url: __ass,
          },
        });
        break;
      case "bdsm":
        var __bdsm = ls_bdsm[Math.floor(Math.random() * ls_bdsm.length)];
        res.status(200).json({
          resp: {
            id: uuidv4(),
            status: true,
            timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
          },
          meta: {
            topic: "HENTAI: .png, .jpg",
            description: "If you don't know what it is, search it up",
            query: decodeURI(req.query.q),
            url: __bdsm,
          },
        });
        break;
      case "blowjob":
        var __blowjob =
          ls_blowjob[Math.floor(Math.random() * ls_blowjob.length)];
        res.status(200).json({
          resp: {
            id: uuidv4(),
            status: true,
            timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
          },
          meta: {
            topic: "HENTAI: .png, .jpg",
            description:
              "Basically an image of a girl sucking on a sharp blade!",
            query: decodeURI(req.query.q),
            url: __blowjob,
          },
        });
        break;
      case "cum":
        var __cum = ls_cum[Math.floor(Math.random() * ls_cum.length)];
        res.status(200).json({
          resp: {
            id: uuidv4(),
            status: true,
            timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
          },
          meta: {
            topic: "HENTAI: .png, .jpg",
            description:
              "Basically sticky white stuff that is usually milked from sharpies.",
            query: decodeURI(req.query.q),
            url: __cum,
          },
        });
        break;
      case "doujin":
        var __doujin = ls_doujin[Math.floor(Math.random() * ls_doujin.length)];
        res.status(200).json({
          resp: {
            id: uuidv4(),
            status: true,
            timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
          },
          meta: {
            topic: "HENTAI: .png, .jpg",
            description: "Sends a random doujin page imageURL!",
            query: decodeURI(req.query.q),
            url: __doujin,
          },
        });
        break;
      case "feet":
        var __feet = ls_feet[Math.floor(Math.random() * ls_feet.length)];
        res.status(200).json({
          resp: {
            id: uuidv4(),
            status: true,
            timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
          },
          meta: {
            topic: "HENTAI: .png, .jpg",
            description: "So you like smelly feet huh?",
            query: decodeURI(req.query.q),
            url: __feet,
          },
        });
        break;
      case "femdom":
        var __femdom = ls_femdom[Math.floor(Math.random() * ls_femdom.length)];
        res.status(200).json({
          resp: {
            id: uuidv4(),
            status: true,
            timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
          },
          meta: {
            topic: "HENTAI: .png, .jpg",
            description: "Female Domination over you",
            query: decodeURI(req.query.q),
            url: __femdom,
          },
        });
        break;
      case "foxgirl":
        var __foxgirl =
          ls_foxgirl[Math.floor(Math.random() * ls_foxgirl.length)];
        res.status(200).json({
          resp: {
            id: uuidv4(),
            status: true,
            timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
          },
          meta: {
            topic: "HENTAI: .png, .jpg",
            description: "Girl's that are wannabe foxes, yes",
            query: decodeURI(req.query.q),
            url: __foxgirl,
          },
        });
        break;
      case "netorare":
        var __netorare =
          ls_netorare[Math.floor(Math.random() * ls_netorare.length)];
        res.status(200).json({
          resp: {
            id: uuidv4(),
            status: true,
            timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
          },
          meta: {
            topic: "HENTAI: .png, .jpg",
            description: "Wow, I won't even question your fetishes.",
            query: decodeURI(req.query.q),
            url: __netorare,
          },
        });
        break;
      case "maid":
        var __maid = ls_maid[Math.floor(Math.random() * ls_maid.length)];
        res.status(200).json({
          resp: {
            id: uuidv4(),
            status: true,
            timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
          },
          meta: {
            topic: "HENTAI: .png, .jpg",
            description:
              "Maids, Maid Uniforms, etc, you know what maids are :3",
            query: decodeURI(req.query.q),
            url: __maid,
          },
        });
        break;
      case "masturbation":
        var __masturbation =
          ls_masturbation[Math.floor(Math.random() * ls_masturbation.length)];
        res.status(200).json({
          resp: {
            id: uuidv4(),
            status: true,
            timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
          },
          meta: {
            topic: "HENTAI: .png, .jpg",
            description: "The power of solo queue",
            query: decodeURI(req.query.q),
            url: __masturbation,
          },
        });
        break;
      case "orgy":
        var __orgy = ls_orgy[Math.floor(Math.random() * ls_orgy.length)];
        res.status(200).json({
          resp: {
            id: uuidv4(),
            status: true,
            timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
          },
          meta: {
            topic: "HENTAI: .png, .jpg",
            description: "Group Lewd Acts",
            query: decodeURI(req.query.q),
            url: __orgy,
          },
        });
        break;
      case "panties":
        var __panties =
          ls_panties[Math.floor(Math.random() * ls_panties.length)];
        res.status(200).json({
          resp: {
            id: uuidv4(),
            status: true,
            timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
          },
          meta: {
            topic: "HENTAI: .png, .jpg",
            description: "I mean... just why? You like underwear?",
            query: decodeURI(req.query.q),
            url: __panties,
          },
        });
        break;
      case "pussy":
        var __pussy = ls_pussy[Math.floor(Math.random() * ls_pussy.length)];
        res.status(200).json({
          resp: {
            id: uuidv4(),
            status: true,
            timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
          },
          meta: {
            topic: "HENTAI: .png, .jpg",
            description: "School Uniforms!~ Yatta~!",
            query: decodeURI(req.query.q),
            url: __pussy,
          },
        });
        break;
      case "school":
        var __school = ls_school[Math.floor(Math.random() * ls_school.length)];
        res.status(200).json({
          resp: {
            id: uuidv4(),
            status: true,
            timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
          },
          meta: {
            topic: "HENTAI: .png, .jpg",
            description: "School Uniforms!~ Yatta~!",
            query: decodeURI(req.query.q),
            url: __school,
          },
        });
        break;
      case "succubus":
        var __succubus =
          ls_succubus[Math.floor(Math.random() * ls_succubus.length)];
        res.status(200).json({
          resp: {
            id: uuidv4(),
            status: true,
            timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
          },
          meta: {
            topic: "HENTAI: .png, .jpg",
            description:
              "Spooky Succubus, oh I'm so scared~ Totally don't suck me~",
            query: decodeURI(req.query.q),
            url: __succubus,
          },
        });
        break;
      case "tentacles":
        var __tentacles =
          ls_tentacles[Math.floor(Math.random() * ls_tentacles.length)];
        res.status(200).json({
          resp: {
            id: uuidv4(),
            status: true,
            timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
          },
          meta: {
            topic: "HENTAI: .png, .jpg",
            description: "I'm sorry but, why do they look like intestines?",
            query: decodeURI(req.query.q),
            url: __tentacles,
          },
        });
        break;
      case "thighs":
        var __thighs = ls_thighs[Math.floor(Math.random() * ls_thighs.length)];
        res.status(200).json({
          resp: {
            id: uuidv4(),
            status: true,
            timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
          },
          meta: {
            topic: "HENTAI: .png, .jpg",
            description: "The top part of your legs, very hot, isn't it?",
            query: decodeURI(req.query.q),
            url: __thighs,
          },
        });
        break;
      case "uglyBastard":
        var __uglyBastard =
          ls_uglyBastard[Math.floor(Math.random() * ls_uglyBastard.length)];
        res.status(200).json({
          resp: {
            id: uuidv4(),
            status: true,
            timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
          },
          meta: {
            topic: "HENTAI: .png, .jpg",
            description: "The one thing most of us can all agree to hate :)",
            query: decodeURI(req.query.q),
            url: __uglyBastard,
          },
        });
        break;
      case "uniform":
        var __uniform =
          ls_uniform[Math.floor(Math.random() * ls_uniform.length)];
        res.status(200).json({
          resp: {
            id: uuidv4(),
            status: true,
            timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
          },
          meta: {
            topic: "HENTAI: .png, .jpg",
            description: "Military, Konbini, Work, Nurse Uniforms, etc!~ Sexy~",
            query: decodeURI(req.query.q),
            url: __uniform,
          },
        });
        break;
      case "yuri":
        var __yuri = ls_yuri[Math.floor(Math.random() * ls_yuri.length)];
        res.status(200).json({
          resp: {
            id: uuidv4(),
            status: true,
            timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
          },
          meta: {
            topic: "HENTAI: .png, .jpg",
            description: "Girls on Girls, and Girl's only!<3",
            query: decodeURI(req.query.q),
            url: __yuri,
          },
        });
        break;
      case "hentai":
        var __hentai = ls_hentai[Math.floor(Math.random() * ls_hentai.length)];
        res.status(200).json({
          resp: {
            id: uuidv4(),
            status: true,
            timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
          },
          meta: {
            topic: "HENTAI: .png, .jpg",
            description: "Random hentai...",
            query: decodeURI(req.query.q),
            url: __hentai,
          },
        });
        break;
      default:
        res.status(500).json({
          id: uuidv4(),
          status: false,
          message: "Arguments not satisfied.",
          timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
          usage: {
            endpoint: "/api/hentai?q=",
            example: "/api/hentai?q=ass",
            querry: [
              "ass",
              "bdsm",
              "blowjob",
              "cum",
              "doujin",
              "feet",
              "femdom",
              "foxgirl",
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
            ],
          },
        });
        break;
    }
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
