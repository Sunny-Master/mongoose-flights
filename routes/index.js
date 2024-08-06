import { Router } from 'express'

const router = Router()

// GET localhost:3000/
router.get('/', function(req, res) {
  res.render('index', { title: 'MONGOOSE FLIGHTS' })
})

export { router }
