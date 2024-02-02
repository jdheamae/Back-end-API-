const express = require("express");
const mongoose = require('mongoose')

const UserModel = require('./User')

const app = express();
const port = 3000; // Change the port number

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1/Lab',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then (db=> console.log('Database is connected'))
.catch(err => console.log(err));

app.get('/', (req, res) => {

    UserModel.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
});

app.get('/get/:id', (req, res)=>{
    const id = req.params.id
    UserModel.findById({_id: id})
        .then(post=> res.json(post))
        .catch(err=> console.json(err))
})
app.post('/create', (req, res)=>{
    UserModel.create(req.body)
        .then(user => res.json(user))
        .catch(err => res.json(err))
})
app.put('/update/:id', (req, res)=>{
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id: id},{
        name: req.body.name,
        email:req.body.email,
        age: req.body.age,
        title: req.body.title,
        isbn: req.body.isbn
    }).then(user => res.json(user))
        .catch(err => res.json(err))
})
app.delete('/deleteuser/:id', (req, res) =>{
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id: id})
        .then(response => res.json(response))
        .catch(err => res.json(err))
    
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
