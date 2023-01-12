import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { CopyBlock, nord } from "react-code-blocks";
const codeSnippet = `// ?q=  is the querry that api/manga takes

// Method 1 (Axios)
axios.get("https://magneum.vercel.app/api/manga?q=My Hero Academia by Kohei Horikoshi")
.then(function (response) {
console.log(response.data);
})
.catch(function (error) {
console.error(error);
});

// Method 2 (Request)
request({
method: "GET",
url: "https://magneum.vercel.app/api/manga?q=My Hero Academia by Kohei Horikoshi",
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
unirest.post("https://magneum.vercel.app/api/manga?q=My Hero Academia by Kohei Horikoshi")
.headers({ Accept: "application/json", "Content-Type": "application/json" })
.then((response) => {
console.log(response.body);
});`;

export default function magneum() {
  return (
    <div>
      Use this module to get all information about any manga from myanimelist.
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
            <span className="italic text-blue-300">/api/manga?q=</span>
            <br></br>
            example: /api/manga?q=
            <span className="italic text-blue-300">
              My Hero Academia by Kohei Horikoshi
            </span>
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