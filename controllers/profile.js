exports.getProfile = (req, res, next) => {
    res.render('profile/profile', {
        pageTitle: "Profile"
    });
}