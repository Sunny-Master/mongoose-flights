import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'

const router = Router()

// GET localhost:3000/flights
router.get('/', flightsCtrl.index)

// GET /flight/new
router.get('/new', flightsCtrl.new)

// GET /flights/:flightId
router.get('/:flightId', flightsCtrl.show)

//GET /flights/:flightId/edit
router.get('/:flightId/edit', flightsCtrl.edit)

// POST /flights
router.post('/', flightsCtrl.create)

// POST /flights/:flightId/tickets
router.post('/:flightId/tickets', flightsCtrl.createTicket)


// DELETE /flights/:flightId
router.delete('/:flightId', flightsCtrl.delete)

// DELETE /flights/:flightId/:ticketId
router.delete('/:flightId/:ticketId', flightsCtrl.deleteTicket)

// PUT /flights/:flightId
router.put('/:flightId', flightsCtrl.update)

export { router }
