const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  throw new Error("Not implemented");
});

router.get("/", (req, res) => {
  throw new Error("Not implemented");
});

router.delete("/:id", (req, res) => {
  throw new Error("Not implemented");
});

module.exports = router;
