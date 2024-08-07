import { Flight } from "../models/flight.js"

function newFlight(req, res) {
  const departsDate = new Flight().departs
  const defaultDate = `${departsDate.toISOString().slice(0, 11)}${departsDate.toLocaleTimeString('it-IT')}`
  res.render('flights/new', {
    title: 'Add Flight',
    defaultDate
  })
}

async function create(req, res) {
  try {
    await Flight.create(req.body)
    res.redirect('/flights')
  } catch (error) {
    console.log(error)
    res.redirect('/')
  }
}

async function index(req, res) {
  try {
    const flights = await Flight.find({})
    const sortFlights = !!req.query['sort']
    res.render('flights/index', {
      title: 'All Flights',
      flights,
      sortFlights
    })
  } catch (error) {
    console.log(error)
    res.redirect('/')
  }
}

async function show(req, res) {
  try {
    const flight = await Flight.findById(req.params.flightId)
    res.render('flights/show', {
      title: 'Flight Details',
      flight
    })
  } catch (error) {
    console.log(error)
    res.redirect('/flights')
  }
}

async function deleteFlight(req, res) {
  try {
    await Flight.findByIdAndDelete(req.params.flightId)  
    res.redirect('/flights')
  } catch (error) {
    console.log(error)
    res.redirect('/flights')
  }
}

async function edit(req, res) {
  try {
    const flight = await Flight.findById(req.params.flightId)
    const departsDate = `${flight.departs.toISOString().slice(0, 11)}${flight.departs.toLocaleTimeString('it-IT')}`
    res.render('flights/edit', {
      title: 'Edit Flight',
      flight,
      departsDate
    })
  } catch (error) {
    console.log(error)
    res.redirect('/flights')
  }
}

async function update(req, res) {
  try {
    const flight = await Flight.findByIdAndUpdate(req.params.flightId, req.body, {new: true})
    res.redirect(`/flights/${flight._id}`)
  } catch (error) {
    console.log(error)
    res.redirect(`/flights/${req.params.flightId}`)
  }
}

async function createTicket(req, res) {
  try {
    // find the flight by id
    const flight = await Flight.findById(req.params.flightId)
    // save the ticket by pushing to flight.tickets array
    flight.tickets.push(req.body)
    // save the flight object in database
    await flight.save()
    // render the tickets on the show page
    res.redirect(`/flights/${req.params.flightId}`)
  } catch (error) {
    console.log(error)
    res.redirect(`/flights`)
  }
}

async function deleteTicket(req, res) {
  try {
    // find the flight by id
    const flight = await Flight.findById(req.params.flightId)
    // find the ticket by flight.tickets.id[._id] and delete
    flight.tickets.id(req.params.ticketId).deleteOne()
    // save flight object to database
    await flight.save()
    // render the updated flight details page
    res.redirect(`/flights/${flight._id}`)
  } catch (error) {
    console.log(error)
    res.redirect(`/flights`)
  }
}

export {
  newFlight as new,
  create,
  index,
  show,
  deleteFlight as delete,
  edit,
  update,
  createTicket,
  deleteTicket,
}
