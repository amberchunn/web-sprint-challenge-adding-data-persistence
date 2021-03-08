// build your `/api/resources` router here
// Dependencies
const express = require('express');
const Resources = require('./model');

const router = express.Router();


// GET All resources
router.get('/', (req, res, next) => {
  Resources.find()
      .then((resources) => {
        res.status(200).json(resources)
      })
      .catch((err) => {
        res.status(500).json({message: 'Error receiving resources'})
      })
});

// GET Single Resource Projects
router.get('/:id/projects', (req, res, next) => {
  if (req.params.id) {
    Resources.findProjects(req.params.id)
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(500).json({message: 'There was a problem with the server'})
      })
  }  else {
      res.status(404).json({message: 'No project found'})
    }
});

// INSERT New resource
router.post("/", (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({message: 'Error: Please be sure to add a title and description'})
  }
    Resources.add(req.body)
      .then((resource) => {
        res.status(201).json(resource)
      })
      .catch((err) => {
        res.status(500).json({message: 'Something went wrong', err})
      })
})

module.exports = router;


// // GET Single resource
// router.get('/resources/:id', (req, res, next) => {
//   if (req.params.id) {
//     Resources.get(req.params.id)
//       .then((data) => {
//         res.status(200).json(data);
//       })
//       .catch((err) => {
//         res.status(500).json({message: 'There was a problem with the server'})
//       })
//   }  else {
//       return res.status(404).json({message: 'No resource found'})
//     }
// })

// // PATCH resource
// router.patch("/resources/:id", (req, res) => {
//   if (!req.params.id) {
//     console.log("No resource with that id.")
//     return null;
//   }
//   Resources.update(req.params.id, req.body)
//     .then((resource) => {
//       if (resource) {
//         res.status(200).json(resource)
//       } else {
//           res.status(404).json({message: "Not found"})
//       }
//     })
//     .catch(() => {
//       res.status(500).json({message: "There was an error updating the resource"})
//     })
// })

// // DELETE resource
// router.delete("/resources/:id", (req, res) => {
//   Resources.remove(req.params.id)
//     .then((count) => {
//       res.status(200).json(count)
//     })
//     .catch(() => {
//       res.status(500).json({message: "Could not delete resource"})
//     })
// })
