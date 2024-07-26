const express = require('express');
const router = express.Router();
const Ticket = require('../models/Ticket');

// Endpoint to create a new ticket
router.post('/create', async (req, res) => {
    const { query, user } = req.body;
    try {
        const newTicket = new Ticket({ query, user });
        await newTicket.save();
        res.json({ success: true, message: 'Ticket created', ticket: newTicket });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
});

// Endpoint to get all tickets (for admin view)
router.get('/all', async (req, res) => {
    try {
        const tickets = await Ticket.find();
        res.json({ success: true, tickets });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
});

module.exports = router;
