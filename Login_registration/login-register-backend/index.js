import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
app.use(express.json());
app.use(express.urlencoded());

app.use(cors());

mongoose.connect("mongodb+srv://cluster0.l67xa.mongodb.net/Login_registe", {
    userNewUrlParser:true,
    userUnifiedTopology: true
}, () => {
    console.log("connection sucessful");
})

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const User = new mongoose.model('login-Regi', userSchema);

app.post('/login', (req, res) => {
    res.send('simple api login');
})

app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    const user = new User({
        name,
        email,
        password
    });
    user.save(err => {
        if(err) {
            res.send(err);
        } else {
            res.send({ message: 'register sucessfully'});
        }
    })
    console.log(req.body);
})

app.listen(8002, () => {
    console.log('Running sucessful');
});