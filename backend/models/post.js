const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const postSchema = new Schema({
  titre: { type: String, required: true },
  contenu: { type: String, required: true }
});

module.exports = mongoose.model('Post', postSchema);
