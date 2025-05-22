const express = require("express");
const router = express.Router();
const { getRecipes } = require("../controllers/recipe.controller");

router.get("/", getRecipes);

module.exports = router;
