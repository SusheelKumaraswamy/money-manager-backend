const express = require('express');
const app = express();
const dotenv = require('dotenv');
const port = process.env.PORT || 3000;
const db = require('./database');
const moneyroute = require('./router/router');
const cors = require('cors');

dotenv.config();

app.use(cors());

db.mongoatlasconnect();

app.use(express.json());


app.listen(port,()=>{
    console.log(`connected to port ${port}`);
});

app.use('/moneymanager',moneyroute);

app.use('/',(req,res,next)=>{
    res.send("Hello welcome to Money Manager 🔥");
})

