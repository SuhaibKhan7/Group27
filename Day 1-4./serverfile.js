//Package: Bahut saare modules
//Module: Ek jar with bahut sari toffees
const http = require('node:http');
const fs = require('fs');
const path = require('path');
//http contains various functionality
const host = '127.0.0.1';
const port = 5000;
let arrayofusers = [];
//data ko todna server p aane pr data extract by req
//server kya response krega ye res se hoga
const server = http.createServer((req, res) => {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method == 'OPTIONS') {
        res.writeHead(200)
        res.end();
        return;
    }
    if (req.url == '/') {

        const filepath = path.join(__dirname, 'dist', 'index.html')

        fs.readFile(filepath, (err, data) => {
            res.writeHead(200, 'Content-Type', 'text/html')
            res.end(data);
        })

    }
    else if (req.method === 'POST' && req.url === '/SignUp') {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString();
        })
        req.on('end', () => {
            const { username, password } = JSON.parse(body);
            console.log(username);
            console.log(password);

            if (!username || !password) {
                res.statusCode = 400;
                res.end(JSON.stringify({ message: 'Not a valid request' }))
                return;
            }
            else {
                arrayofusers.push({ username, password })
                fs.appendFile('abc.txt', `${username}\n`, function (error) {

                })
                fs.readFile('abc.txt', 'utf8', function (error, data) {
                    if (error) {
                        console.log(error);
                    }
                    else {
                        const userlist = data.split('\n')
                    }
                })




                res.statusCode = 200;
                res.end(JSON.stringify({ users: arrayofusers }))
                return;
            }
            //res.statusCode = 200;   //It means ok
            //res.end(JSON.stringify({message:'Sign in Successfull'}))

        })
    }



    else if (req.method === "PATCH" && req.url === '/Update') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        }
        )
        req.on('end', () => {
            const { oldusername, newusername } = JSON.parse(body);
            const userindex = arrayofusers.findIndex(usr => usr.username === oldusername)
            if (userindex === -1) {
                res.statusCode = 404;
                res.end(JSON.stringify({ message: "User not found" }))
                return;
            }
            else {
                console.log('else')
                console.log(arrayofusers[userindex].username)
                arrayofusers[userindex].username = newusername;
                console.log(arrayofusers[userindex].username)
                res.statusCode = 200;
                res.end(JSON.stringify({ users: arrayofusers }))
                return;
            }
        })
    }
    else {
        res.statusCode = 501;
        res.end('How are you')
    }

})
server.listen(port, host, () => {
    console.log(`Server running at   ${host}:`)
})