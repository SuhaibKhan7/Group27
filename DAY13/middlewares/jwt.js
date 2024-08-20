var jwt = require('jsonwebtoken');
const jwtVerify = (req, res, next) => {

    const authHeader = req.headers.authorization
    console.log(authHeader)
    if (!authHeader) {
        res.status(400).send('Invalid Token')
    }
    const token = authHeader.split(' ')[1]
    console.log(token)
    try {
        var decoded = jwt.verify(token, process.env.JWTKEY);
        console.log('Decoded =' + decoded)
        req.user = decoded
        //user=ABCD
        next()
    } catch (error) {
        res.redirect('/')
    }




    res.send('Middlware')
}







const jwtGenerate = (username) => {
    return jwt.sign(username, process.env.JWTKEY)
}
module.exports = { jwtGenerate, jwtVerify }