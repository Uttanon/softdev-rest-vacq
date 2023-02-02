const express = require("express");
const {
  getHospitals,
  createHospital,
  getHospital,
  updateHospital,
  deleteHospital,
} = require("../controllers/hospital");
const router = express.Router();
const app = express();

router.route("/").get(getHospitals).post(createHospital);
router
  .route("/:id")
  .get(getHospital)
  .put(updateHospital)
  .delete(deleteHospital);

module.exports = router;
