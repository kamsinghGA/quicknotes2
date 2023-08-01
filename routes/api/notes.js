const express = require("express");
const router = express.Router();
const noteCtrl = require("../../controllers/api/notes");
// all route begin with /api/notes

//post new note
router.post("/", noteCtrl.create);
//get all notes
router.post("/userNote", noteCtrl.findNoteByUser);

module.exports = router;