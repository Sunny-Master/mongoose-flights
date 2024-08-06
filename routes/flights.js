import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'

const router = Router()

// GET localhost:3000/flights
router.get('/', flightsCtrl.index)

// GET /flight/new
router.get('/new', flightsCtrl.new)

// GET /flights/:flightId
router.get('/:flightId', flightsCtrl.show)

// POST /flights
router.post('/', flightsCtrl.create)

// DELETE /flights/:flightId
router.delete('/:flightId', flightsCtrl.delete)

export { router }
