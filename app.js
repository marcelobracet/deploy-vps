import express from "express";

const app = express();

// add comment test to trigger CI/CD

const port = process.env.PORT || 3001;

app.get("/", (_, res) => {
  res.send("🔥 Hello World from Marcelo's VPS!");
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});
