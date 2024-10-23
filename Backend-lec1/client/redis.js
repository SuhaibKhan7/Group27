const Redis = require('ioredis')

const redis = new Redis({
    port: 13726, // Redis port
    host: 'redis-13726.c295.ap-southeast-1-1.ec2.redns.redis-cloud.com', // Redis host
    username: "default", // needs Redis >= 6
    password: 'o9ATYFqJCnTqZ0H9w8cBnu2XZZJK0tmZ',
});
module.exports = redis