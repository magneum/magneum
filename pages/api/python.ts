import logger from "@/log";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function test(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.query.q) {
      let argument = req.query.q as any;
      if (
        argument.includes("install") ||
        argument.includes("sudo") ||
        argument.includes("pip3") ||
        argument.includes("pip") ||
        argument.includes("su")
      ) {
        return res.status(500).json({
          id: uuidv4(),
          status: false,
          timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
          message: "Can't use admin commands: [install, sudo, pip, su, i]",
        });
      } else
        require("child_process").exec(
          "python3 " + argument,
          async (error: any, stdout: any) => {
            if (error) {
              logger.error(error.message);
              return res.status(500).json({
                id: uuidv4(),
                status: false,
                timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
                message: error.message,
              });
            } else {
              res.status(200).json({
                resp: {
                  id: uuidv4(),
                  status: true,
                  timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
                },
                meta: {
                  topic: "PYTHON: .py execution",
                  query: argument,
                  output: stdout,
                },
              });
            }
          }
        );
    } else
      return res.status(500).json({
        id: uuidv4(),
        status: false,
        message: "Arguments not satisfied.",
        timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
        usage: {
          endpoint: "/api/wallpaper?q=",
          example: ["/api/wallpaper?q=dog"],
        },
      });
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
