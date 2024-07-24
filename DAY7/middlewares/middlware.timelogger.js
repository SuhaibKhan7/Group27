const timelogger = (req, res, next) => {
    let startTime = new Date().getTime()
    console.log(startTime);
    next();
    let endTime = new Date().getTime();
    console.log(endTime - startTime);
}
module.exports = {
    timelogger
}