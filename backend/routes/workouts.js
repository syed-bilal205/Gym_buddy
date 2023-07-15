const router = require("express").Router();
const {
  getAllWorkouts,
  getSingleWorkouts,
  createWorkouts,
  deleteAllWorkouts,
  updateWorkouts,
} = require("../controllers/workouts");

// To get all workouts
router.get("/", getAllWorkouts);
// To get a single workout
router.get("/:id", getSingleWorkouts);
// To create a workout
router.post("/", createWorkouts);
// To update a workout
router.patch("/:id", updateWorkouts);
// To delete a workout
router.delete("/:id", deleteAllWorkouts);

module.exports = router;
