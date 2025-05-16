const express = require("express");
const router = express.Router();

const {
  createIngredient,
  getIngredient,
} = require("../controllers/ingredient.controller");

router.post("/", createIngredient);

router.patch("/:id", (req, res) => {
  // Actualizar un ingrediente
  res.send("Patch ingredient");
});

router.delete("/:id", (req, res) => {
  // Eliminar un ingrediente
  res.send("Delete ingredient");
});

router.get("/", getIngredient);

module.exports = router;
