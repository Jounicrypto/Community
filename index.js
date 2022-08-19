const express = require('express');
const router = require('./router');
const session = require('express-session');
const bodyParser = require('body-parser');
const MongoDBstore = require("connect-mongodb-session")(session);

const app = express();
app.use(bodyParser.json());

const store = new MongoDBstore({
    uri: "mongodb+srv://adnan:12345@cluster0.pjnep.mongodb.net/test",
    collection:"mySessions",
});

app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(
    session({
    secret:"First nodejs project",
    resave: false,
    saveUninitialized:false,
    store: store,
    
}))

app.use(router);




require('./mongoose')

app.listen(2222, () => console.log('app is listening to port 2222 ...'));