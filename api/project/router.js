// build your `/api/projects` router here
const express = require('express');
const Projects = require('./model');
const router = express.Router();


// GET All Projects
router.get('/', async (req, res) => {
  const projects = await req.body;
  try {
    Projects.find()
    res.status(200).json(projects);

  } catch (err) {
    res.status(500).json({message: 'Error receiving projects'})
  }
});

// INSERT New Project
router.post("/", async (req, res) => {
  router.post("/", async (req, res) => {
    const { project_name, project_description } = await req.body;
    try {
      if (!req.body.name) {
        res.status(400).json({message: 'Error: Project Name required'})
      } else {
        Resources.add(project_name, project_description)
        res.status(201).json(req.body)
      }
    } catch (err) {
      res.status(500).json({message: 'Error receiving projects'})
    }
  })

module.exports = router;
