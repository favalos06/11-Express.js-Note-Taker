const path = require('path')
const router = require('express').Router()

router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
})

///need to confirm how this should function
// router.get("/index", (req, res) => {
//   res.sendFile(path.join(__dirname, "../public/index.html"));
// });