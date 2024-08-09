import { Meal } from "../models/meal.js"

async function newMeal(req, res){
  const meals = await Meal.find({})
  res.render('meals/new', {
    title: 'Add Meal',
    meals,
    mealExists: false,
  })
}

async function create(req, res) {
  try {
    const meals = await Meal.find({})
    let mealExists = false
    meals.forEach(meal => {
      if (meal.name === req.body.name) {
        mealExists = true
      }
    })
    if (mealExists) {
      return res.render('meals/new', {
        title: 'Add Meal',
        meals,
        mealExists
      })
    }
    const meal = await Meal.create(req.body)
    res.redirect('/meals/new')
  } catch (error) {
    console.log(error)
    res.redirect('/')
  }
}

export {
  newMeal as new,
  create,
}