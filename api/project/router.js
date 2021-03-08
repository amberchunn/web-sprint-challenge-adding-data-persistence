// build your `/api/projects` router here
// Dependencies
const express = require('express');
const Projects = require('./model');
const router = express.Router();


// GET All Projects
router.get('/', (req, res, next) => {
  Projects.find()
      .then((projects) => {
        res.status(200).json(projects);
      })
      .catch((err) => {
        res.status(500).json({message: 'Error receiving projects'})
      })
});

// GET Single Project Resources
router.get('/:id/resources', (req, res, next) => {
  const {id} = req.params;

  if (req.id == res.id) {
    Projects.findResources(id)
      .then(() => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(500).json({message: 'There was a problem with the server'})
      })
  }  else {
      res.status(404).json({message: 'No project found'})
    }
});

// GET Single Project Tasks
router.get('/:id/tasks', (req, res, next) => {
  if (req.params.id) {
    Projects.findTasks(req.params.id)
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(500).json({message: 'There was a problem with the server'})
      })
  }  else {
      res.status(404).json({message: 'No project found'})
    }
})

// INSERT New Project
router.post("/", (req, res) => {
  if (!req.body.name || !req.body.description) {
    res.status(400).json({message: 'Error: Please be sure to add a title and description'})
  }
  Projects.add(req.body)
      .then((body) => {
        res.status(201).json(body)
      })
      .catch((err) => {
        res.status(500).json({message: 'Error receiving projects'})
      })
})

module.exports = router;



// // PATCH Project
// router.patch("/:id", (req, res) => {
//   if (!req.params.id) {
//     console.log("No project with that id.")
//   }
//   Projects.update(req.params.id, req.body)
//     .then((project) => {
//       if (project) {
//         res.status(200).json(project)
//       } else {
//           res.status(404).json({message: "Not found"})
//       }
//     })
//     .catch(() => {
//       res.status(500).json({message: "There was an error updating the project"})
//     })
// })

// // DELETE Project
// router.delete("/:id", (req, res) => {
//   Projects.remove(req.params.id)
//     .then((count) => {
//       res.status(200).json(count)
//     })
//     .catch(() => {
//       res.status(500).json({message: "Could not delete project"})
//     })
// })
