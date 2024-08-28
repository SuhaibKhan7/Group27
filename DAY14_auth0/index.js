// const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const express = require('express');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const app = express();

app.set('view engine',"ejs")

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/auth/github', async (req, res) => {
    const { code } = req.query; // Get the 'code' parameter from the query string
    console.log("Authorization Code:", code);

    try {
        const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                client_id: 'Ov23liLYCAQEuWMdzVdh',
                client_secret: 'aefbe3ca709ea8223356baa0a97d4fe59db74deb',
                code: code,
                redirect_uri: 'http://localhost:4000/auth/github'
            })
        });
        const token = await tokenResponse.json()
        console.log(token)

        const userdetails = await fetch('https://api.github.com/user', {
            headers: {
                Authorization: `Bearer ${token.access_token} `
            }
        })

        console.log(userdetails)
        const userinfo = await userdetails.json()
        console.log(userinfo)
        res.redirect('/dashboard')
 


    } catch (error) {
        console.error("Error fetching token:", error);
        res.status(500).send("Error during authentication");
    }

    res.send("Sign....")

});

app.get('/dashboard', (req, res) => {
    res.send("This is the Dashboard")
})




app.listen(4000, () => {
    console.log('Server is running on port 4000');
});




