import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3001, () =>
  console.log("Server is listening on http://localhost:3001")
);
