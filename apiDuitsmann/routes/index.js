var express = require('express');
var router = express.Router();

const database = require('../api/database');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/validateData', async (req, res, next) => {

  var data = {
    firstName: req.body.firstName || '',
    lastName: req.body.lastName || '',
    email: req.body.email || '',
    phone: req.body.phone || '',
    betreff: req.body.betreff || '',
    nachricht: req.body.nachricht || '',
    niederlassung: req.body.niederlassung || ''
  }
  console.log(data);
  var sql = 'INSERT INTO Kontaktformular (vorname, nachname, telefonnummer, email, niederlassung, betreff, nachricht) VALUES (?,?,?,?,?,?,?)';
  var variables = [data.firstName, data.lastName, data.phone, data.email, data.niederlassung, data.betreff, data.nachricht];
  await database.queryDB(sql, variables);
  res.send(200);
});

module.exports = router;
