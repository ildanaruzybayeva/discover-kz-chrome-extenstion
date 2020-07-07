const randNum = Math.floor(Math.random() * 15);

const almatyTime = new Date().toLocaleString("kz-KZ", {
  timeZone: "Asia/Almaty"
});

module.exports = {
  randNum,
  almatyTime
};
