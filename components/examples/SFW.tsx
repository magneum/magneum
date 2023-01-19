import { CopyBlock, nord } from "react-code-blocks";
const code_1 = `// ?q=  is the querry that api/sfw takes

// Method 3 (Unirest)
const unirest = require("unirest");
unirest.post("https://magneum.vercel.app/api/sfw?q=waifu")
.headers({ accept: "application/json", "Content-Type": "application/json" })
.then((response) => {
console.log(response.body);
});`;
const code_2 = `// ?q=  is the querry that api/sfw takes

// Method 2 (Request)
const request = require("request");
request({
method: "GET",
url: "https://magneum.vercel.app/api/sfw?q=waifu",
headers: {
accept: "application/json",
"Content-Type": "application/json",
},
},
(error, response) => {
if (error) console.error(error);
console.log(response.body);
});`;
const code_3 = `// ?q=  is the querry that api/sfw takes

// Method 3 (Unirest)
const unirest = require("unirest");
unirest.post("https://magneum.vercel.app/api/sfw?q=waifu")
.headers({ accept: "application/json", "Content-Type": "application/json" })
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
            <CopyBlock text={code_1} language="typescript" theme={nord} />
          </p>
        </div>
      </div>{" "}
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
            <CopyBlock text={code_2} language="typescript" theme={nord} />
          </p>
        </div>
      </div>{" "}
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
            <CopyBlock text={code_3} language="typescript" theme={nord} />
          </p>
        </div>
      </div>
    </section>
  );
}
