var express = require('express');
var router = express.Router();

const nodemailerApi = require('../Api/nodemailer');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});




router.post('/', async (req, res, next) => {

  var preis = req.body.preis;
  var auftraggeber = req.body.auftraggeber;
  var ansprechpartner = req.body.ansprechpartner;
  var teilnehmer = req.body.teilnehmer;

  await nodemailerApi.sendMailToITC(req.body);
  await nodemailerApi.sendMailAuftraggeber(auftraggeber);
  await nodemailerApi.sendMailAuftraggeber(ansprechpartner);
  for (element of teilnehmer) {
    await nodemailerApi.sendMailTeilnehmer(element);
  }


  
  res.status(201).json({
    message: 'success'
  })
});

module.exports = router;
