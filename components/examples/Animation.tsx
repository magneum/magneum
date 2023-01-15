import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { CopyBlock, nord } from "react-code-blocks";
const codeSnippet = `// ?q=  is the querry that api/animation takes

// Method 1 (Axios)
const axios = require("axios");
/** @type {import axios from "axios"} */
axios.get("https://magneum-api.vercel.app/api/animation?q=smile")
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
url: "https://magneum-api.vercel.app/api/animation?q=smile",
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
unirest.post("https://magneum-api.vercel.app/api/animation?q=smile")
.headers({ Accept: "application/json", "Content-Type": "application/json" })
.then((response) => {
console.log(response.body);
});`;

export default function magneum() {
  return (
    <div>
      Use all below available animations endpoints to get .gif .png & .jpeg
      links.
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
            /api/animation?q=
            <span className="italic text-blue-300">bite</span>
            <br></br>
            /api/animation?q=
            <span className="italic text-blue-300">blush</span>
            <br></br>
            /api/animation?q=
            <span className="italic text-blue-300">bonk</span>
            <br></br>
            /api/animation?q=
            <span className="italic text-blue-300">bully</span>
            <br></br>
            /api/animation?q=
            <span className="italic text-blue-300">bored</span>
            <br></br>
            /api/animation?q=
            <span className="italic text-blue-300">confused</span>
            <br></br>
            /api/animation?q=
            <span className="italic text-blue-300">cry</span>
            <br></br>
            /api/animation?q=
            <span className="italic text-blue-300">cuddle</span>
            <br></br>
            /api/animation?q=
            <span className="italic text-blue-300">dance</span>
            <br></br>
            /api/animation?q=
            <span className="italic text-blue-300">goodnight</span>
            <br></br>
            /api/animation?q=
            <span className="italic text-blue-300">happy</span>
            <br></br>
            /api/animation?q=
            <span className="italic text-blue-300">highfive</span>
            <br></br>
            /api/animation?q=
            <span className="italic text-blue-300">hug</span>
            <br></br>
            /api/animation?q=
            <span className="italic text-blue-300">kick</span>
            <br></br>
            /api/animation?q=
            <span className="italic text-blue-300">kill</span>
            <br></br>
            /api/animation?q=
            <span className="italic text-blue-300">kiss</span>
            <br></br>
            /api/animation?q=
            <span className="italic text-blue-300">nervous</span>
            <br></br>
            /api/animation?q=
            <span className="italic text-blue-300">pat</span>
            <br></br>
            /api/animation?q=
            <span className="italic text-blue-300">poke</span>
            <br></br>
            /api/animation?q=
            <span className="italic text-blue-300">punch</span>
            <br></br>
            /api/animation?q=
            <span className="italic text-blue-300">sad</span>
            <br></br>
            /api/animation?q=
            <span className="italic text-blue-300">scream</span>
            <br></br>
            /api/animation?q=
            <span className="italic text-blue-300">slap</span>
            <br></br>
            /api/animation?q=
            <span className="italic text-blue-300">smile</span>
            <br></br>
            /api/animation?q=
            <span className="italic text-blue-300">stare</span>
            <br></br>
            /api/animation?q=
            <span className="italic text-blue-300">wave</span>
            <br></br>
            /api/animation?q=
            <span className="italic text-blue-300">wink</span>
            <br></br>
            /api/animation?q=
            <span className="italic text-blue-300">yeet</span>
            <br></br>
            /api/animation?q=
            <span className="italic text-blue-300">yes</span>
            <br></br>
            /api/animation?q=
            <span className="italic text-blue-300">zerotwo</span>
            <br></br>
            /api/animation?q=
            <span className="italic text-blue-300">thinking</span>
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
