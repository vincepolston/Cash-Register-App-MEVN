const ticketModel = require('../models/ticketModel');
const mongodb = require('mongodb');


// create functions for GET/POST data from the movies collection
module.exports = {
    getTickets: async (req, res) => {
        const tickets = await ticketModel.loadTicketCollection();
        res.send(await tickets.find({}).toArray());
    }
}

