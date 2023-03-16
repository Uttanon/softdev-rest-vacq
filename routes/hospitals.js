const express = require("express");
const {
  getHospitals,
  createHospital,
  getHospital,
  updateHospital,
  deleteHospital,
} = require("../controllers/hospital");
const { protect, authorize } = require("../middleware/auth");
const appointmentRouter = require("./appointments");
const router = express.Router();
const app = express();

router.use("/:hospitalId/appointments/", appointmentRouter);

router
  .route("/")
  .get(getHospitals)
  .post(protect, authorize("admin"), createHospital);
router
  .route("/:id")
  .get(getHospital)
  .put(protect, authorize("admin"), updateHospital)
  .delete(protect, authorize("admin"), deleteHospital);

module.exports = router;
