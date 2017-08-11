const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ticketSchema = new Schema({
  email: {type: String},
  issue: {type: String}
},
{
  timestamps: true
});

const TicketModel = mongoose.model('Ticket', ticketSchema);
module.exports = TicketModel;
