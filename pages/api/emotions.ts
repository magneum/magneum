import logger from "@/log";
import moment from "moment";
import { uuid as uuidv4 } from "uuidv4";
import type { NextApiRequest, NextApiResponse } from "next";

// Local Storage For imports of all local.jsons
import ls_cry from "@/db/emotions/cry.json";
import ls_hug from "@/db/emotions/hug.json";
import ls_pat from "@/db/emotions/pat.json";
import ls_sad from "@/db/emotions/sad.json";
import ls_yes from "@/db/emotions/yes.json";
import ls_kiss from "@/db/emotions/kiss.json";
import ls_bite from "@/db/emotions/bite.json";
import ls_kick from "@/db/emotions/kick.json";
import ls_bonk from "@/db/emotions/bonk.json";
import ls_kill from "@/db/emotions/kill.json";
import ls_slap from "@/db/emotions/slap.json";
import ls_wave from "@/db/emotions/wave.json";
import ls_wink from "@/db/emotions/wink.json";
import ls_yeet from "@/db/emotions/yeet.json";
import ls_dance from "@/db/emotions/dance.json";
import ls_happy from "@/db/emotions/happy.json";
import ls_bored from "@/db/emotions/bored.json";
import ls_smile from "@/db/emotions/smile.json";
import ls_stare from "@/db/emotions/stare.json";
import ls_punch from "@/db/emotions/punch.json";
import ls_scream from "@/db/emotions/scream.json";
import ls_cuddle from "@/db/emotions/cuddle.json";
import ls_nervous from "@/db/emotions/nervous.json";
import ls_highfive from "@/db/emotions/highfive.json";
import ls_confused from "@/db/emotions/confused.json";
import ls_thinking from "@/db/emotions/thinking.json";

let _Found: any;
export default async function animation(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    let argument = req.query.q as any;
    switch (argument) {
      case "dance":
        var __dance = ls_dance[Math.floor(Math.random() * ls_dance.length)];
        res.status(200).json({
          resp: {
            id: uuidv4(),
            status: true,
            timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
          },
          meta: {
            topic: "EMOTIONS: gif",
            query: argument,
            url: __dance,
          },
        });
        break;
      case "cuddle":
        var __cuddle = ls_cuddle[Math.floor(Math.random() * ls_cuddle.length)];
        res.status(200).json({
          resp: {
            id: uuidv4(),
            status: true,
            timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
          },
          meta: {
            topic: "EMOTIONS: gif",
            query: argument,
            url: __cuddle,
          },
        });
        break;
      case "bite":
        var __bite = ls_bite[Math.floor(Math.random() * ls_bite.length)];
        res.status(200).json({
          resp: {
            id: uuidv4(),
            status: true,
            timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
          },
          meta: {
            topic: "EMOTIONS: gif",
            query: argument,
            url: __bite,
          },
        });
        break;
      case "slap":
        var __slap = ls_slap[Math.floor(Math.random() * ls_slap.length)];
        res.status(200).json({
          resp: {
            id: uuidv4(),
            status: true,
            timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
          },
          meta: {
            topic: "EMOTIONS: gif",
            query: argument,
            url: __slap,
          },
        });
        break;
      case "wink":
        var __wink = ls_wink[Math.floor(Math.random() * ls_wink.length)];
        res.status(200).json({
          resp: {
            id: uuidv4(),
            status: true,
            timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
          },
          meta: {
            topic: "EMOTIONS: gif",
            query: argument,
            url: __wink,
          },
        });
        break;
      case "bonk":
        var __bonk = ls_bonk[Math.floor(Math.random() * ls_bonk.length)];
        res.status(200).json({
          resp: {
            id: uuidv4(),
            status: true,
            timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
          },
          meta: {
            topic: "EMOTIONS: gif",
            query: argument,
            url: __bonk,
          },
        });
        break;
      case "hug":
        var __hug = ls_hug[Math.floor(Math.random() * ls_hug.length)];
        res.status(200).json({
          resp: {
            id: uuidv4(),
            status: true,
            timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
          },
          meta: {
            topic: "EMOTIONS: gif",
            query: argument,
            url: __hug,
          },
        });
        break;
      case "kiss":
        var __kiss = ls_kiss[Math.floor(Math.random() * ls_kiss.length)];
        res.status(200).json({
          resp: {
            id: uuidv4(),
            status: true,
            timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
          },
          meta: {
            topic: "EMOTIONS: gif",
            query: argument,
            url: __kiss,
          },
        });
        break;
      case "pat":
        var __pat = ls_pat[Math.floor(Math.random() * ls_pat.length)];
        res.status(200).json({
          resp: {
            id: uuidv4(),
            status: true,
            timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
          },
          meta: {
            topic: "EMOTIONS: gif",
            query: argument,
            url: __pat,
          },
        });
        break;
      case "happy":
        var __happy = ls_happy[Math.floor(Math.random() * ls_happy.length)];
        res.status(200).json({
          resp: {
            id: uuidv4(),
            status: true,
            timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
          },
          meta: {
            topic: "EMOTIONS: gif",
            query: argument,
            url: __happy,
          },
        });
        break;
      case "kill":
        var __kill = ls_kill[Math.floor(Math.random() * ls_kill.length)];
        res.status(200).json({
          resp: {
            id: uuidv4(),
            status: true,
            timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
          },
          meta: {
            topic: "EMOTIONS: gif",
            query: argument,
            url: __kill,
          },
        });
        break;
      case "highfive":
        var __highfive =
          ls_highfive[Math.floor(Math.random() * ls_highfive.length)];
        res.status(200).json({
          resp: {
            id: uuidv4(),
            status: true,
            timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
          },
          meta: {
            topic: "EMOTIONS: gif",
            query: argument,
            url: __highfive,
          },
        });
        break;
      case "wave":
        var __wave = ls_wave[Math.floor(Math.random() * ls_wave.length)];
        res.status(200).json({
          resp: {
            id: uuidv4(),
            status: true,
            timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
          },
          meta: {
            topic: "EMOTIONS: gif",
            query: argument,
            url: __wave,
          },
        });
        break;
      case "cry":
        var __cry = ls_cry[Math.floor(Math.random() * ls_cry.length)];
        res.status(200).json({
          resp: {
            id: uuidv4(),
            status: true,
            timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
          },
          meta: {
            topic: "EMOTIONS: gif",
            query: argument,
            url: __cry,
          },
        });
        break;
      case "smile":
        var __smile = ls_smile[Math.floor(Math.random() * ls_smile.length)];
        res.status(200).json({
          resp: {
            id: uuidv4(),
            status: true,
            timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
          },
          meta: {
            topic: "EMOTIONS: gif",
            query: argument,
            url: __smile,
          },
        });
        break;
      case "punch":
        var __punch = ls_punch[Math.floor(Math.random() * ls_punch.length)];
        res.status(200).json({
          resp: {
            id: uuidv4(),
            status: true,
            timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
          },
          meta: {
            topic: "EMOTIONS: gif",
            query: argument,
            url: __punch,
          },
        });
        break;
      case "kick":
        var __kick = ls_kick[Math.floor(Math.random() * ls_kick.length)];
        res.status(200).json({
          resp: {
            id: uuidv4(),
            status: true,
            timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
          },
          meta: {
            topic: "EMOTIONS: gif",
            query: argument,
            url: __kick,
          },
        });
        break;
      case "confused":
        var __confused =
          ls_confused[Math.floor(Math.random() * ls_confused.length)];
        res.status(200).json({
          resp: {
            id: uuidv4(),
            status: true,
            timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
          },
          meta: {
            topic: "EMOTIONS: gif",
            query: argument,
            url: __confused,
          },
        });
        break;
      case "sad":
        var __sad = ls_sad[Math.floor(Math.random() * ls_sad.length)];
        res.status(200).json({
          resp: {
            id: uuidv4(),
            status: true,
            timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
          },
          meta: {
            topic: "EMOTIONS: gif",
            query: argument,
            url: __sad,
          },
        });
        break;
      case "thinking":
        var __thinking =
          ls_thinking[Math.floor(Math.random() * ls_thinking.length)];
        res.status(200).json({
          resp: {
            id: uuidv4(),
            status: true,
            timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
          },
          meta: {
            topic: "EMOTIONS: gif",
            query: argument,
            url: __thinking,
          },
        });
        break;
      case "yeet":
        var __yeet = ls_yeet[Math.floor(Math.random() * ls_yeet.length)];
        res.status(200).json({
          resp: {
            id: uuidv4(),
            status: true,
            timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
          },
          meta: {
            topic: "EMOTIONS: gif",
            query: argument,
            url: __yeet,
          },
        });
        break;
      case "stare":
        var __stare = ls_stare[Math.floor(Math.random() * ls_stare.length)];
        res.status(200).json({
          resp: {
            id: uuidv4(),
            status: true,
            timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
          },
          meta: {
            topic: "EMOTIONS: gif",
            query: argument,
            url: __stare,
          },
        });
        break;
      case "bored":
        var __bored = ls_bored[Math.floor(Math.random() * ls_bored.length)];
        res.status(200).json({
          resp: {
            id: uuidv4(),
            status: true,
            timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
          },
          meta: {
            topic: "EMOTIONS: gif",
            query: argument,
            url: __bored,
          },
        });
        break;
      case "scream":
        var __scream = ls_scream[Math.floor(Math.random() * ls_scream.length)];
        res.status(200).json({
          resp: {
            id: uuidv4(),
            status: true,
            timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
          },
          meta: {
            topic: "EMOTIONS: gif",
            query: argument,
            url: __scream,
          },
        });
        break;
      case "nervous":
        var __nervous =
          ls_nervous[Math.floor(Math.random() * ls_nervous.length)];
        res.status(200).json({
          resp: {
            id: uuidv4(),
            status: true,
            timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
          },
          meta: {
            topic: "EMOTIONS: gif",
            query: argument,
            url: __nervous,
          },
        });
        break;
      case "yes":
        var __yes = ls_yes[Math.floor(Math.random() * ls_yes.length)];
        res.status(200).json({
          resp: {
            id: uuidv4(),
            status: true,
            timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
          },
          meta: {
            topic: "EMOTIONS: gif",
            query: argument,
            url: __yes,
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
            endpoint: "/api/emotions?q=",
            example: "/api/emotions?q=bite",
            querry: [
              "bite",
              "bonk",
              "bored",
              "confused",
              "cry",
              "cuddle",
              "dance",
              "happy",
              "highfive",
              "hug",
              "kick",
              "kill",
              "kiss",
              "nervous",
              "pat",
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
              "thinking",
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
