// Create web server
// Create a new comment
// Get all comments
// Get a single comment
// Update a comment with id
// Delete a comment with id
// Delete all comments

// Import express
const express = require('express');

// Import comments controller
const comments = require('../controllers/comments');

// Create router
const router = express.Router();

// Create routes
router.post('/', comments.create);
router.get('/', comments.findAll);
router.get('/:id', comments.findOne);
router.put('/:id', comments.update);
router.delete('/:id', comments.delete);
router.delete('/', comments.deleteAll);

// Export router
module.exports = router;