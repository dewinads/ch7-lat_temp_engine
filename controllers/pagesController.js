const { Article } = require("../models");

exports.home = (req, res) => {
    const title = "Hello Mom",
    subTitle = "Welcome Mom";

    res.render("index", { title, subTitle });
};

exports.about = (req, res) => {
    res.render("about", { title: "About" });
};

exports.articles = (req, res) => {
    Article.findAll().then((articles) => {
        res.render("articles", { title: "Articles", articles });
    });
};