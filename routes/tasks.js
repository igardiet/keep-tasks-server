const express = require('express');
const {
  postTask,
  getTasks,
  getTask,
  updateTask,
  deleteTask,
} = require('../controllers/taskController');
const { requireAuth } = require('../middleware/requireAuth');

const router = express.Router();
router.use(requireAuth); // require auth for all task routes

router.get('/', getTasks);
router.get('/:id', getTask);
router.post('/', postTask);
router.patch('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = router;
