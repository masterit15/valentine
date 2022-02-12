const express = require('express')
const db = require('./db')
const bodyParser = require('body-parser')
const cors = require('cors')
const { app, server } = require('./soket')

app.use(express.json({ extended: true }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors())
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // тут выставим домен с которым будет работать api
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

app.use(express.static(__dirname));
app.use('/api/subscribe', require('./routes/webpush.routes'))
app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/claims', require('./routes/claim.routes'))
app.use('/api/tml', require('./routes/timeline.routes'))
app.use('/api/notifycation', require('./routes/notifycation.routes'))
app.use('/api/users', require('./routes/user.routes'))
app.use('/api/chat', require('./routes/chat.routes'))
app.use('/api/upload', require('./routes/upload.routes'))
app.use('/api/departament', require('./routes/departament.routes'))

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'web', 'dist')))
}
const PORT = process.env.PORT ? process.env.PORT : 5000
const HOST = process.env.HOST || 'localhost' //'0.0.0.0'

async function start() {
    try {

        await db.authenticate();
        server.listen(PORT, HOST, () => console.log(`App has been started on port ${PORT}...`))
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      
      }
}

start()