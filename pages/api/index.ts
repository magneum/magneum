import logger from "@/log";
import moment from "moment";
import { uuid as uuidv4 } from "uuidv4";
import type { NextApiRequest, NextApiResponse } from "next";
export default async function test(req: NextApiRequest, res: NextApiResponse) {
  try {
    return res.redirect("/");
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
