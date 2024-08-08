import { Meal } from "../models/meal.js"

async function newMeal(req, res){
  const meals = await Meal.find({})
  res.render('meals/new', {
    title: 'Add Meal',
    meals
  })
}

export {
  newMeal as new,
}