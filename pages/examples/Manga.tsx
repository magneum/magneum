"use client";
import { CopyBlock, nord } from "react-code-blocks";
const code_req = `// ?q=  is the querry that api/manga takes

// Method 1 (Axios)
const axios = require("axios");
/** @type {import axios from "axios"} */
axios.get("https://magneum.vercel.app/api/manga?q=death note")
.then(function (response) {
console.log(response.data);
})
.catch(function (error) {
console.error(error);
});`;
const code_axo = `// ?q=  is the querry that api/manga takes

// Method 2 (Request)
const request = require("request");
request({
method: "GET",
url: "https://magneum.vercel.app/api/manga?q=death note",
headers: {
Accept: "application/json",
"Content-Type": "application/json",
},
},
(error, response) => {
if (error) console.error(error);
console.log(response.body);
});`;
const code_uni = `// ?q=  is the querry that api/manga takes

// Method 3 (Unirest)
const unirest = require("unirest");
unirest.post("https://magneum.vercel.app/api/manga?q=death note")
.headers({ Accept: "application/json", "Content-Type": "application/json" })
.then((response) => {
console.log(response.body);
});`;

export default function magneum() {
return (
<section>
<div
tabIndex={0}
className="collapse collapse-plus border-2 border-blue-900 rounded-box "
>
<div className="collapse-title text-xl font-medium text-blue-200 bg-zinc-900">
yarn install axios;
</div>
<div className="collapse-content text-gray-400">
<p>
<CopyBlock text={code_axo} language="typescript" theme={nord} />
</p>
</div>
</div>
<br></br>
<div
tabIndex={0}
className="collapse collapse-plus border-2 border-blue-900 rounded-box "
>
<div className="collapse-title text-xl font-medium text-blue-200 bg-zinc-900">
yarn install request;
</div>
<div className="collapse-content text-gray-400">
<p>
<CopyBlock text={code_req} language="typescript" theme={nord} />
</p>
</div>
</div>
<br></br>
<div
tabIndex={0}
className="collapse collapse-plus border-2 border-blue-900 rounded-box "
>
<div className="collapse-title text-xl font-medium text-blue-200 bg-zinc-900">
yarn install unirest;
</div>
<div className="collapse-content text-gray-400">
<p>
<CopyBlock text={code_uni} language="typescript" theme={nord} />
</p>
</div>
</div>
</section>
);
}
