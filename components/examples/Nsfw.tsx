import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { CopyBlock, nord } from "react-code-blocks";
const codeSnippet = `// ?q=  is the querry that api/nsfw takes

// Method 1 (Axios)
const axios = require("axios");
// import axios from "axios"; while using @types
axios.get("https://magneum.vercel.app/api/nsfw?q=bonermaterial")
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
url: "https://magneum.vercel.app/api/nsfw?q=bonermaterial",
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
unirest.post("https://magneum.vercel.app/api/nsfw?q=bonermaterial")
.headers({ Accept: "application/json", "Content-Type": "application/json" })
.then((response) => {
console.log(response.body);
});`;

export default function magneum() {
  return (
    <div>
      Use all below available nsfw endpoints to get .gif .mp4 .png & .jpeg
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
            /api/nsfw?q=
            <span className="italic text-blue-300">nsfw</span>
            <br></br>
            /api/nsfw?q=
            <span className="italic text-blue-300">nsfw2</span>
            <br></br>
            /api/nsfw?q=
            <span className="italic text-blue-300">bonermaterial</span>
            <br></br>
            /api/nsfw?q=
            <span className="italic text-blue-300">nsfw411</span>
            <br></br>
            /api/nsfw?q=
            <span className="italic text-blue-300">iwanttofuckher</span>
            <br></br>
            /api/nsfw?q=
            <span className="italic text-blue-300">exxxtras</span>
            <br></br>
            /api/nsfw?q=
            <span className="italic text-blue-300">distension</span>
            <br></br>
            /api/nsfw?q=
            <span className="italic text-blue-300">bimbofetish</span>
            <br></br>
            /api/nsfw?q=
            <span className="italic text-blue-300">christiangirls</span>
            <br></br>
            /api/nsfw?q=
            <span className="italic text-blue-300">dirtygaming</span>
            <br></br>
            /api/nsfw?q=
            <span className="italic text-blue-300">sexybutnotporn</span>
            <br></br>
            /api/nsfw?q=
            <span className="italic text-blue-300">femalepov</span>
            <br></br>
            /api/nsfw?q=
            <span className="italic text-blue-300">omgbeckylookathiscock</span>
            <br></br>
            /api/nsfw?q=
            <span className="italic text-blue-300">sexygirls</span>
            <br></br>
            /api/nsfw?q=
            <span className="italic text-blue-300">breedingmaterial</span>
            <br></br>
            /api/nsfw?q=
            <span className="italic text-blue-300">canthold</span>
            <br></br>
            /api/nsfw?q=
            <span className="italic text-blue-300">toocuteforporn</span>
            <br></br>
            /api/nsfw?q=
            <span className="italic text-blue-300">justhotwomen</span>
            <br></br>
            /api/nsfw?q=
            <span className="italic text-blue-300">stripgirls</span>
            <br></br>
            /api/nsfw?q=
            <span className="italic text-blue-300">hotstuffnsfw</span>
            <br></br>
            /api/nsfw?q=
            <span className="italic text-blue-300">uncommonposes</span>
            <br></br>
            /api/nsfw?q=
            <span className="italic text-blue-300">gifsofremoval</span>
            <br></br>
            /api/nsfw?q=
            <span className="italic text-blue-300">nostalgiafapping</span>
            <br></br>
            /api/nsfw?q=
            <span className="italic text-blue-300">truefmk</span>
            <br></br>
            /api/nsfw?q=
            <span className="italic text-blue-300">nudes</span>
            <br></br>
            /api/nsfw?q=
            <span className="italic text-blue-300">4k</span>
            <br></br>
            /api/nsfw?q=
            <span className="italic text-blue-300">realgirls</span>
            <br></br>
            /api/nsfw?q=
            <span className="italic text-blue-300">blowjobs</span>
            <br></br>
            /api/nsfw?q=
            <span className="italic text-blue-300">milf</span>
            <br></br>
            /api/nsfw?q=
            <span className="italic text-blue-300">milk</span>
            <br></br>
            /api/nsfw?q=
            <span className="italic text-blue-300">milking</span>
            <br></br>
            /api/nsfw?q=
            <span className="italic text-blue-300">lactating</span>
            <br></br>
            /api/nsfw?q=
            <span className="italic text-blue-300">pussy</span>
            <br></br>
            /api/nsfw?q=
            <span className="italic text-blue-300">slut</span>
            <br></br>
            /api/nsfw?q=
            <span className="italic text-blue-300">cumslut</span>
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
          get code example
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
