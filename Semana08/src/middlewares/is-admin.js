

const isAdmin = (req, res, next) => {
    if (req.session.user && req.session.user.role == 'admin') {
        next();
    } else {
        // res.status(403).json({ message: 'Unauthorized' });
        res.redirect('sem-acesso.html')
    }
}

module.exports = isAdmin;