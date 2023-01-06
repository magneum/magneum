import axios from "axios";
axios
  .get("https://xhadr-api.vercel.app/api/")
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("Finished");
  });

// available enpoints:
// > api/anime?q=
// > api/animation?q=
// > api/youtube?q=
// > api/hentai?q=
// > api/nsfw?q=
