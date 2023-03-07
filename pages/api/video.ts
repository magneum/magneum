import FFmpeg from "fluent-ffmpeg";
import contentDisposition from "content-disposition";
var FFmpegPath = require("@ffmpeg-installer/ffmpeg").path;
var FFmpegProbe = require("@ffprobe-installer/ffprobe").path;

export default async function search(request: any, response: any) {
try {
let _title = request.query.title as string;
let _audio = request.query.audio as string;
let _video = request.query.video as string;
console.log(request.query);
response.setHeader(
"Content-disposition",
contentDisposition(`premiumdl-audio-${_title}.mp4`)
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
.on("error", (e) => console.error("ERROR: " + e.message))
.on("end", () => console.log("INFO: stream sent to client successfully."))
.output(response, { end: true })
.run();
} catch (error: any) {
console.log(error);
return response.status(500).json({
status: "error",
message: error.mesage,
});
}
}
