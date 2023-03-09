import got from "got";
import https from "https";
import logger from "@/log";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import type { NextApiRequest, NextApiResponse } from "next";

function shorten(url: any) {
  https.get(
    "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(url),
    (res) => {
      res.on("data", (chunk) => {
        return chunk.toString();
      });
    }
  );
}

export default async function animation(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    let argument = req.query.q as any;
    switch (decodeURI(argument)) {
      case "nsfw":
        await got("https://www.reddit.com/r/nsfw/random.json").then(
          async (Form) => {
            var FF = JSON.parse(Form.body);
            var FFLink = FF[0].data.children[0].data.url;
            if (FFLink) {
              return res.status(200).json({
                resp: {
                  id: uuidv4(),
                  status: true,
                  timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
                },
                meta: {
                  topic: "[NSFW Images]",
                  query: decodeURI(argument),
                  url: shorten(FFLink),
                  domain: FF[0].data.children[0].data.domain,
                  sub_reddit_id: FF[0].data.children[0].data.subreddit_id,
                  title: FF[0].data.children[0].data.title,
                  author: FF[0].data.children[0].data.author,
                  thumbnail: FF[0].data.children[0].data.thumbnail,
                  web_link:
                    "https://www.reddit.com" +
                    FF[0].data.children[0].data.permalink,
                },
              });
            } else
              return res.status(500).json({
                status: false,
                message: "Server time error.",
              });
          }
        );
        break;
      case "nsfw2":
        await got("https://www.reddit.com/r/nsfw2/random.json").then(
          async (Form) => {
            var FF = JSON.parse(Form.body);
            var FFLink = FF[0].data.children[0].data.url;
            if (FFLink) {
              return res.status(200).json({
                resp: {
                  id: uuidv4(),
                  status: true,
                  timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
                },
                meta: {
                  topic: "[NSFW Images]",
                  query: decodeURI(argument),
                  url: shorten(FFLink),
                  domain: FF[0].data.children[0].data.domain,
                  sub_reddit_id: FF[0].data.children[0].data.subreddit_id,
                  title: FF[0].data.children[0].data.title,
                  author: FF[0].data.children[0].data.author,
                  thumbnail: FF[0].data.children[0].data.thumbnail,
                  web_link:
                    "https://www.reddit.com" +
                    FF[0].data.children[0].data.permalink,
                },
              });
            } else
              return res.status(500).json({
                status: false,
                message: "Server time error.",
              });
          }
        );
        break;
      case "bonermaterial":
        await got("https://www.reddit.com/r/bonermaterial/random.json").then(
          async (Form) => {
            var FF = JSON.parse(Form.body);
            var FFLink = FF[0].data.children[0].data.url;
            if (FFLink) {
              return res.status(200).json({
                resp: {
                  id: uuidv4(),
                  status: true,
                  timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
                },
                meta: {
                  topic: "[NSFW Images]",
                  query: decodeURI(argument),
                  url: shorten(FFLink),
                  domain: FF[0].data.children[0].data.domain,
                  sub_reddit_id: FF[0].data.children[0].data.subreddit_id,
                  title: FF[0].data.children[0].data.title,
                  author: FF[0].data.children[0].data.author,
                  thumbnail: FF[0].data.children[0].data.thumbnail,
                  web_link:
                    "https://www.reddit.com" +
                    FF[0].data.children[0].data.permalink,
                },
              });
            } else
              return res.status(500).json({
                status: false,
                message: "Server time error.",
              });
          }
        );
        break;
      case "nsfw411":
        await got("https://www.reddit.com/r/nsfw411/random.json").then(
          async (Form) => {
            var FF = JSON.parse(Form.body);
            var FFLink = FF[0].data.children[0].data.url;
            if (FFLink) {
              return res.status(200).json({
                resp: {
                  id: uuidv4(),
                  status: true,
                  timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
                },
                meta: {
                  topic: "[NSFW Images]",
                  query: decodeURI(argument),
                  url: shorten(FFLink),
                  domain: FF[0].data.children[0].data.domain,
                  sub_reddit_id: FF[0].data.children[0].data.subreddit_id,
                  title: FF[0].data.children[0].data.title,
                  author: FF[0].data.children[0].data.author,
                  thumbnail: FF[0].data.children[0].data.thumbnail,
                  web_link:
                    "https://www.reddit.com" +
                    FF[0].data.children[0].data.permalink,
                },
              });
            } else
              return res.status(500).json({
                status: false,
                message: "Server time error.",
              });
          }
        );
        break;
      case "iwanttofuckher":
        await got("https://www.reddit.com/r/iWantToFuckHer/random.json").then(
          async (Form) => {
            var FF = JSON.parse(Form.body);
            var FFLink = FF[0].data.children[0].data.url;
            if (FFLink) {
              return res.status(200).json({
                resp: {
                  id: uuidv4(),
                  status: true,
                  timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
                },
                meta: {
                  topic: "[NSFW Images]",
                  query: decodeURI(argument),
                  url: shorten(FFLink),
                  domain: FF[0].data.children[0].data.domain,
                  sub_reddit_id: FF[0].data.children[0].data.subreddit_id,
                  title: FF[0].data.children[0].data.title,
                  author: FF[0].data.children[0].data.author,
                  thumbnail: FF[0].data.children[0].data.thumbnail,
                  web_link:
                    "https://www.reddit.com" +
                    FF[0].data.children[0].data.permalink,
                },
              });
            } else
              return res.status(500).json({
                status: false,
                message: "Server time error.",
              });
          }
        );
        break;
      case "exxxtras":
        await got("https://www.reddit.com/r/exxxtras/random.json").then(
          async (Form) => {
            var FF = JSON.parse(Form.body);
            var FFLink = FF[0].data.children[0].data.url;
            if (FFLink) {
              return res.status(200).json({
                resp: {
                  id: uuidv4(),
                  status: true,
                  timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
                },
                meta: {
                  topic: "[NSFW Images]",
                  query: decodeURI(argument),
                  url: shorten(FFLink),
                  domain: FF[0].data.children[0].data.domain,
                  sub_reddit_id: FF[0].data.children[0].data.subreddit_id,
                  title: FF[0].data.children[0].data.title,
                  author: FF[0].data.children[0].data.author,
                  thumbnail: FF[0].data.children[0].data.thumbnail,
                  web_link:
                    "https://www.reddit.com" +
                    FF[0].data.children[0].data.permalink,
                },
              });
            } else
              return res.status(500).json({
                status: false,
                message: "Server time error.",
              });
          }
        );
        break;
      case "distension":
        await got("https://www.reddit.com/r/distension/random.json").then(
          async (Form) => {
            var FF = JSON.parse(Form.body);
            var FFLink = FF[0].data.children[0].data.url;
            if (FFLink) {
              return res.status(200).json({
                resp: {
                  id: uuidv4(),
                  status: true,
                  timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
                },
                meta: {
                  topic: "[NSFW Images]",
                  query: decodeURI(argument),
                  url: shorten(FFLink),
                  domain: FF[0].data.children[0].data.domain,
                  sub_reddit_id: FF[0].data.children[0].data.subreddit_id,
                  title: FF[0].data.children[0].data.title,
                  author: FF[0].data.children[0].data.author,
                  thumbnail: FF[0].data.children[0].data.thumbnail,
                  web_link:
                    "https://www.reddit.com" +
                    FF[0].data.children[0].data.permalink,
                },
              });
            } else
              return res.status(500).json({
                status: false,
                message: "Server time error.",
              });
          }
        );
        break;
      case "bimbofetish":
        await got("https://www.reddit.com/r/bimbofetish/random.json").then(
          async (Form) => {
            var FF = JSON.parse(Form.body);
            var FFLink = FF[0].data.children[0].data.url;
            if (FFLink) {
              return res.status(200).json({
                resp: {
                  id: uuidv4(),
                  status: true,
                  timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
                },
                meta: {
                  topic: "[NSFW Images]",
                  query: decodeURI(argument),
                  url: shorten(FFLink),
                  domain: FF[0].data.children[0].data.domain,
                  sub_reddit_id: FF[0].data.children[0].data.subreddit_id,
                  title: FF[0].data.children[0].data.title,
                  author: FF[0].data.children[0].data.author,
                  thumbnail: FF[0].data.children[0].data.thumbnail,
                  web_link:
                    "https://www.reddit.com" +
                    FF[0].data.children[0].data.permalink,
                },
              });
            } else
              return res.status(500).json({
                status: false,
                message: "Server time error.",
              });
          }
        );
        break;
      case "christiangirls":
        await got("https://www.reddit.com/r/christiangirls/random.json").then(
          async (Form) => {
            var FF = JSON.parse(Form.body);
            var FFLink = FF[0].data.children[0].data.url;
            if (FFLink) {
              return res.status(200).json({
                resp: {
                  id: uuidv4(),
                  status: true,
                  timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
                },
                meta: {
                  topic: "[NSFW Images]",
                  query: decodeURI(argument),
                  url: shorten(FFLink),
                  domain: FF[0].data.children[0].data.domain,
                  sub_reddit_id: FF[0].data.children[0].data.subreddit_id,
                  title: FF[0].data.children[0].data.title,
                  author: FF[0].data.children[0].data.author,
                  thumbnail: FF[0].data.children[0].data.thumbnail,
                  web_link:
                    "https://www.reddit.com" +
                    FF[0].data.children[0].data.permalink,
                },
              });
            } else
              return res.status(500).json({
                status: false,
                message: "Server time error.",
              });
          }
        );
        break;
      case "dirtygaming":
        await got("https://www.reddit.com/r/dirtygaming/random.json").then(
          async (Form) => {
            var FF = JSON.parse(Form.body);
            var FFLink = FF[0].data.children[0].data.url;
            if (FFLink) {
              return res.status(200).json({
                resp: {
                  id: uuidv4(),
                  status: true,
                  timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
                },
                meta: {
                  topic: "[NSFW Images]",
                  query: decodeURI(argument),
                  url: shorten(FFLink),
                  domain: FF[0].data.children[0].data.domain,
                  sub_reddit_id: FF[0].data.children[0].data.subreddit_id,
                  title: FF[0].data.children[0].data.title,
                  author: FF[0].data.children[0].data.author,
                  thumbnail: FF[0].data.children[0].data.thumbnail,
                  web_link:
                    "https://www.reddit.com" +
                    FF[0].data.children[0].data.permalink,
                },
              });
            } else
              return res.status(500).json({
                status: false,
                message: "Server time error.",
              });
          }
        );
        break;
      case "sexybutnotporn":
        await got("https://www.reddit.com/r/sexybutnotporn/random.json").then(
          async (Form) => {
            var FF = JSON.parse(Form.body);
            var FFLink = FF[0].data.children[0].data.url;
            if (FFLink) {
              return res.status(200).json({
                resp: {
                  id: uuidv4(),
                  status: true,
                  timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
                },
                meta: {
                  topic: "[NSFW Images]",
                  query: decodeURI(argument),
                  url: shorten(FFLink),
                  domain: FF[0].data.children[0].data.domain,
                  sub_reddit_id: FF[0].data.children[0].data.subreddit_id,
                  title: FF[0].data.children[0].data.title,
                  author: FF[0].data.children[0].data.author,
                  thumbnail: FF[0].data.children[0].data.thumbnail,
                  web_link:
                    "https://www.reddit.com" +
                    FF[0].data.children[0].data.permalink,
                },
              });
            } else
              return res.status(500).json({
                status: false,
                message: "Server time error.",
              });
          }
        );
        break;
      case "femalepov":
        await got("https://www.reddit.com/r/femalepov/random.json").then(
          async (Form) => {
            var FF = JSON.parse(Form.body);
            var FFLink = FF[0].data.children[0].data.url;
            if (FFLink) {
              return res.status(200).json({
                resp: {
                  id: uuidv4(),
                  status: true,
                  timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
                },
                meta: {
                  topic: "[NSFW Images]",
                  query: decodeURI(argument),
                  url: shorten(FFLink),
                  domain: FF[0].data.children[0].data.domain,
                  sub_reddit_id: FF[0].data.children[0].data.subreddit_id,
                  title: FF[0].data.children[0].data.title,
                  author: FF[0].data.children[0].data.author,
                  thumbnail: FF[0].data.children[0].data.thumbnail,
                  web_link:
                    "https://www.reddit.com" +
                    FF[0].data.children[0].data.permalink,
                },
              });
            } else
              return res.status(500).json({
                status: false,
                message: "Server time error.",
              });
          }
        );
        break;
      case "omgbeckylookathiscock":
        await got(
          "https://www.reddit.com/r/omgbeckylookathiscock/random.json"
        ).then(async (Form) => {
          var FF = JSON.parse(Form.body);
          var FFLink = FF[0].data.children[0].data.url;
          if (FFLink) {
            return res.status(200).json({
              resp: {
                id: uuidv4(),
                status: true,
                timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
              },
              meta: {
                topic: "[NSFW Images]",
                query: decodeURI(argument),
                url: shorten(FFLink),
                domain: FF[0].data.children[0].data.domain,
                sub_reddit_id: FF[0].data.children[0].data.subreddit_id,
                title: FF[0].data.children[0].data.title,
                author: FF[0].data.children[0].data.author,
                thumbnail: FF[0].data.children[0].data.thumbnail,
                web_link:
                  "https://www.reddit.com" +
                  FF[0].data.children[0].data.permalink,
              },
            });
          } else
            return res.status(500).json({
              status: false,
              message: "Server time error.",
            });
        });
        break;
      case "sexygirls":
        await got("https://www.reddit.com/r/sexygirls/random.json").then(
          async (Form) => {
            var FF = JSON.parse(Form.body);
            var FFLink = FF[0].data.children[0].data.url;
            if (FFLink) {
              return res.status(200).json({
                resp: {
                  id: uuidv4(),
                  status: true,
                  timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
                },
                meta: {
                  topic: "[NSFW Images]",
                  query: decodeURI(argument),
                  url: shorten(FFLink),
                  domain: FF[0].data.children[0].data.domain,
                  sub_reddit_id: FF[0].data.children[0].data.subreddit_id,
                  title: FF[0].data.children[0].data.title,
                  author: FF[0].data.children[0].data.author,
                  thumbnail: FF[0].data.children[0].data.thumbnail,
                  web_link:
                    "https://www.reddit.com" +
                    FF[0].data.children[0].data.permalink,
                },
              });
            } else
              return res.status(500).json({
                status: false,
                message: "Server time error.",
              });
          }
        );
        break;
      case "breedingmaterial":
        await got("https://www.reddit.com/r/breedingmaterial/random.json").then(
          async (Form) => {
            var FF = JSON.parse(Form.body);
            var FFLink = FF[0].data.children[0].data.url;
            if (FFLink) {
              return res.status(200).json({
                resp: {
                  id: uuidv4(),
                  status: true,
                  timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
                },
                meta: {
                  topic: "[NSFW Images]",
                  query: decodeURI(argument),
                  url: shorten(FFLink),
                  domain: FF[0].data.children[0].data.domain,
                  sub_reddit_id: FF[0].data.children[0].data.subreddit_id,
                  title: FF[0].data.children[0].data.title,
                  author: FF[0].data.children[0].data.author,
                  thumbnail: FF[0].data.children[0].data.thumbnail,
                  web_link:
                    "https://www.reddit.com" +
                    FF[0].data.children[0].data.permalink,
                },
              });
            } else
              return res.status(500).json({
                status: false,
                message: "Server time error.",
              });
          }
        );
        break;
      case "toocuteforporn":
        await got("https://www.reddit.com/r/toocuteforporn/random.json").then(
          async (Form) => {
            var FF = JSON.parse(Form.body);
            var FFLink = FF[0].data.children[0].data.url;
            if (FFLink) {
              return res.status(200).json({
                resp: {
                  id: uuidv4(),
                  status: true,
                  timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
                },
                meta: {
                  topic: "[NSFW Images]",
                  query: decodeURI(argument),
                  url: shorten(FFLink),
                  domain: FF[0].data.children[0].data.domain,
                  sub_reddit_id: FF[0].data.children[0].data.subreddit_id,
                  title: FF[0].data.children[0].data.title,
                  author: FF[0].data.children[0].data.author,
                  thumbnail: FF[0].data.children[0].data.thumbnail,
                  web_link:
                    "https://www.reddit.com" +
                    FF[0].data.children[0].data.permalink,
                },
              });
            } else
              return res.status(500).json({
                status: false,
                message: "Server time error.",
              });
          }
        );
        break;
      case "justhotwomen":
        await got("https://www.reddit.com/r/justhotwomen/random.json").then(
          async (Form) => {
            var FF = JSON.parse(Form.body);
            var FFLink = FF[0].data.children[0].data.url;
            if (FFLink) {
              return res.status(200).json({
                resp: {
                  id: uuidv4(),
                  status: true,
                  timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
                },
                meta: {
                  topic: "[NSFW Images]",
                  query: decodeURI(argument),
                  url: shorten(FFLink),
                  domain: FF[0].data.children[0].data.domain,
                  sub_reddit_id: FF[0].data.children[0].data.subreddit_id,
                  title: FF[0].data.children[0].data.title,
                  author: FF[0].data.children[0].data.author,
                  thumbnail: FF[0].data.children[0].data.thumbnail,
                  web_link:
                    "https://www.reddit.com" +
                    FF[0].data.children[0].data.permalink,
                },
              });
            } else
              return res.status(500).json({
                status: false,
                message: "Server time error.",
              });
          }
        );
        break;
      case "stripgirls":
        await got("https://www.reddit.com/r/stripgirls/random.json").then(
          async (Form) => {
            var FF = JSON.parse(Form.body);
            var FFLink = FF[0].data.children[0].data.url;
            if (FFLink) {
              return res.status(200).json({
                resp: {
                  id: uuidv4(),
                  status: true,
                  timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
                },
                meta: {
                  topic: "[NSFW Images]",
                  query: decodeURI(argument),
                  url: shorten(FFLink),
                  domain: FF[0].data.children[0].data.domain,
                  sub_reddit_id: FF[0].data.children[0].data.subreddit_id,
                  title: FF[0].data.children[0].data.title,
                  author: FF[0].data.children[0].data.author,
                  thumbnail: FF[0].data.children[0].data.thumbnail,
                  web_link:
                    "https://www.reddit.com" +
                    FF[0].data.children[0].data.permalink,
                },
              });
            } else
              return res.status(500).json({
                status: false,
                message: "Server time error.",
              });
          }
        );
        break;
      case "hotstuffnsfw":
        await got("https://www.reddit.com/r/hotstuffnsfw/random.json").then(
          async (Form) => {
            var FF = JSON.parse(Form.body);
            var FFLink = FF[0].data.children[0].data.url;
            if (FFLink) {
              return res.status(200).json({
                resp: {
                  id: uuidv4(),
                  status: true,
                  timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
                },
                meta: {
                  topic: "[NSFW Images]",
                  query: decodeURI(argument),
                  url: shorten(FFLink),
                  domain: FF[0].data.children[0].data.domain,
                  sub_reddit_id: FF[0].data.children[0].data.subreddit_id,
                  title: FF[0].data.children[0].data.title,
                  author: FF[0].data.children[0].data.author,
                  thumbnail: FF[0].data.children[0].data.thumbnail,
                  web_link:
                    "https://www.reddit.com" +
                    FF[0].data.children[0].data.permalink,
                },
              });
            } else
              return res.status(500).json({
                status: false,
                message: "Server time error.",
              });
          }
        );
        break;
      case "uncommonposes":
        await got("https://www.reddit.com/r/uncommonposes/random.json").then(
          async (Form) => {
            var FF = JSON.parse(Form.body);
            var FFLink = FF[0].data.children[0].data.url;
            if (FFLink) {
              return res.status(200).json({
                resp: {
                  id: uuidv4(),
                  status: true,
                  timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
                },
                meta: {
                  topic: "[NSFW Images]",
                  query: decodeURI(argument),
                  url: shorten(FFLink),
                  domain: FF[0].data.children[0].data.domain,
                  sub_reddit_id: FF[0].data.children[0].data.subreddit_id,
                  title: FF[0].data.children[0].data.title,
                  author: FF[0].data.children[0].data.author,
                  thumbnail: FF[0].data.children[0].data.thumbnail,
                  web_link:
                    "https://www.reddit.com" +
                    FF[0].data.children[0].data.permalink,
                },
              });
            } else
              return res.status(500).json({
                status: false,
                message: "Server time error.",
              });
          }
        );
        break;
      case "gifsofremoval":
        await got("https://www.reddit.com/r/gifsofremoval/random.json").then(
          async (Form) => {
            var FF = JSON.parse(Form.body);
            var FFLink = FF[0].data.children[0].data.url;
            if (FFLink) {
              return res.status(200).json({
                resp: {
                  id: uuidv4(),
                  status: true,
                  timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
                },
                meta: {
                  topic: "[NSFW Images]",
                  query: decodeURI(argument),
                  url: shorten(FFLink),
                  domain: FF[0].data.children[0].data.domain,
                  sub_reddit_id: FF[0].data.children[0].data.subreddit_id,
                  title: FF[0].data.children[0].data.title,
                  author: FF[0].data.children[0].data.author,
                  thumbnail: FF[0].data.children[0].data.thumbnail,
                  web_link:
                    "https://www.reddit.com" +
                    FF[0].data.children[0].data.permalink,
                },
              });
            } else
              return res.status(500).json({
                status: false,
                message: "Server time error.",
              });
          }
        );
        break;
      case "nostalgiafapping":
        await got("https://www.reddit.com/r/nostalgiafapping/random.json").then(
          async (Form) => {
            var FF = JSON.parse(Form.body);
            var FFLink = FF[0].data.children[0].data.url;
            if (FFLink) {
              return res.status(200).json({
                resp: {
                  id: uuidv4(),
                  status: true,
                  timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
                },
                meta: {
                  topic: "[NSFW Images]",
                  query: decodeURI(argument),
                  url: shorten(FFLink),
                  domain: FF[0].data.children[0].data.domain,
                  sub_reddit_id: FF[0].data.children[0].data.subreddit_id,
                  title: FF[0].data.children[0].data.title,
                  author: FF[0].data.children[0].data.author,
                  thumbnail: FF[0].data.children[0].data.thumbnail,
                  web_link:
                    "https://www.reddit.com" +
                    FF[0].data.children[0].data.permalink,
                },
              });
            } else
              return res.status(500).json({
                status: false,
                message: "Server time error.",
              });
          }
        );
        break;
      case "truefmk":
        await got("https://www.reddit.com/r/truefmk/random.json").then(
          async (Form) => {
            var FF = JSON.parse(Form.body);
            var FFLink = FF[0].data.children[0].data.url;
            if (FFLink) {
              return res.status(200).json({
                resp: {
                  id: uuidv4(),
                  status: true,
                  timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
                },
                meta: {
                  topic: "[NSFW Images]",
                  query: decodeURI(argument),
                  url: shorten(FFLink),
                  domain: FF[0].data.children[0].data.domain,
                  sub_reddit_id: FF[0].data.children[0].data.subreddit_id,
                  title: FF[0].data.children[0].data.title,
                  author: FF[0].data.children[0].data.author,
                  thumbnail: FF[0].data.children[0].data.thumbnail,
                  web_link:
                    "https://www.reddit.com" +
                    FF[0].data.children[0].data.permalink,
                },
              });
            } else
              return res.status(500).json({
                status: false,
                message: "Server time error.",
              });
          }
        );
        break;
      case "nudes":
        await got("https://www.reddit.com//r/nudes/random.json").then(
          async (Form) => {
            var FF = JSON.parse(Form.body);
            var FFLink = FF[0].data.children[0].data.url;
            if (FFLink) {
              return res.status(200).json({
                resp: {
                  id: uuidv4(),
                  status: true,
                  timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
                },
                meta: {
                  topic: "[NSFW Images]",
                  query: decodeURI(argument),
                  url: shorten(FFLink),
                  domain: FF[0].data.children[0].data.domain,
                  sub_reddit_id: FF[0].data.children[0].data.subreddit_id,
                  title: FF[0].data.children[0].data.title,
                  author: FF[0].data.children[0].data.author,
                  thumbnail: FF[0].data.children[0].data.thumbnail,
                  web_link:
                    "https://www.reddit.com" +
                    FF[0].data.children[0].data.permalink,
                },
              });
            } else
              return res.status(500).json({
                status: false,
                message: "Server time error.",
              });
          }
        );
        break;
      case "4k":
      case "realgirls":
        await got("https://www.reddit.com/r/RealGirls/random.json").then(
          async (Form) => {
            var FF = JSON.parse(Form.body);
            var FFLink = FF[0].data.children[0].data.url;
            if (FFLink) {
              return res.status(200).json({
                resp: {
                  id: uuidv4(),
                  status: true,
                  timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
                },
                meta: {
                  topic: "[NSFW Images]",
                  query: decodeURI(argument),
                  url: shorten(FFLink),
                  domain: FF[0].data.children[0].data.domain,
                  sub_reddit_id: FF[0].data.children[0].data.subreddit_id,
                  title: FF[0].data.children[0].data.title,
                  author: FF[0].data.children[0].data.author,
                  thumbnail: FF[0].data.children[0].data.thumbnail,
                  web_link:
                    "https://www.reddit.com" +
                    FF[0].data.children[0].data.permalink,
                },
              });
            } else
              return res.status(500).json({
                status: false,
                message: "Server time error.",
              });
          }
        );
        break;
      case "blowjobs":
        await got("https://www.reddit.com/r/Blowjobs/random.json").then(
          async (Form) => {
            var FF = JSON.parse(Form.body);
            var FFLink = FF[0].data.children[0].data.url;
            if (FFLink) {
              return res.status(200).json({
                resp: {
                  id: uuidv4(),
                  status: true,
                  timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
                },
                meta: {
                  topic: "[NSFW Images]",
                  query: decodeURI(argument),
                  url: shorten(FFLink),
                  domain: FF[0].data.children[0].data.domain,
                  sub_reddit_id: FF[0].data.children[0].data.subreddit_id,
                  title: FF[0].data.children[0].data.title,
                  author: FF[0].data.children[0].data.author,
                  thumbnail: FF[0].data.children[0].data.thumbnail,
                  web_link:
                    "https://www.reddit.com" +
                    FF[0].data.children[0].data.permalink,
                },
              });
            } else
              return res.status(500).json({
                status: false,
                message: "Server time error.",
              });
          }
        );
        break;
      case "milf":
        await got("https://www.reddit.com/r/milf/random.json").then(
          async (Form) => {
            var FF = JSON.parse(Form.body);
            var FFLink = FF[0].data.children[0].data.url;
            if (FFLink) {
              return res.status(200).json({
                resp: {
                  id: uuidv4(),
                  status: true,
                  timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
                },
                meta: {
                  topic: "[NSFW Images]",
                  query: decodeURI(argument),
                  url: shorten(FFLink),
                  domain: FF[0].data.children[0].data.domain,
                  sub_reddit_id: FF[0].data.children[0].data.subreddit_id,
                  title: FF[0].data.children[0].data.title,
                  author: FF[0].data.children[0].data.author,
                  thumbnail: FF[0].data.children[0].data.thumbnail,
                  web_link:
                    "https://www.reddit.com" +
                    FF[0].data.children[0].data.permalink,
                },
              });
            } else
              return res.status(500).json({
                status: false,
                message: "Server time error.",
              });
          }
        );
        break;
      case "milk":
      case "milking":
      case "lactating":
        await got("https://www.reddit.com/r/lactating/random.json").then(
          async (Form) => {
            var FF = JSON.parse(Form.body);
            var FFLink = FF[0].data.children[0].data.url;
            if (FFLink) {
              return res.status(200).json({
                resp: {
                  id: uuidv4(),
                  status: true,
                  timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
                },
                meta: {
                  topic: "[NSFW Images]",
                  query: decodeURI(argument),
                  url: shorten(FFLink),
                  domain: FF[0].data.children[0].data.domain,
                  sub_reddit_id: FF[0].data.children[0].data.subreddit_id,
                  title: FF[0].data.children[0].data.title,
                  author: FF[0].data.children[0].data.author,
                  thumbnail: FF[0].data.children[0].data.thumbnail,
                  web_link:
                    "https://www.reddit.com" +
                    FF[0].data.children[0].data.permalink,
                },
              });
            } else
              return res.status(500).json({
                status: false,
                message: "Server time error.",
              });
          }
        );
        break;
      case "pussy":
        await got("https://www.reddit.com/r/pussy/random.json").then(
          async (Form) => {
            var FF = JSON.parse(Form.body);
            var FFLink = FF[0].data.children[0].data.url;
            if (FFLink) {
              return res.status(200).json({
                resp: {
                  id: uuidv4(),
                  status: true,
                  timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
                },
                meta: {
                  topic: "[NSFW Images]",
                  query: decodeURI(argument),
                  url: shorten(FFLink),
                  domain: FF[0].data.children[0].data.domain,
                  sub_reddit_id: FF[0].data.children[0].data.subreddit_id,
                  title: FF[0].data.children[0].data.title,
                  author: FF[0].data.children[0].data.author,
                  thumbnail: FF[0].data.children[0].data.thumbnail,
                  web_link:
                    "https://www.reddit.com" +
                    FF[0].data.children[0].data.permalink,
                },
              });
            } else
              return res.status(500).json({
                status: false,
                message: "Server time error.",
              });
          }
        );
        break;
      case "cum":
      case "slut":
      case "cumslut":
        await got("https://www.reddit.com/r/cumsluts/random.json").then(
          async (Form) => {
            var FF = JSON.parse(Form.body);
            var FFLink = FF[0].data.children[0].data.url;
            if (FFLink) {
              return res.status(200).json({
                resp: {
                  id: uuidv4(),
                  status: true,
                  timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
                },
                meta: {
                  topic: "[NSFW Images]",
                  query: decodeURI(argument),
                  url: shorten(FFLink),
                  domain: FF[0].data.children[0].data.domain,
                  sub_reddit_id: FF[0].data.children[0].data.subreddit_id,
                  title: FF[0].data.children[0].data.title,
                  author: FF[0].data.children[0].data.author,
                  thumbnail: FF[0].data.children[0].data.thumbnail,
                  web_link:
                    "https://www.reddit.com" +
                    FF[0].data.children[0].data.permalink,
                },
              });
            } else
              return res.status(500).json({
                status: false,
                message: "Server time error.",
              });
          }
        );
        break;
      default:
        res.status(500).json({
          id: uuidv4(),
          status: false,
          message: "Arguments not satisfied.",
          timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
          usage: {
            endpoint: "/api/nsfw?q=",
            example: "/api/nsfw?q=ass",
            querry: [
              "nsfw",
              "nsfw2",
              "bonermaterial",
              "nsfw411",
              "iwanttofuckher",
              "exxxtras",
              "distension",
              "bimbofetish",
              "christiangirls",
              "dirtygaming",
              "sexybutnotporn",
              "femalepov",
              "omgbeckylookathiscock",
              "sexygirls",
              "breedingmaterial",
              "canthold",
              "toocuteforporn",
              "justhotwomen",
              "stripgirls",
              "hotstuffnsfw",
              "uncommonposes",
              "gifsofremoval",
              "nostalgiafapping",
              "truefmk",
              "nudes",
              "4k",
              "realgirls",
              "blowjobs",
              "milf",
              "milk",
              "milking",
              "lactating",
              "pussy",
              "cum",
              "slut",
              "cumslut",
              "cringe",
            ],
          },
        });
        break;
    }
  } catch (error: any) {
    logger.error(error.message);
    return res.status(500).json({
      id: uuidv4(),
      status: false,
      timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
      message: error.message,
    });
  }
}
