const {
  Ongoing_Anime,
  Wallpaper_Flare,
  Wattpad,
  Pinterest,
  Instagram_Downloader,
  Instagram_Story_Downloader,
  Instagram_Stalker,
  Twitter_Downloader,
  Facebook_Downloader,
  TikTokk_Downloader,
} = require("./function");

/**
Wattpad("love").then(result => {
     console.log(result)
});
*/
module.exports.Wattpad = Wattpad;

/**
Pinterest("rose).then(result => {
     console.log(result)
});
*/
module.exports.Pinterest = Pinterest;

/**
Ongoing_Anime().then(result => {
     console.log(result)
});
*/
module.exports.Ongoing_Anime = Ongoing_Anime;

/**
Twitter_Downloader("https://twitter.com/PassengersMovie/status/821025484150423557").then(result => {
     console.log(result)
});
 */
module.exports.Twitter_Downloader = Twitter_Downloader;

/**
TikTokk_Downloader("https://www.tiktok.com/@daniajaa7/video/6980287183517125890?sender_device=pc&sender_web_id=6978811994732938753&is_from_webapp=v1&is_copy_url=0").then(result => {
     console.log(result)
});
 */
module.exports.TikTokk_Downloader = TikTokk_Downloader;

/**
Facebook_Downloader("https://fb.watch/6vQOvEENLW/").then(result => {
     console.log(result)
});
 */
module.exports.Facebook_Downloader = Facebook_Downloader;

/**
Instagram_Downloader("https://www.instagram.com/p/CQpUpGvAhWq/?utm_source=ig_web_copy_link").then(result => {
     console.log(result)
});
 */
module.exports.Instagram_Downloader = Instagram_Downloader;

/**
Instagram_Story_Downloader("magneum").then(result => {
     console.log(result)
});
 */
module.exports.Instagram_Story_Downloader = Instagram_Story_Downloader;
