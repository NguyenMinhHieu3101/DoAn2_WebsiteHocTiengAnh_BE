const express = require("express");
const {
  getManagers,
  deleteManager,
} = require("../controllers/managerController");
const router = express.Router();

router.get("/getManagers", getManagers);
router.delete("/deleteManager/:id", deleteManager);

module.exports = router;
