'use strict';

var mongoose = require('mongoose'),
    Article = mongoose.model('Article');

exports.article = function(req, res, next, id) {
    Article.load(id, function(err, article) {
        if (err) return next(err);
        if (!article) return next(new Error('Failed to load article ' + id));
        req.article = article;
        next();
    });
};

exports.show = function(req, res) {
    res.jsonp(req.article);
};