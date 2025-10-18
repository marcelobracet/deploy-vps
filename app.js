import express from "express";

const app = express();

app.get("/", (_, res) => {
  res.send("🔥 Hello World from Marcelo's VPS!");
});

app.listen(3001, "0.0.0.0", () => {
  console.log("Server running on port 3000");
});
