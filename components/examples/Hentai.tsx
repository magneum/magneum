import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { CopyBlock, nord } from "react-code-blocks";
const codeSnippet = `// ?q=  is the querry that api/hentai takes

// Method 1 (Axios)
const axios = require("axios");
/** @type {import axios from "axios"} */
axios.get("https://magneum.vercel.app/api/hentai?q=ass")
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
url: "https://magneum.vercel.app/api/hentai?q=ass",
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
const unirest = require("unirest");
unirest.post("https://magneum.vercel.app/api/hentai?q=ass")
.headers({ Accept: "application/json", "Content-Type": "application/json" })
.then((response) => {
console.log(response.body);
});`;

export default function magneum() {
  return (
    <div>
      Use all below available hentai endpoints to get .gif .png & .jpeg links.
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
            /api/hentai?q=
            <span className="italic text-blue-300">ass</span>
            <br></br>
            /api/hentai?q=
            <span className="italic text-blue-300">bdsm</span>
            <br></br>
            /api/hentai?q=
            <span className="italic text-blue-300">blowjob</span>
            <br></br>
            /api/hentai?q=
            <span className="italic text-blue-300">cum</span>
            <br></br>
            /api/hentai?q=
            <span className="italic text-blue-300">doujin</span>
            <br></br>
            /api/hentai?q=
            <span className="italic text-blue-300">feet</span>
            <br></br>
            /api/hentai?q=
            <span className="italic text-blue-300">femdom</span>
            <br></br>
            /api/hentai?q=
            <span className="italic text-blue-300">foxgirl</span>
            <br></br>
            /api/hentai?q=
            <span className="italic text-blue-300">glasses</span>
            <br></br>
            /api/hentai?q=
            <span className="italic text-blue-300">hentai</span>
            <br></br>
            /api/hentai?q=
            <span className="italic text-blue-300">netorare</span>
            <br></br>
            /api/hentai?q=
            <span className="italic text-blue-300">maid</span>
            <br></br>
            /api/hentai?q=
            <span className="italic text-blue-300">masturbation</span>
            <br></br>
            /api/hentai?q=
            <span className="italic text-blue-300">orgy</span>
            <br></br>
            /api/hentai?q=
            <span className="italic text-blue-300">panties</span>
            <br></br>
            /api/hentai?q=
            <span className="italic text-blue-300">pussy</span>
            <br></br>
            /api/hentai?q=
            <span className="italic text-blue-300">school</span>
            <br></br>
            /api/hentai?q=
            <span className="italic text-blue-300">succubus</span>
            <br></br>
            /api/hentai?q=
            <span className="italic text-blue-300">tentacles</span>
            <br></br>
            /api/hentai?q=
            <span className="italic text-blue-300">thighs</span>
            <br></br>
            /api/hentai?q=
            <span className="italic text-blue-300">uglyBastard</span>
            <br></br>
            /api/hentai?q=
            <span className="italic text-blue-300">uniform</span>
            <br></br>
            /api/hentai?q=
            <span className="italic text-blue-300">yuri</span>
            <br></br>
            /api/hentai?q=
            <span className="italic text-blue-300">zettaiRyouiki</span>
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
