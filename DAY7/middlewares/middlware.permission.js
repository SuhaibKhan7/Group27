const permission = (req, res, next) => {
    if (req.url === '/data') {
        next();
    }
    else {
        res.send('Bye ..not allowed')
    }
}
module.exports = {
    permission
}