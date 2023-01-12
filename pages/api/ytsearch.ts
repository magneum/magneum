const y2 = require("y2mate-api");
import logger from "../../services";
import { v4 as uuidv4 } from "uuid";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function test(req: NextApiRequest, res: NextApiResponse) {
  if (req.query.q) {
    const data = await y2.GetVideo("https://youtube.com/watch?v=5efrC3vLH_U");
    console.log(data);
    return res.send(data);
  } else {
    return res.send({
      message:
        "[ ERROR ]: Usage (/youtube?q=song name) or (/youtube?q=https://youtube.com)",
    });
  }
}
