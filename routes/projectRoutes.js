const express = require("express");
const router = express.Router();
const { 
    addProject,
    showProjects,
} = require('../controllers/projectController.js');
const projectRules=require('../validators/projectValidator.js');    

router.post('/addProject', projectRules, addProject);
router.get('/showProjects', showProjects);
module.exports = router;