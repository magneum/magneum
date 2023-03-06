import FFmpeg from "fluent-ffmpeg";
import contentDisposition from "content-disposition";
var FFmpegPath = require("@ffmpeg-installer/ffmpeg").path;
var FFmpegProbe = require("@ffprobe-installer/ffprobe").path;

export default async function search(request: any, response: any) {
try {
let _title = request.query.title as string;
let _audio = request.query.audio as string;
response.setHeader(
"Content-disposition",
contentDisposition(`premiumdl-audio-${_title}.mp4`)
);
FFmpeg(_audio)
.setFfmpegPath(FFmpegPath)
.setFfprobePath(FFmpegProbe)
.format("mp3")
.output(response, { end: true })
.on("error", (error: any) => console.error("ERROR: " + error.message))
.on("end", () => console.log("INFO: stream sent to client successfully."))
.run();
} catch (error: any) {
console.log(error);
return response.status(500).json({
status: "error",
message: error.mesage,
});
}
}
