import express from "express";

const app = express();

// add comment test to trigger CI/CD twice

const port = process.env.PORT || 3001;

app.get("/", (_, res) => {
  res.send(
    "🔥 Hello World from Marcelo's VPS now is automated with CI/CD !!!!!!!"
  );
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});
