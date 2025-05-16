const { Ingredient } = require("../models/ingredient.model");

const createIngredient = async (req, res) => {
  // Crea un ingrediente en mi db
  try {
    const createdIngredient = new Ingredient(req.body);
    await createdIngredient.save();
    res.send(createdIngredient);
  } catch (error) {
    console.log(error);
    res.status(404).send({ error: error.name, message: error._message });
  }
};

const getIngredient = async (req, res) => {
  const ingredients = await Ingredient.find();
  res.send(ingredients);
};

module.exports = { createIngredient, getIngredient };
