const path = require("path");
const router = require("express").Router();
const fs = require("fs");
const uuid = require("../helpers/uuid");
const savedNotes = require("../db/db.json");

router.get("/api/notes", (req, res) => {
  res.json(savedNotes);
});

router.post("/api/notes", (req, res) => {
  const title = req.body.title; 
  const text = req.body.text;

  if (title && text) {
    const savedNotes = fs.readFileSync(path.join(process.cwd(), "/db/db.json"));
    const parsedNotes = JSON.parse(savedNotes);
    parsedNotes.push({
      title,
      text,
      id: uuid(),
    });

    fs.writeFileSync(
      path.join(process.cwd(), "db/db.json"),
      JSON.stringify(parsedNotes)
    );
  }
});

// Export module
module.exports = router;
