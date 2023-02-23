import FFmpeg from "fluent-ffmpeg";
var fetch = require("isomorphic-unfetch");
import contentDisposition from "content-disposition";
var { getDetails } = require("spotify-url-info")(fetch);
var FFmpegPath = require("@ffmpeg-installer/ffmpeg").path;
var FFmpegProbe = require("@ffprobe-installer/ffprobe").path;

export default async function search(request: any, response: any) {
try {
let url = request.query.url as string;
getDetails(url, {
headers: {
"user-agent": "googlebot",
},
}).then((_data: any) => {
console.log(_data);
response.setHeader(
"Content-disposition",
contentDisposition(`premiumdl-spotify_audio-${_data.preview.title}.mp3`)
);
FFmpeg(_data.preview.audio)
.setFfmpegPath(FFmpegPath)
.setFfprobePath(FFmpegProbe)
.format("mp3")
.output(response, { end: true })
.on("error", (error: any) => console.error("ERROR: " + error.message))
.on("end", () =>
console.log("INFO: stream sent to client successfully.")
)
.run();
});
} catch (error: any) {
console.log(error);
return response.status(500).json({
status: "error",
message: error.mesage,
});
}
}