const express = require('express');
const http= require('http');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express();

app.use(cors());
app.use(express.json()); // support json encoded bodies
app.use(express.urlencoded({ extended: false })); // 

app.post('/register', function(req, res) {
    console.log("request value", req.body);   
    res.send(req.body);
})

app.post('/login', function(req, res) {
    console.log("request value", req.body); 
    const token = createAccessToken({ username: req.body.password }) 
    console.log("token", token);
    res.send({token});
})

const secret_token = "vishal";

function createAccessToken(username) {
    return jwt.sign(username, secret_token, {expiresIn : '1800s'});
}

http.createServer(app).listen(3001, () => {
    console.log("server is working fine working portal 3001");
});