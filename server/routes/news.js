const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
const puppeteer = require("puppeteer");

const URL = "http://bbc.com/";

router.get("/news", async (req, res) => {
  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"]
    }); //Step 1
    const page = await browser.newPage(); //Step 2
    await page.goto(url); //Step 3

    const news = await page.evaluate(() => {
      const topNews = [];
      const listOfAllNews = Array.from(
        document.querySelectorAll(".media-list__item")
      ); //page one
      for (var i = 0; i < 5; i++) {
        const title =
          listOfAllNews[i].childNodes[1].children[1].childNodes[1].outerText;
        topNews.includes(title) ? i++ : topNews.push(title);
      }
      return topNews;
    }); //Step 4

    console.log(news);

    res.send(news); //Step 5
    browser.close(); // Step 6
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

module.exports = router;
