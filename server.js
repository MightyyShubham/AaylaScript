import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/submitContact", async (req, res) => {
  try {
    const googleUrl = "https://script.google.com/macros/s/AKfycbytu_gjy6C9SGwKL_eXZrnc2SfLojRaLhruGOKMxsMhP6IFh2NdA2XKV2R-TzbA9yWuEA/exec"; // Replace with your Apps Script Web App URL
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
    const googleUrl = "https://script.google.com/macros/s/AKfycbyM8Q7Cq7iULhj48QsxRYHO9iEiWU0srlzPuso4z-L4ncAs4xxtpEX-Q5kkEtz7qRWMIQ/exec"; // Replace with your Apps Script Web App URL
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
    const googleUrl = "https://script.google.com/macros/s/AKfycby6L6wEpRshY7W4SmpRtjAcQYXE-H9Ts0VdTQh76CVt1uFhBS_A8217V2ioY3mbjahmpg/exec"; // Replace with your Apps Script Web App URL
    
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
