const express = require('express')
const db = require('./db')
const bodyParser = require('body-parser')
const cors = require('cors')
const { app, server } = require('./socket')

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
// app.use('/api/subscribe', require('./routes/webpush.routes'))
// app.use('/api/auth', require('./routes/auth.routes'))
// app.use('/api/claims', require('./routes/claim.routes'))
// app.use('/api/notifycation', require('./routes/notifycation.routes'))
app.use('/api', require('./routes/user.routes'))
app.use('/api', require('./routes/valentine.routes'))
app.use('/api', require('./routes/departament.routes'))
// app.use('/api/upload', require('./routes/upload.routes'))

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'web', 'dist')))
}
const PORT = process.env.PORT ? process.env.PORT : 5000
const HOST = process.env.HOST || 'localhost' //'0.0.0.0'

async function start() {
    try {
        await db.authenticate();
        server.listen(PORT, HOST, () => console.log(`Сервер запущен на порту ${PORT}...`))
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

start()