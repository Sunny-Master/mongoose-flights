import { Flight } from "../models/flight.js"

function newFlight(req, res) {
  res.render('flights/new', {
    title: 'Add Flight'
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
    res.render('flights/index', {
      title: 'All Flights',
      flights
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

export {
  newFlight as new,
  create,
  index,
  show,
  deleteFlight as delete,
}
