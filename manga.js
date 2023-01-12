(async () => {
  const { Anime, Character, Manga } = require("@shineiichijo/marika");
  var manga = new Manga();
  var response = await manga.searchManga("My Hero Academia by Kohei Horikoshi");

  let Genres, Authors;
  for (var i = 0; i < response.data[0].genres.length; i++) {
    Genres = `${response.data[0].genres[i].name}`;
  }
  for (var i = 0; i < response.data[0].authors.length; i++) {
    Authors += `*${response.data[0].authors[i].name}* *(${response.data[0].authors[0].type})*`;
  }

  _Found = [
    {
      Title: response.data[0].title,
      Status: response.data[0].status,
      Total_Chapters: response.data[0].chapters,
      Published_On: response.data[0].published.from,
      Score: response.data[0].scored,
      Popularity: response.data[0].popularity,
      Favorites: response.data[0].favorites,
      URL: response.data[0].url,
      Genres: Genres || null,
      Authors: Authors || null,
      Background: response.data[0].background || null,
      Thumbnail: response.data[0].images.jpg.large_image_url || null,
      Description: response.data[0].synopsis.replace(
        /\[Written by MAL Rewrite]/g,
        ""
      ),
    },
  ];

  console.log(_Found);
})();
