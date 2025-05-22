const getRecipes = async (req, res) => {
  // #swagger.tags = ['Recipes']
  // #swagger.summary = 'Para guardar Recipes'
  res.send("Recipes by saved ingredients");
};

module.exports = {
  getRecipes,
};
