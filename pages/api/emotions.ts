import moment from "moment";
import fetch from "node-fetch";
import logger from "../../log";
import { v4 as uuidv4 } from "uuid";
import type { NextApiRequest, NextApiResponse } from "next";

// Local Storage For imports of all local.jsons
import ls_cry from "../../lib/emotions/cry.json";
import ls_hug from "../../lib/emotions/hug.json";
import ls_pat from "../../lib/emotions/pat.json";
import ls_sad from "../../lib/emotions/sad.json";
import ls_yes from "../../lib/emotions/yes.json";
import ls_kiss from "../../lib/emotions/kiss.json";
import ls_bite from "../../lib/emotions/bite.json";
import ls_kick from "../../lib/emotions/kick.json";
import ls_bonk from "../../lib/emotions/bonk.json";
import ls_kill from "../../lib/emotions/kill.json";
import ls_slap from "../../lib/emotions/slap.json";
import ls_wave from "../../lib/emotions/wave.json";
import ls_wink from "../../lib/emotions/wink.json";
import ls_yeet from "../../lib/emotions/yeet.json";
import ls_dance from "../../lib/emotions/dance.json";
import ls_happy from "../../lib/emotions/happy.json";
import ls_bored from "../../lib/emotions/bored.json";
import ls_smile from "../../lib/emotions/smile.json";
import ls_stare from "../../lib/emotions/stare.json";
import ls_punch from "../../lib/emotions/punch.json";
import ls_scream from "../../lib/emotions/scream.json";
import ls_cuddle from "../../lib/emotions/cuddle.json";
import ls_nervous from "../../lib/emotions/nervous.json";
import ls_highfive from "../../lib/emotions/highfive.json";
import ls_confused from "../../lib/emotions/confused.json";
import ls_thinking from "../../lib/emotions/thinking.json";

let _Found: any;
export default async function animation(
req: NextApiRequest,
res: NextApiResponse
) {
try {
switch (req.query.q) {
case "dance":
var __dance = ls_dance[Math.floor(Math.random() * ls_dance.length)];
_Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[ EMOTIONS ]: gif",
_query: req.query.q,
_url: __dance,
},
];
logger.info(_Found);
res.send(_Found);
break;
case "cuddle":
var __cuddle = ls_cuddle[Math.floor(Math.random() * ls_cuddle.length)];
_Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[ EMOTIONS ]: gif",
_query: req.query.q,
_url: __cuddle,
},
];
logger.info(_Found);
res.send(_Found);
break;
case "bite":
var __bite = ls_bite[Math.floor(Math.random() * ls_bite.length)];
_Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[ EMOTIONS ]: gif",
_query: req.query.q,
_url: __bite,
},
];
logger.info(_Found);
res.send(_Found);
break;
case "slap":
var __slap = ls_slap[Math.floor(Math.random() * ls_slap.length)];
_Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[ EMOTIONS ]: gif",
_query: req.query.q,
_url: __slap,
},
];
logger.info(_Found);
res.send(_Found);
break;
case "wink":
var __wink = ls_wink[Math.floor(Math.random() * ls_wink.length)];
_Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[ EMOTIONS ]: gif",
_query: req.query.q,
_url: __wink,
},
];
logger.info(_Found);
res.send(_Found);
break;
case "bonk":
var __bonk = ls_bonk[Math.floor(Math.random() * ls_bonk.length)];
_Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[ EMOTIONS ]: gif",
_query: req.query.q,
_url: __bonk,
},
];
logger.info(_Found);
res.send(_Found);
break;
case "hug":
var __hug = ls_hug[Math.floor(Math.random() * ls_hug.length)];
_Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[ EMOTIONS ]: gif",
_query: req.query.q,
_url: __hug,
},
];
logger.info(_Found);
res.send(_Found);
break;
case "kiss":
var __kiss = ls_kiss[Math.floor(Math.random() * ls_kiss.length)];
_Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[ EMOTIONS ]: gif",
_query: req.query.q,
_url: __kiss,
},
];
logger.info(_Found);
res.send(_Found);
break;
case "pat":
var __pat = ls_pat[Math.floor(Math.random() * ls_pat.length)];
_Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[ EMOTIONS ]: gif",
_query: req.query.q,
_url: __pat,
},
];
logger.info(_Found);
res.send(_Found);
break;
case "happy":
var __happy = ls_happy[Math.floor(Math.random() * ls_happy.length)];
_Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[ EMOTIONS ]: gif",
_query: req.query.q,
_url: __happy,
},
];
logger.info(_Found);
res.send(_Found);
break;
case "kill":
var __kill = ls_kill[Math.floor(Math.random() * ls_kill.length)];
_Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[ EMOTIONS ]: gif",
_query: req.query.q,
_url: __kill,
},
];
logger.info(_Found);
res.send(_Found);
break;
case "highfive":
var __highfive =
ls_highfive[Math.floor(Math.random() * ls_highfive.length)];
_Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[ EMOTIONS ]: gif",
_query: req.query.q,
_url: __highfive,
},
];
logger.info(_Found);
res.send(_Found);
break;
case "wave":
var __wave = ls_wave[Math.floor(Math.random() * ls_wave.length)];
_Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[ EMOTIONS ]: gif",
_query: req.query.q,
_url: __wave,
},
];
logger.info(_Found);
res.send(_Found);
break;
case "cry":
var __cry = ls_cry[Math.floor(Math.random() * ls_cry.length)];
_Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[ EMOTIONS ]: gif",
_query: req.query.q,
_url: __cry,
},
];
logger.info(_Found);
res.send(_Found);
break;
case "smile":
var __smile = ls_smile[Math.floor(Math.random() * ls_smile.length)];
_Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[ EMOTIONS ]: gif",
_query: req.query.q,
_url: __smile,
},
];
logger.info(_Found);
res.send(_Found);
break;
case "punch":
var __punch = ls_punch[Math.floor(Math.random() * ls_punch.length)];
_Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[ EMOTIONS ]: gif",
_query: req.query.q,
_url: __punch,
},
];
logger.info(_Found);
res.send(_Found);
break;
case "kick":
var __kick = ls_kick[Math.floor(Math.random() * ls_kick.length)];
_Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[ EMOTIONS ]: gif",
_query: req.query.q,
_url: __kick,
},
];
logger.info(_Found);
res.send(_Found);
break;
case "confused":
var __confused =
ls_confused[Math.floor(Math.random() * ls_confused.length)];
_Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_query: req.query.q,
_url: __confused,
},
];
logger.info(_Found);
res.send(_Found);
break;
case "sad":
var __sad = ls_sad[Math.floor(Math.random() * ls_sad.length)];
_Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_query: req.query.q,
_url: __sad,
},
];
logger.info(_Found);
res.send(_Found);
break;
case "thinking":
var __thinking =
ls_thinking[Math.floor(Math.random() * ls_thinking.length)];
_Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_query: req.query.q,
_url: __thinking,
},
];
logger.info(_Found);
res.send(_Found);
break;
case "yeet":
var __yeet = ls_yeet[Math.floor(Math.random() * ls_yeet.length)];
_Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[ EMOTIONS ]: gif",
_query: req.query.q,
_url: __yeet,
},
];
logger.info(_Found);
res.send(_Found);
break;
case "stare":
var __stare = ls_stare[Math.floor(Math.random() * ls_stare.length)];
_Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[ EMOTIONS ]: gif",
_query: req.query.q,
_url: __stare,
},
];
logger.info(_Found);
res.send(_Found);
break;
case "bored":
var __bored = ls_bored[Math.floor(Math.random() * ls_bored.length)];
_Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[ EMOTIONS ]: gif",
_query: req.query.q,
_url: __bored,
},
];
logger.info(_Found);
res.send(_Found);
break;
case "scream":
var __scream = ls_scream[Math.floor(Math.random() * ls_scream.length)];
_Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[ EMOTIONS ]: gif",
_query: req.query.q,
_url: __scream,
},
];
logger.info(_Found);
res.send(_Found);
break;
case "nervous":
var __nervous =
ls_nervous[Math.floor(Math.random() * ls_nervous.length)];
_Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[ EMOTIONS ]: gif",
_query: req.query.q,
_url: __nervous,
},
];
logger.info(_Found);
res.send(_Found);
break;
case "yes":
var __yes = ls_yes[Math.floor(Math.random() * ls_yes.length)];
_Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[ EMOTIONS ]: gif",
_query: req.query.q,
_url: __yes,
},
];
logger.info(_Found);
res.send(_Found);
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
return res.status(500).json({
status: "error",
message: error.message,
});
}
}
