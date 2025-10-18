import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/submit", async (req, res) => {
  try {
    const googleUrl = "https://script.google.com/macros/s/AKfycbxZHu8u7CViBQSvwNizVGYpEFGv8e1mDw31atiVytrRGO9uPKXB4t-4NZAnPm5PKrqi/exec"; // Replace with your Apps Script Web App URL
    console.log("req",req);
    const response = await fetch(googleUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });

    const text = await response.text();
    res.status(200).send(text);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
