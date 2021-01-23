import axios from 'axios'

const tickets = 'http://localhost:5000/api/tickets'

// define function to get data from tickets collection

class TicketService {
    static getTickets() {
        return new Promise(async (resolve, reject) => {
            try {

                const res = await axios.get(tickets);
                const data = res.data;

                resolve(
                    data.map(ticket => ({
                        ...ticket
                    }))
                );
            } catch (err) {
                reject(err)
            }
        })
    }
}

export default TicketService