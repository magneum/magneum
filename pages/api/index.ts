import axios from "axios";
import fetch from "node-fetch";
const unirest = require("unirest");
const request = require("request");
import logger from "../../services";
import { v4 as uuidv4 } from "uuid";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function test(req: NextApiRequest, res: NextApiResponse) {
  return res.redirect(
    "https://magneum-vercel-app.translate.goog/application?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=en-US&_x_tr_pto=wapp"
  );
}
