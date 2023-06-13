module.exports = (req, res, next) => {
    // req headers asjdjkashd

    if(valid) {
        next();
    } else {
        res.sendStatus(401);
    }
}