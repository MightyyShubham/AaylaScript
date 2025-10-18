import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/submitContact", async (req, res) => {
  try {
    const googleUrl = "https://script.google.com/macros/s/AKfycbzf1xiiAhCZ9rcnPNadn0R9nBJ-Og3mHT0VACK85X818va2v0MobYcZny4JN1oaS52Iow/exec"; // Replace with your Apps Script Web App URL
    console.log(req.body);
    const response = await fetch(googleUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: req.body,
    });

    const text = await response.text();
    res.status(200).send(text);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/submitCustom", async (req, res) => {
  try {
    const googleUrl = "https://script.google.com/macros/s/AKfycbyqXpOF9vUfI9g53Se4FkQrSSLQezkrKhjRXwfEs5NlAtkp90wCdnUCQcFcUeVa3zO8jg/exec"; // Replace with your Apps Script Web App URL
    console.log(req.body);
    const response = await fetch(googleUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: req.body,
    });
    const text = await response.text();
    res.status(200).send(text);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/submitFeedback", async (req, res) => {
  try {
    const googleUrl = "https://script.google.com/macros/s/AKfycbwz6dc5181DNa5YbAPlU4hktCf1asBnb2f1W3MrIItfTfkts2g-Vz6LjLml-rdHqYjSlg/exec"; // Replace with your Apps Script Web App URL
    
    console.log(req.body);
    const response = await fetch(googleUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: req.body,
    });
    const text = await response.text();
    res.status(200).send(text);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
