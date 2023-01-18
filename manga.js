(async () => {
  const axios = require("axios");

  axios
    .request({
      method: "POST",
      url: "https://json-formatter.p.rapidapi.com/FormatJson",
      headers: {
        "X-RapidAPI-Key": "f8ea26ced9msh6101823bd02f563p1cbdecjsn4e544f02ba9a",
        "X-RapidAPI-Host": "json-formatter.p.rapidapi.com",
      },
    })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
})();
