const express = require('express');
const port = 9999;
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.get('/', (req,res) => {
    res.send("Yo hello , have a Very good rest of your day");
})

app.post('/info', (req,res) => {
    try{
        const {Username,Email,Password} = req.body;
        if(!Username){
            return res.status(400).json({message : "Username cannot be empty"});
        }
        if(!Email){
            return res.status(404).json({message : "Email cannot be empty"});
        }
        const pass = Password.length();
        if(pass<8 || pass>16){
            return res.status(400).json({message : "Password length should be grater than 8 or less than or equal to 16"});
        }
        else{
            return res.status(200).json({message : "Successful"});
        }
    }
    catch(e){
        console.log(e.message);
    }
})
