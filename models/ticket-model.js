const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ticketSchema = new Schema({
  email: {type: String},
  issue: {type: String},
  isOpen: {
    type: Boolean,
    default: true
  }
},
{
  timestamps: true
});

const TicketModel = mongoose.model('Ticket', ticketSchema);
module.exports = TicketModel;
