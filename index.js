const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");
const PORT = 8000;

const app = express();

//const url = "https://bdnr.sk/";

const shows = [];

axios(url)
  .then((response) => {
    const html = response.data;
    const $ = cheerio.load(html);

    $(`.program-block`, html).each(function () {
      const date = $(this).find(".datumX").text();
      const time = $(this).find(".casX").text();
      const title = $(this).find(".program-obsah").find("h2").text();

      shows.push({
        date,
        time,
        title,
      });
    });

    console.log(shows);
  })
  .catch((err) => console.log(err));

https: app.listen(PORT, () => console.log(`🟢 Server running on PORT ${PORT}`));
