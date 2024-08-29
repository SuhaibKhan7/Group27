// app.use(session({
//     store: new Filestore,
//     secret: process.env.SESSIONKEY,
//     saveUninitialized: true,
//     resave: false,
//     cookie: {
//         httpOnly: true,
//         secure: false,
//         maxAge: 1000 * 60 * 60
//     }
// }))

// app.get('/logout', (req, res) => {
//     req.session.destroy((error) => {
//         if (error) {
//             console.log('unable to destroy session')
//         }
//         req.cookies = '';
//         res.redirect('/')
//     })

// })