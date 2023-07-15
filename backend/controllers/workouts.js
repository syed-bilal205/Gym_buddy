const workout = require("../models/workouts");

// To get all workouts
const getAllWorkouts = async (req, res) => {
  try {
    const workouts = await workout.find();
    res.status(201).json(workouts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// To get a single workout

const getSingleWorkouts = async (req, res) => {
  const id = req.params.id;
  try {
    const workouts = await workout.findById(id);
    res.status(201).json(workouts);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
// To create a workout
const createWorkouts = async (req, res) => {
  const { title, reps, load } = req.body;
  const workouts = new workout({ title, reps, load });
  let emptyFields = [];
  if (!title) {
    emptyFields.push("title");
  }
  if (!load) {
    emptyFields.push("load");
  }
  if (!reps) {
    emptyFields.push("reps");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "PLEASE FILL ALL THe FIELDS", emptyFields });
  }
  try {
    await workouts.save();
    res.status(201).json(workouts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
// To update a workout

const updateWorkouts = async (req, res) => {
  const workouts = await workout.findById(req.params.id);
  if (!workouts) {
    res.status(400);
    throw new Error("Workout not found");
  }
  const updatedWorkout = await workout.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.json(updatedWorkout).status(200);
};
// To delete a workout

const deleteAllWorkouts = async (req, res) => {
  const id = req.params.id;
  try {
    const workouts = await workout.findOneAndDelete({ _id: id });
    res.status(201).json(workouts);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  getAllWorkouts,
  getSingleWorkouts,
  createWorkouts,
  updateWorkouts,
  deleteAllWorkouts,
};
