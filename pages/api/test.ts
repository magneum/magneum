import axios from "axios";
import fetch from "node-fetch";
const unirest = require("unirest");
const request = require("request");
import logger from "../../services";
import { v4 as uuidv4 } from "uuid";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function test(req: NextApiRequest, res: NextApiResponse) {
  // ?q=  is the querry that api/animation takes

  // Method 1 (Axios)
  axios
    .get("https://xhadr-api.vercel.app/api/animation?q=smile")
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  // Method 2 (Request)
  request(
    {
      method: "GET",
      url: "https://xhadr-api.vercel.app/api/animation?q=smile",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
    },
    (error, response) => {
      if (error) console.error(error);
      console.log(response.body);
    }
  );

  // Method 3 (Unirest)
  unirest
    .post("https://xhadr-api.vercel.app/api/animation?q=smile")
    .headers({ Accept: "application/json", "Content-Type": "application/json" })
    .then((response) => {
      console.log(response.body);
    });
}
