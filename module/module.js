const model= require('../model/model');

exports.addincomeexpence = async (req,res,next)=>{
    const data = await new model({...req.body});
    var date = req.body.date;
    var month = date.split("-")[1];
    var year = date.split("-")[0];
    try {
        data.month=month;
        data.year=year;
        var response =await data.save();
        res.send(response);
    } catch (error) {
        res.send(error);
    }
   
}

exports.findoneweektransactions = async (req,res,next)=>{
    var d = new Date();
   var today =(d.toISOString().split('T')[0]);
    (d.setDate(d.getDate() - 5));
   var weekday=(d.toISOString().split('T')[0]);
   console.log(today,weekday)

   const data = await model.find({$and: [{date:{$gte:weekday}},{date:{$lte:today}}]});
   res.send(data);

}

exports.findanymonthtransaction = async(req,res,next)=>{
    const data = await model.find({month:req.params.month});
    res.send(data);
}

exports.findyearlytransactions = async(req,res,next)=>{
    const data = await model.find({year:req.params.year});
    res.send(data);
}

exports.findofficial = async(req,res,next)=>{
    const data = await model.find({typeofexpense:"official"});
    res.send(data);
}

exports.findpersonal = async(req,res,next)=>{
    const data = await model.find({typeofexpense:"personal"});
    res.send(data);
}

exports.findbetweendates = async(req,res,next)=>{
    
    var dat = req.params.dates.split("+");
    //console.log(dat);
    var date1 = dat[0];
    var date2 = dat[1];
    const data = await model.find({$and: [{date:{$gte:date1}},{date:{$lte:date2}}]});

    res.send(data);
}