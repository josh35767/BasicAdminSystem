const express = require('express');
const router  = express.Router();
const TicketModel = require('../models/ticket-model.js');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.post('/ticket', (req, res, next) => {
  const newTicket = new TicketModel({
    email: req.body.inputEmail,
    issue: req.body.inputIssue
  });

  newTicket.save((err) => {
    if (err) {
      next(err);
      return;
    }
    res.redirect('/submitted');
  });
});

router.get('/submitted', (req, res, next) => {
  res.render('submit');
});

module.exports = router;
