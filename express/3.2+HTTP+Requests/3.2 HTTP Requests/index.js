import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Me</h1><p>My name is Sanskar</p>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Me</h1><p>Phone: 7983438874</p>");
});

app.get("/github", (req, res) => {
  res.send("<h1>Github Link</h1><p>github:  https://github.com/sanskaryo</p>");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
