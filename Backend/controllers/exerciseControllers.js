const Exercise = require("../models/exercise");
const User = require ("../models/user")

const createExercise = async (req, res) => {
  try {
    const {
      body: {
        name,
        description,
        creator,
        category,
        level,
        equipment,
        instructions,
        targetMuscle,
        exerciseType,
        video,
        thumbnail,
      },
    } = req;
    const newExercise = await Exercise.create({
      name,
      description,
      creator,
      category,
      level,
      equipment,
      instructions,
      targetMuscle,
      exerciseType,
      video,
      thumbnail,
    });
    res
      .status(201)
      .json({ message: "new exercise created", data: newExercise });
  } catch (error) {
    res
      .status(500)
      .send({ message: "Something went wrong creating the exercise" });
    console.log("createExercise Controller", error);
  }
};

const getExercises = async (req, res) => {
  try {
    const response = await Exercise.find().populate("creator");
    res.send(response);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Something went wrong getting all th exercises" });
    console.log(error);
  }
};

module.exports = {createExercise, getExercises};