// build your `/api/tasks` router here
// Dependencies
const express = require('express');
const Tasks = require('./model');
const router = express.Router();


// GET All tasks
router.get('/', async (req, res, next) => {
  try {
    const tasks = await Tasks.find()
        res.status(200).json(tasks)
      } catch (err) {
       next(err)
    }
});

// INSERT New task
router.post("/", (req, res) => {
  if (!req.body.description) {
    return res.status(400).json({message: 'Error, description is required.'})
  }
    Tasks.add(req.body)
      .then((task) => {
        res.status(201).json(task)
      })
      .catch((err) => {
        res.status(500).json({message: 'Something went wrong', err})
      })
})

module.exports = router;

// // GET Single task
// router.get('tasks/:id', (req, res, next) => {
//   if (req.params.id) {
//     Tasks.get(req.params.id)
//       .then((data) => {
//         res.status(200).json(data);
//       })
//       .catch((err) => {
//         res.status(500).json({message: 'There was a problem with the server'})
//       })
//   }  else {
//       return res.status(404).json({message: 'No task found'})
//     }
// })

// // PATCH task
// router.patch("tasks/:id", (req, res) => {
//   if (!req.params.id) {
//     console.log("No task with that id.")
//     return null;
//   }
//   Tasks.update(req.params.id, req.body)
//     .then((task) => {
//       if (task) {
//         res.status(200).json(task)
//       } else {
//           res.status(404).json({message: "Not found"})
//       }
//     })
//     .catch(() => {
//       res.status(500).json({message: "There was an error updating the task"})
//     })
// })

// // DELETE task
// router.delete("tasks/:id", (req, res) => {
//   Tasks.remove(req.params.id)
//     .then((count) => {
//       res.status(200).json(count)
//     })
//     .catch(() => {
//       res.status(500).json({message: "Could not delete task"})
//     })
// })
