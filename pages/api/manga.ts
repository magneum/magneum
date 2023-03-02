import https from "https";
import moment from "moment";
import logger from "../../log";
import { v4 as uuidv4 } from "uuid";
import { Manga } from "@shineiichijo/marika";
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

export default async function test(req: NextApiRequest, res: NextApiResponse) {
try {
if (req.query.q) {
var manga = new Manga();
var argument: any = req.query.q;
var response = await manga.searchManga(argument);
if (!response) {
res.send({
_status: "Failed with error code 911",
_message: "Parameters requirement not met.",
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_usage: {
_api_link: "/api/manga?q=",
_example: "/api/manga?q=My Hero Academia by Kohei Horikoshi",
},
});
} else {
let Genres = "";
let Authors = "";
for (var i = 0; i < response.data[0].genres.length; i++) {
Genres += `${response.data[0].genres[i].name}`;
}
for (var i = 0; i < response.data[0].authors.length; i++) {
Authors += `name=>${response.data[0].authors[i].name} | type=>${response.data[0].authors[0].type}`;
}
var _Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "Manga Search",
_query: argument,
_title: response.data[0].title,
_chapters: response.data[0].chapters,
_published_on: response.data[0].published.from,
_score: response.data[0].scored,
_popularity: response.data[0].popularity,
_favorites: response.data[0].favorites,
_url: response.data[0].url,
_genres: Genres || null,
_authors: Authors || null,
_background: response.data[0].background || null,
_image: shorten(response.data[0].images.jpg.large_image_url),
_description: response.data[0].synopsis,
},
];
logger.info(_Found);
return res.send(_Found);
}
} else {
return res.send({
_status: "Failed with error code 911",
_message: "Parameters requirement not met.",
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_usage: {
_api_link: "/api/manga?q=",
_example: "/api/manga?q=My Hero Academia by Kohei Horikoshi",
},
});
}
} catch (error: any) {
return res.status(500).json({
status: "error",
message: error.message,
});
}
}
