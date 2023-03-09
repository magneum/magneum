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
    let _video = request.query.video as string;
    logger.info(request.query);
    resp.setHeader(
      "Content-disposition",
      contentDisposition(`magneum-audio-${_title}.mp4`)
    );
    FFmpeg()
      .setFfmpegPath(FFmpegPath)
      .setFfprobePath(FFmpegProbe)
      .addInput(_video)
      .addInput(_audio)
      .outputOptions(["-map 0:v", "-map 1:a", "-shortest", "-c:v copy"])
      .videoCodec("libx264")
      .withAudioCodec("aac")
      .format("mp4")
      .outputOptions(["-movflags", "frag_keyframe + empty_moov"])
      .on("error", (e) => logger.error("ERROR: " + e.message))
      .on("end", () => logger.info("INFO: stream sent to client successfully."))
      .output(resp, { end: true })
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
