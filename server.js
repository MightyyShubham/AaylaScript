import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/submitContact", async (req, res) => {
  try {
    const googleUrl = "https://script.google.com/macros/s/AKfycbyb4Jh0PmAG5xChjmKiJO6NG6Jujqfn6p10WypCbjTBeKTJqILPYT_bAvc8Nynk91JZDA/exec"; // Replace with your Apps Script Web App URL
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
    const googleUrl = "https://script.google.com/macros/s/AKfycbzWJ_3vZUCBvUfXwombeWi-Y1GdzbcnSHH-YO_N5zh9A5XaSkY8G8zrISVxPf7pLnsxwg/exec"; // Replace with your Apps Script Web App URL
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
    const googleUrl = "https://script.google.com/macros/s/AKfycbyfEKH5KDEHaJa46HVezeUH3Tfk5A75WTZRBJCbGc1IOLLRnGlZpbd4zTnBAURFVQU9UA/exec"; // Replace with your Apps Script Web App URL
    
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
