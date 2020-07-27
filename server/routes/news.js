const express = require("express");
const router = express.Router();
const puppeteer = require("puppeteer");

const URL = "https://rus.azattyq.org/z/2231";

router.get("/news", async (req, res) => {
  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"]
    });
    const page = await browser.newPage();
    await page.goto(URL);

    const news = await page.evaluate(() => {
      const titleOne = document.querySelector(
        "#ordinaryItems > li:nth-child(1) > div > a"
      );
      const titleTwo = document.querySelector(
        "#ordinaryItems > li:nth-child(2) > div > a"
      );
      const titleThree = document.querySelector(
        "#ordinaryItems > li:nth-child(3) > div > a"
      );
      const titleFour = document.querySelector(
        "#ordinaryItems > li:nth-child(4) > div > a"
      );
      const titleFive = document.querySelector(
        "#ordinaryItems > li:nth-child(5) > div > a"
      );

      const getNews = (...domSelectors) => {
        const arrOfNewsObjects = domSelectors.map(obj => ({
          title: obj.title,
          link: obj.href
        }));
        return arrOfNewsObjects;
      };

      const result = getNews(
        titleOne,
        titleTwo,
        titleThree,
        titleFour,
        titleFive
      );
      return result;
    });

    console.log(news);

    res.send(news);
    browser.close();
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

module.exports = router;
