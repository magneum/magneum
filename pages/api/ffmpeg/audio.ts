import logger from "@/log";
import moment from "moment";
import FFmpeg from "fluent-ffmpeg";
import { v4 as uuidv4 } from "uuid";
import contentDisposition from "content-disposition";
var FFmpegPath = require("@ffmpeg-installer/ffmpeg").path;
var FFmpegProbe = require("@ffprobe-installer/ffprobe").path;

export default async function search(request: any, resp: any) {
  try {
    let _title = request.query.title as string;
    let _audio = request.query.audio as string;
    resp.setHeader(
      "Content-disposition",
      contentDisposition(`magneum-audio-${_title}.mp4`)
    );
    FFmpeg(_audio)
      .setFfmpegPath(FFmpegPath)
      .setFfprobePath(FFmpegProbe)
      .format("mp3")
      .output(resp, { end: true })
      .on("error", (error: any) => logger.error("ERROR: " + error.message))
      .on("end", () => logger.info("INFO: stream sent to client successfully."))
      .run();
  } catch (error: any) {
    logger.error(error.message);
    return resp.status(500).json({
      id: uuidv4(),
      status: false,
      timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
      message: error.message,
    });
  }
}
