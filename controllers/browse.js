exports.getHome = (req, res, next) => {
    res.render('browse/home', {
        pageTitle: "Home",
    });
}