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

router.get('/tickets', (req,res, next) => {
  TicketModel.find({})
  .sort({createdAt: 1})
  .exec((err, allTickets) => {
    if (err) {
      console.log(err);
      next(err);
      return;
    }
    console.log(allTickets);
    res.locals.tickets = allTickets;
    res.render('ticketlist');
  });
});

router.get('/close/:id' , (req, res, next) => {
  TicketModel.findByIdAndUpdate(req.params.id,
  {isOpen: false},
   (err) => {
    if (err) {
      next(err);
      return;
    }
    res.redirect('/tickets');

  });
});


module.exports = router;
