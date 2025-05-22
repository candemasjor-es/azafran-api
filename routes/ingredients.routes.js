const express = require("express");
const router = express.Router();

const {
  createIngredient,
  getIngredient,
  patchIngrediente,
  deleteIngredient,
} = require("../controllers/ingredient.controller");

router.post("/", createIngredient);

router.patch("/:id", patchIngrediente);

router.delete("/:id", deleteIngredient);

router.get("/", getIngredient);

module.exports = router;
