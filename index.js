import express from "express";
const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.status(200).json({
    status: 200,
    message: "server is running just fine",
  });
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
