// const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const express = require('express');

 
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/auth/github', async (req, res) => {
    const code = req.query.code; // Get the 'code' parameter from the query string
    console.log("Authorization Code:", code);

    try {
        const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                client_id: 'Ov23liVth6nMARWLmzwI',
                client_secret: 'ffd072d378a3f48d067218f95c2d2f364fb4c7ed',
                code: code
            })
        });

        const token = await tokenResponse.json();
        console.log("Access Token:", token);

        res.send("Token received. Check console for details.");
    } catch (error) {
        console.error("Error fetching token:", error);
        res.status(500).send("Error during authentication");
    }
});






app.listen(4000, () => {
    console.log('Server is running on port 4000');
});




