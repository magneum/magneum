import { CopyBlock, nord } from "react-code-blocks";
const codeSnippet = `// ?q=  is the querry that api/youtube_dl takes

// Method 1 (Axios)
const axios = require("axios");
/** @type {import axios from "axios"} */
axios.get("https://magneum.vercel.app/api/youtube_dl?q=ncs 2min song&quality=1080p")
.then(function (response) {
console.log(response.data);
})
.catch(function (error) {
console.error(error);
});

// Method 2 (Request)
const request = require("request");
request({
method: "GET",
url: "https://magneum.vercel.app/api/youtube_dl?q=ncs 2min song&quality=1080p",
headers: {
Accept: "application/json",
"Content-Type": "application/json",
},
},
(error, response) => {
if (error) console.error(error);
console.log(response.body);
});
  
// Method 3 (Unirest)
const unirest = require("unirest");
unirest.post("https://magneum.vercel.app/api/youtube_dl?q=ncs 2min song&quality=1080p")
.headers({ Accept: "application/json", "Content-Type": "application/json" })
.then((response) => {
console.log(response.body);
});`;

export default function magneum() {
  return (
    <div>
      Use this module to get youtube direct audio & video download links.
      <br></br>
      <br></br>
      <div
        tabIndex={0}
        className="collapse collapse-plus border-2 border-blue-900 rounded-box "
      >
        <div className="collapse-title text-xl font-medium text-blue-200 bg-zinc-900">
          view components
        </div>
        <div className="collapse-content text-gray-400">
          <p>
            endpoint:{" "}
            <span className="italic text-blue-300">/api/youtube_dl?q=</span>
            <br></br>
            example: /api/youtube_dl?q=
            <span className="italic text-blue-300">ncs music 5 minutes</span>
            &quality=1080p<br></br>
            example: /api/youtube_dl?q=
            <span className="italic text-blue-300">
              https://youtu.be/3gxus8LnMfI
            </span>
            &quality=1080p<br></br>
          </p>
          <br></br>
          <p>
            <span className="italic text-blue-400 uppercase">QUALITY</span>
            <br></br>
            &quality=<span className="italic text-blue-300">1080p</span>
            <br></br>
            &quality=<span className="italic text-blue-300">720p</span>
            <br></br>
            &quality=<span className="italic text-blue-300">480p</span>
            <br></br>
            &quality=<span className="italic text-blue-300">360p</span>
            <br></br>
            &quality=<span className="italic text-blue-300">240p</span>
            <br></br>
            (audio) &quality=
            <span className="italic text-blue-300">128kbps</span>
            <br></br>
          </p>
        </div>
      </div>
      <br></br>
      <div
        tabIndex={0}
        className="collapse collapse-plus border-2 border-blue-900 rounded-box "
      >
        <div className="collapse-title text-xl font-medium text-blue-200 bg-zinc-900">
          code example :)
        </div>
        <div className="collapse-content text-gray-400">
          <p>
            <CopyBlock text={codeSnippet} language="typescript" theme={nord} />
          </p>
        </div>
      </div>
    </div>
  );
}
