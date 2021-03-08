// build your `/api/tasks` router here
const express = require('express');
const Tasks = require('./model');
const router = express.Router();


// GET All tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Tasks.find()
    res.status(200).json(tasks);

  } catch (err) {
    res.status(500).json({message: 'Error receiving tasks'})
  }
});

// INSERT New task
router.post("/", async (req, res) => {
  const { task_description, task_notes, task_completed, project_id } = await req.body;
  try {
    if (!req.body.task_description || !project_id) {
      res.status(400).json({message: 'Error: Task Description & Project Id required'})
    } else {
      Tasks.add(task_description, task_notes, task_completed, project_id)
      res.status(201).json(req.body)
    }
  } catch (err) {
    res.status(500).json({message: 'Error receiving tasks'})
  }
})

module.exports = router;
