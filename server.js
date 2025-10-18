import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/submitContact", async (req, res) => {
  try {
    const googleUrl = "https://script.google.com/macros/s/AKfycbyq_rgvY83L1becp0N83ek_E5MX8BN9zIEqHDcDzRmDkWfCGwEswmUQ1clquqN2lXBN3g/exec"; // Replace with your Apps Script Web App URL
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
    const googleUrl = "https://script.google.com/macros/s/AKfycbzBbId2R2HABFEswKUX1O84m1udM7uLWmpQU-jdY-zwnRswAMxd0YxeSfmgW-toxg0Gqw/exec"; // Replace with your Apps Script Web App URL
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
    const googleUrl = "https://script.google.com/macros/s/AKfycbwIzi_LOYRsndHPSVPSGr3L2ngHLGukuRL0rwkHq1uUfw3kN8I4IVG7YReDax-kKMi3Ng/exec"; // Replace with your Apps Script Web App URL
    
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
