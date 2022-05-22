const mongoose = require('mongoose');
const schema = mongoose.Schema;

const moneymanagerschema = new schema({
    income:{
        type:Number,
        required:true
    },
    expenditure:{
        type:Number,
        required:true
    },
    typeofexpense:{
        type:String,
        required:true,
        enum:['personal','official']
    },
    purposeofexpense:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true,
    },
    month:{
        type:Number
    },
    year:{
        type:Number
    }
})

const moneymanagermodel = mongoose.model('moneymanagers',moneymanagerschema);
module.exports = moneymanagermodel;