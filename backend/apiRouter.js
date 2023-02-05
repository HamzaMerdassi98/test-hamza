var express = require('express');
var postCtrl = require('./routes/postCtrl')

exports.router = (function () {
  var apiRouter = express.Router();
  apiRouter.route('/posts/get-all').get( postCtrl.getAll);

})
