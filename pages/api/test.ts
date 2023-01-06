import axios from "axios";
import fetch from "node-fetch";
const unirest = require("unirest");
const request = require("request");
import logger from "../../services";
import { v4 as uuidv4 } from "uuid";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function test(req: NextApiRequest, res: NextApiResponse) {
  // In this example we will be using api/animation endpoint
  // ?q=  is the querry that api/animation takes

  axios
    .get("https://xhadr-api.vercel.app/api/animation?q=smile")
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  request(
    {
      method: "GET",
      url: "https://xhadr-api.vercel.app/api/animation?q=smile",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    },
    (error, response) => {
      if (error) console.error(error);
      console.log(response.body);
    }
  );

  unirest
    .post("https://xhadr-api.vercel.app/api/animation")
    .headers({ Accept: "application/json", "Content-Type": "application/json" })
    .send({ q: "smile" })
    .then((response) => {
      console.log(response.body);
    });
}
