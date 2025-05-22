const { Ingredient } = require("../models/ingredient.model");

const createIngredient = async (req, res) => {
  // #swagger.tags = ['Ingredients']
  // #swagger.summary = 'Para crear ingredientes'
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
  // #swagger.tags = ['Ingredients']
  // #swagger.summary = 'Para get ingredientes'
  const ingredients = await Ingredient.find();
  res.send(ingredients);
};

const patchIngrediente = async (req, res) => {
  // #swagger.tags = ['Ingredients']
  // #swagger.summary = 'Para patch ingredientes'

  res.send("Patch ingredient");
};

const deleteIngredient = async (req, res) => {
  // #swagger.tags = ['Ingredients']
  // #swagger.summary = 'Para borrar ingredientes'
  res.send("Delete ingredient");
};
module.exports = {
  createIngredient,
  getIngredient,
  patchIngrediente,
  deleteIngredient,
};
