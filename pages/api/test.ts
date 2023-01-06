import axios from "axios";
import fetch from "node-fetch";
import logger from "../../services";
import { v4 as uuidv4 } from "uuid";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function test(req: NextApiRequest, res: NextApiResponse) {
  axios
    .get("https://xhadr-api.vercel.app/api/animation?q=smile")
    .then(function (response) {
      logger.log(response.data);
    })
    .catch(function (error) {
      logger.error(error);
    });
}
