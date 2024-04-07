import express from "express";
import path from "path";

const app = express();
const port = 5000;

// Set up EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(import.meta.url, "views"));


app.get("/", (req, res) => {
  const today = new Date();
  const day = today.getDay();

  let type = "a weekday";
  let adv =
    "It's time to work hard, common man! Get up early and achieve your goals.";

  if (day === 0 || day === 6) {
    type = "the weekend";
    adv = "It's time to have some fun.";
  }

  res.render("index", {
    dayType: type,
    advice: adv,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
