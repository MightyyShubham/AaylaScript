import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());
app.use(express.json());

//it is working for CustomDesign
app.post("/submitContact", async (req, res) => {
  try {
    const googleUrl = "https://script.google.com/macros/s/AKfycbyuMyw-TNlB1a9xD2eLFYvxX8T96h8PZJPE20SdxqdU19MzStqugwNnb-v8KtE6c4cSBg/exec"; // Replace with your Apps Script Web App URL
    console.log(req.body);
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

app.post("/submitCustom", async (req, res) => {
  try {
    const googleUrl = "https://script.google.com/macros/s/AKfycbyBhVTAKwVnWJAhYMxnt92ZhUPRoblR7qX5epqvc7xFXjxlcNCiATY7gq7C5bInVLr8/exec"; // Replace with your Apps Script Web App URL
    console.log(req.body);
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

app.post("/submitFeedback", async (req, res) => {
  try {
    const googleUrl = "https://script.google.com/macros/s/AKfycbxH88zOH02_OLloN9iFIKStFNtkcHalnyAgWTQoxPYwPt2qB5dV_TN7DP-sSjS9HrzU/exec"; // Replace with your Apps Script Web App URL
    
    console.log(req.body);
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

//this is for Export PAge
app.post("/submitExportDetails", async (req, res) => {
  try {
    const googleUrl = "https://script.google.com/macros/s/AKfycbwFY0zW_eSwix9a0b1FJK_TQeDQHmj3IJszoV8ozcASq0RgxYIuLi4-9FDGpBDuPT9cTQ/exec"; // Replace with your Apps Script Web App URL
    
    console.log(req.body);
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
