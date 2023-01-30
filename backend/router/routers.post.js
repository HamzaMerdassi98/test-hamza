const express = require('express');
const router = express.Router();
const Post = require('../models/post');

Post= [
  { _id: "g456", titre: "TV", contenu: "éteint" },
  { _id: "r478", titre: "Micro Onde", contenu: "allumé" },
  { _id: "b785", titre: "Climatiseur", contenu: "éteint" },
  { _id: "t459", titre: "Four", contenu: "allumé" },
];

router.get('/', (req, res) => {
  Post.find().then(posts => res.json(posts));
});


router.get('/:id', (req, res) => {
  Post.findById(req.params.id).then(post => res.json(post));
});


router.post('/', (req, res) => {
  const newPost = new Post({
    titre: req.body.titre,
    contenu: req.body.contenu
  });
  newPost.save().then(post => res.json(post));
});


router.put('/:id', (req, res) => {
  Post.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(post =>
    res.json(post)
  );
});


router.delete('/:id', (req, res) => {
  Post.findByIdAndRemove(req.params.id).then(post => res.json({ success: true }));
});

module.exports = router;
