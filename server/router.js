const express = require('express');
const topicsController = require('./controller/topic.controller');

const router = express.Router();

router.get('/topics', topicsController.getTopics);
router.post('/topics', topicsController.postTopic);
router.delete('/topics/:id', topicsController.deleteTopic);
router.put('/topics/:id/:dir', topicsController.updateVote);


module.exports = router;