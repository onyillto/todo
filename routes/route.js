const express = require('express');
const router = express.Router();

const {createTask,getAllTask,getSingleTask,deleteTask,updateSingleTask} = require('../controller/controller')

router.get('/', getAllTask);
router.post('/', createTask);
router.get('/:id', getSingleTask);
router.patch('/:id', updateSingleTask);
router.delete('/:id', deleteTask);

module.exports = router;