const randNum = Math.floor(Math.random() * 15);

const almatyTimeHour = new Date().toLocaleString("kz-KZ", {
  timeZone: "Asia/Almaty",
  hour12: false, //display 23 instead of 11pm
  hour: "numeric" //display only hour
});

const chooseGreeting = hour => {
  if (hour < 12) {
    return "Qayırlı tañ";
  } else if (hour < 19) {
    return "Qayırlı kün";
  } else {
    return "Qayırlı keş";
  }
};

module.exports = {
  randNum,
  almatyTimeHour,
  chooseGreeting
};
