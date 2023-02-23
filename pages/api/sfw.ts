import moment from "moment";
import logger from "../../services";
import { v4 as uuidv4 } from "uuid";
import type { NextApiRequest, NextApiResponse } from "next";

// Local Storage For imports of all local.jsons
import ls_awoo from "../../src/sfw/awoo.json";
import ls_bite from "../../src/sfw/bite.json";
import ls_blush from "../../src/sfw/blush.json";
import ls_bonk from "../../src/sfw/bonk.json";
import ls_bully from "../../src/sfw/bully.json";
import ls_cringe from "../../src/sfw/cringe.json";
import ls_cry from "../../src/sfw/cry.json";
import ls_cuddle from "../../src/sfw/cuddle.json";
import ls_dance from "../../src/sfw/dance.json";
import ls_glomp from "../../src/sfw/glomp.json";
import ls_handhold from "../../src/sfw/handhold.json";
import ls_happy from "../../src/sfw/happy.json";
import ls_highfive from "../../src/sfw/highfive.json";
import ls_hug from "../../src/sfw/hug.json";
import ls_kick from "../../src/sfw/kick.json";
import ls_kill from "../../src/sfw/kill.json";
import ls_kiss from "../../src/sfw/kiss.json";
import ls_lick from "../../src/sfw/lick.json";
import ls_megumin from "../../src/sfw/megumin.json";
import ls_neko from "../../src/sfw/neko.json";
import ls_nom from "../../src/sfw/nom.json";
import ls_pat from "../../src/sfw/pat.json";
import ls_poke from "../../src/sfw/poke.json";
import ls_shinobu from "../../src/sfw/shinobu.json";
import ls_slap from "../../src/sfw/slap.json";
import ls_smile from "../../src/sfw/smile.json";
import ls_smug from "../../src/sfw/smug.json";
import ls_waifu from "../../src/sfw/waifu.json";
import ls_wave from "../../src/sfw/wave.json";
import ls_wink from "../../src/sfw/wink.json";
import ls_yeet from "../../src/sfw/yeet.json";

let _Found: any;
export default async function test(req: NextApiRequest, res: NextApiResponse) {
try {
if (req.query.q) {
switch (req.query.q) {
case "waifu":
var __waifu = ls_waifu[Math.floor(Math.random() * ls_waifu.length)];
_Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[ SFW IMAGES ]: yeet",
_query: req.query.q,
_url: __waifu,
},
];
logger.info(_Found);
res.send(_Found);
break;
case "neko":
var __neko = ls_neko[Math.floor(Math.random() * ls_neko.length)];
_Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[ SFW IMAGES ]: neko",
_query: req.query.q,
_url: __neko,
},
];
logger.info(_Found);
res.send(_Found);
break;
case "shinobu":
var __shinobu =
ls_shinobu[Math.floor(Math.random() * ls_shinobu.length)];
_Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[ SFW IMAGES ]: shinobu",
_query: req.query.q,
_url: __shinobu,
},
];
logger.info(_Found);
res.send(_Found);
break;
case "megumin":
var __megumin =
ls_megumin[Math.floor(Math.random() * ls_megumin.length)];
_Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[ SFW IMAGES ]: megumin",
_query: req.query.q,
_url: __megumin,
},
];
logger.info(_Found);
res.send(_Found);
break;
case "bully":
var __bully = ls_bully[Math.floor(Math.random() * ls_bully.length)];
_Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[ SFW IMAGES ]: bully",
_query: req.query.q,
_url: __bully,
},
];
logger.info(_Found);
res.send(_Found);
break;
case "cuddle":
var __cuddle =
ls_cuddle[Math.floor(Math.random() * ls_cuddle.length)];
_Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[ SFW IMAGES ]: cuddle",
_query: req.query.q,
_url: __cuddle,
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
_topic: "[ SFW IMAGES ]: cry",
_query: req.query.q,
_url: __cry,
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
_topic: "[ SFW IMAGES ]: hug",
_query: req.query.q,
_url: __hug,
},
];
logger.info(_Found);
res.send(_Found);
break;
case "awoo":
var __awoo = ls_awoo[Math.floor(Math.random() * ls_awoo.length)];
_Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[ SFW IMAGES ]: awoo",
_query: req.query.q,
_url: __awoo,
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
_topic: "[ SFW IMAGES ]: kiss",
_query: req.query.q,
_url: __kiss,
},
];
logger.info(_Found);
res.send(_Found);
break;
case "lick":
var __lick = ls_lick[Math.floor(Math.random() * ls_lick.length)];
_Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[ SFW IMAGES ]: lick",
_query: req.query.q,
_url: __lick,
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
_topic: "[ SFW IMAGES ]: yeet",
_query: req.query.q,
_url: __pat,
},
];
logger.info(_Found);
res.send(_Found);
break;
case "smug":
var __smug = ls_smug[Math.floor(Math.random() * ls_smug.length)];
_Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[ SFW IMAGES ]: smug",
_query: req.query.q,
_url: __smug,
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
_topic: "[ SFW IMAGES ]: bonk",
_query: req.query.q,
_url: __bonk,
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
_topic: "[ SFW IMAGES ]: yeet",
_query: req.query.q,
_url: __yeet,
},
];
logger.info(_Found);
res.send(_Found);
break;
case "blush":
var __blush = ls_blush[Math.floor(Math.random() * ls_blush.length)];
_Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[ SFW IMAGES ]: blush",
_query: req.query.q,
_url: __blush,
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
_topic: "[ SFW IMAGES ]: smile",
_query: req.query.q,
_url: __smile,
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
_topic: "[ SFW IMAGES ]: wave",
_query: req.query.q,
_url: __wave,
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
_topic: "[ SFW IMAGES ]: highfive",
_query: req.query.q,
_url: __highfive,
},
];
logger.info(_Found);
res.send(_Found);
break;
case "handhold":
var __handhold =
ls_handhold[Math.floor(Math.random() * ls_handhold.length)];
_Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[ SFW IMAGES ]: handhold",
_query: req.query.q,
_url: __handhold,
},
];
logger.info(_Found);
res.send(_Found);
break;
case "nom":
var __nom = ls_nom[Math.floor(Math.random() * ls_nom.length)];
_Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[ SFW IMAGES ]: nom",
_query: req.query.q,
_url: __nom,
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
_topic: "[ SFW IMAGES ]: bite",
_query: req.query.q,
_url: __bite,
},
];
logger.info(_Found);
res.send(_Found);
break;
case "glomp":
var __glomp = ls_glomp[Math.floor(Math.random() * ls_glomp.length)];
_Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[ SFW IMAGES ]: glomp",
_query: req.query.q,
_url: __glomp,
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
_topic: "[ SFW IMAGES ]: slap",
_query: req.query.q,
_url: __slap,
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
_topic: "[ SFW IMAGES ]: kill",
_query: req.query.q,
_url: __kill,
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
_topic: "[ SFW IMAGES ]: kick",
_query: req.query.q,
_url: __kick,
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
_topic: "[ SFW IMAGES ]: happy",
_query: req.query.q,
_url: __happy,
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
_topic: "[ SFW IMAGES ]: wink",
_query: req.query.q,
_url: __wink,
},
];
logger.info(_Found);
res.send(_Found);
break;
case "poke":
var __poke = ls_poke[Math.floor(Math.random() * ls_poke.length)];
_Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[ SFW IMAGES ]: poke",
_query: req.query.q,
_url: __poke,
},
];
logger.info(_Found);
res.send(_Found);
break;
case "dance":
var __dance = ls_dance[Math.floor(Math.random() * ls_dance.length)];
_Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[ SFW IMAGES ]: dance",
_query: req.query.q,
_url: __dance,
},
];
logger.info(_Found);
res.send(_Found);
break;
case "cringe":
var __cringe =
ls_cringe[Math.floor(Math.random() * ls_cringe.length)];
_Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "[ SFW IMAGES ]: cringe",
_query: req.query.q,
_url: __cringe,
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
_api_link: "/api/sfw?q=",
_example: "/api/sfw?q=waifu",
_querry: [
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
} else {
return res.send({
_status: "Failed with error code 911",
_message: "Parameters requirement not met.",
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_usage: {
_api_link: "/api/sfw?q=",
_example: "/api/sfw?q=waifu",
_querry: [
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
}
} catch (error: any) {
return res.status(500).json({
status: "error",
message: error.message,
});
}
}
