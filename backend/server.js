import express, { json } from "express";
import cors from "cors";

const app = express();
const port = 5000;

app.use(cors());
app.use(json());

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express.js!" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
