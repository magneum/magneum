const malScraper = require("mal-scraper");
export default async function search(request: any, response: any) {
try {
let _title = request.query.title as string;
const cobra = await malScraper.getInfoFromName(_title);
return response.send({
_mal_id: cobra.id,
_title: cobra.title,
_en_title: cobra.englishTitle,
_jp_title: cobra.japaneseTitle,
_image: cobra.picture,
_premiered: cobra.premiered,
_webpage: cobra.url,
_broadcast: cobra.broadcast,
_genres: cobra.genres,
_type: cobra.type,
_episodes: cobra.episodes,
_rating: cobra.rating,
_aired: cobra.aired,
_score: cobra.score,
_favourites: cobra.favorites,
_rank: cobra.ranked,
_duration: cobra.duration,
_studios: cobra.studios,
_producers: cobra.producers,
_popularity: cobra.popularity,
_members: cobra.members,
_scores: cobra.scoreStats,
_source: cobra.source,
_synonyms: cobra.synonyms,
_synopsis: cobra.synopsis,
_characters: cobra.charaters,
_staffs: cobra.staff,
});
} catch (error: any) {
console.log(error);
return response.status(500).json({
status: "error",
message: error.mesage,
});
}
}
