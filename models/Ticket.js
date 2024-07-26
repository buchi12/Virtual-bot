const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
    query: String,
    timestamp: { type: Date, default: Date.now },
    user: String // Optional field to store user information
});

module.exports = mongoose.model('Ticket', TicketSchema);
