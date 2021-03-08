// build your `/api/resources` router here
const express = require('express');
const Resources = require('./model');
const router = express.Router();


// GET All resources
router.get('/', async (req, res) => {
  try {
    const resources = await Resources.find()
    res.status(200).json(resources);

  } catch (err) {
    res.status(500).json({message: 'Error receiving resources'})
  }
});

// INSERT New Resource
router.post("/", async (req, res) => {
  const { resource_name, resource_description } = await req.body;
  try {
    if (!req.body.name) {
      res.status(400).json({message: 'Error: Resource Name required'})
    } else {
      Resources.add(resource_name, resource_description)
      res.status(201).json(req.body)
    }
  } catch (err) {
    res.status(500).json({message: 'Error receiving resources'})
  }
})

module.exports = router;
