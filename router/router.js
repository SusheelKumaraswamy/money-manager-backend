const express = require('express');
const router = express.Router();
const moneymodule = require('../module/module');

router.post('/add',moneymodule.addincomeexpence)

router.get('/findweeklydata',moneymodule.findoneweektransactions);

router.get('/monthlytransactions/:month',moneymodule.findanymonthtransaction);

router.get('/yearlytransaction/:year',moneymodule.findyearlytransactions);

router.get('/official',moneymodule.findofficial);

router.get('/personal',moneymodule.findpersonal);

router.get('/betweendates/:dates',moneymodule.findbetweendates);


module.exports = router;