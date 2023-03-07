import moment from "moment";
import logger from "../../log";
import { v4 as uuidv4 } from "uuid";
import type { NextApiRequest, NextApiResponse } from "next";

// Local Storage For imports of all local.jsons
import ls_ass from "../../lib/hentai/ass.json";
import ls_cum from "../../lib/hentai/cum.json";
import ls_bdsm from "../../lib/hentai/bdsm.json";
import ls_feet from "../../lib/hentai/feet.json";
import ls_maid from "../../lib/hentai/maid.json";
import ls_orgy from "../../lib/hentai/orgy.json";
import ls_yuri from "../../lib/hentai/yuri.json";
import ls_pussy from "../../lib/hentai/pussy.json";
import ls_hentai from "../../lib/hentai/hentai.json";
import ls_doujin from "../../lib/hentai/doujin.json";
import ls_femdom from "../../lib/hentai/femdom.json";
import ls_thighs from "../../lib/hentai/thighs.json";
import ls_school from "../../lib/hentai/school.json";
import ls_blowjob from "../../lib/hentai/blowjob.json";
import ls_foxgirl from "../../lib/hentai/foxgirl.json";
import ls_panties from "../../lib/hentai/panties.json";
import ls_uniform from "../../lib/hentai/uniform.json";
import ls_succubus from "../../lib/hentai/succubus.json";
import ls_netorare from "../../lib/hentai/netorare.json";
import ls_tentacles from "../../lib/hentai/tentacles.json";
import ls_uglyBastard from "../../lib/hentai/uglyBastard.json";
import ls_masturbation from "../../lib/hentai/masturbation.json";

let _Found: any;
export default async function animation(
req: NextApiRequest,
res: NextApiResponse
) {
try {
switch (req.query.q) {
case "ass":
var __ass = ls_ass[Math.floor(Math.random() * ls_ass.length)];
_Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "Hentai (image)",
_description: "I know you like anime ass~ uwu",
_query: req.query.q,
_url: __ass,
},
];
logger.info(_Found);
res.send(_Found);
break;
case "bdsm":
var __bdsm = ls_bdsm[Math.floor(Math.random() * ls_bdsm.length)];
_Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "Hentai (image)",
_description: "If you don't know what it is, search it up",
_query: req.query.q,
_url: __bdsm,
},
];
logger.info(_Found);
res.send(_Found);
break;
case "blowjob":
var __blowjob =
ls_blowjob[Math.floor(Math.random() * ls_blowjob.length)];
_Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "Hentai (image)",
_description:
"Basically an image of a girl sucking on a sharp blade!",
_query: req.query.q,
_url: __blowjob,
},
];
logger.info(_Found);
res.send(_Found);
break;
case "cum":
var __cum = ls_cum[Math.floor(Math.random() * ls_cum.length)];
_Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "Hentai (image)",
_description:
"Basically sticky white stuff that is usually milked from sharpies.",
_query: req.query.q,
_url: __cum,
},
];
logger.info(_Found);
res.send(_Found);
break;
case "doujin":
var __doujin = ls_doujin[Math.floor(Math.random() * ls_doujin.length)];
_Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "Hentai (image)",
_description: "Sends a random doujin page imageURL!",
_query: req.query.q,
_url: __doujin,
},
];
logger.info(_Found);
res.send(_Found);
break;
case "feet":
var __feet = ls_feet[Math.floor(Math.random() * ls_feet.length)];
_Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "Hentai (image)",
_description: "So you like smelly feet huh?",
_query: req.query.q,
_url: __feet,
},
];
logger.info(_Found);
res.send(_Found);
break;
case "femdom":
var __femdom = ls_femdom[Math.floor(Math.random() * ls_femdom.length)];
_Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "Hentai (image)",
_description: "Female Domination over you",
_query: req.query.q,
_url: __femdom,
},
];
logger.info(_Found);
res.send(_Found);
break;
case "foxgirl":
var __foxgirl =
ls_foxgirl[Math.floor(Math.random() * ls_foxgirl.length)];
_Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "Hentai (image)",
_description: "Girl's that are wannabe foxes, yes",
_query: req.query.q,
_url: __foxgirl,
},
];
logger.info(_Found);
res.send(_Found);
break;
case "netorare":
var __netorare =
ls_netorare[Math.floor(Math.random() * ls_netorare.length)];
_Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "Hentai (image)",
_description: "Wow, I won't even question your fetishes.",
_query: req.query.q,
_url: __netorare,
},
];
logger.info(_Found);
res.send(_Found);
break;
case "maid":
var __maid = ls_maid[Math.floor(Math.random() * ls_maid.length)];
_Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "Hentai (image)",
_description:
"Maids, Maid Uniforms, etc, you know what maids are :3",
_query: req.query.q,
_url: __maid,
},
];
logger.info(_Found);
res.send(_Found);
break;
case "masturbation":
var __masturbation =
ls_masturbation[Math.floor(Math.random() * ls_masturbation.length)];
_Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "Hentai (image)",
_description: "The power of solo queue",
_query: req.query.q,
_url: __masturbation,
},
];
logger.info(_Found);
res.send(_Found);
break;
case "orgy":
var __orgy = ls_orgy[Math.floor(Math.random() * ls_orgy.length)];
_Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "Hentai (image)",
_description: "Group Lewd Acts",
_query: req.query.q,
_url: __orgy,
},
];
logger.info(_Found);
res.send(_Found);
break;
case "panties":
var __panties =
ls_panties[Math.floor(Math.random() * ls_panties.length)];
_Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "Hentai (image)",
_description: "I mean... just why? You like underwear?",
_query: req.query.q,
_url: __panties,
},
];
logger.info(_Found);
res.send(_Found);
break;
case "pussy":
var __pussy = ls_pussy[Math.floor(Math.random() * ls_pussy.length)];
_Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "Hentai (image)",
_description: "School Uniforms!~ Yatta~!",
_query: req.query.q,
_url: __pussy,
},
];
logger.info(_Found);
res.send(_Found);
break;
case "school":
var __school = ls_school[Math.floor(Math.random() * ls_school.length)];
_Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "Hentai (image)",
_description: "School Uniforms!~ Yatta~!",
_query: req.query.q,
_url: __school,
},
];
logger.info(_Found);
res.send(_Found);
break;
case "succubus":
var __succubus =
ls_succubus[Math.floor(Math.random() * ls_succubus.length)];
_Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "Hentai (image)",
_description:
"Spooky Succubus, oh I'm so scared~ Totally don't suck me~",
_query: req.query.q,
_url: __succubus,
},
];
logger.info(_Found);
res.send(_Found);
break;
case "tentacles":
var __tentacles =
ls_tentacles[Math.floor(Math.random() * ls_tentacles.length)];
_Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "Hentai (image)",
_description: "I'm sorry but, why do they look like intestines?",
_query: req.query.q,
_url: __tentacles,
},
];
logger.info(_Found);
res.send(_Found);
break;
case "thighs":
var __thighs = ls_thighs[Math.floor(Math.random() * ls_thighs.length)];
_Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "Hentai (image)",
_description: "The top part of your legs, very hot, isn't it?",
_query: req.query.q,
_url: __thighs,
},
];
logger.info(_Found);
res.send(_Found);
break;
case "uglyBastard":
var __uglyBastard =
ls_uglyBastard[Math.floor(Math.random() * ls_uglyBastard.length)];
_Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "Hentai (image)",
_description: "The one thing most of us can all agree to hate :)",
_query: req.query.q,
_url: __uglyBastard,
},
];
logger.info(_Found);
res.send(_Found);
break;
case "uniform":
var __uniform =
ls_uniform[Math.floor(Math.random() * ls_uniform.length)];
_Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "Hentai (image)",
_description:
"Military, Konbini, Work, Nurse Uniforms, etc!~ Sexy~",
_query: req.query.q,
_url: __uniform,
},
];
logger.info(_Found);
res.send(_Found);
break;
case "yuri":
var __yuri = ls_yuri[Math.floor(Math.random() * ls_yuri.length)];
_Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "Hentai (image)",
_description: "yuri | Girls on Girls, and Girl's only!<3",
_query: req.query.q,
_url: __yuri,
},
];
logger.info(_Found);
res.send(_Found);
break;
case "hentai":
var __hentai = ls_hentai[Math.floor(Math.random() * ls_hentai.length)];
_Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "Hentai (image)",
_description: "Random hentai...",
_query: req.query.q,
_url: __hentai,
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
return res.status(500).json({
status: "error",
message: error.message,
});
}
}
