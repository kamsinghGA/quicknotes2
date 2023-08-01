const Note = require('../../models/note')

module.exports = {
    create,
    findNoteByUser
}

async function create(req,res) {
    console.log(req.body);
    let newN = await Note.create(req.body);
    res.json(newN);
}

async function findNoteByUser(req, res) {
    let n = await Note.find(req.body.user);
    res.json(n);
}
