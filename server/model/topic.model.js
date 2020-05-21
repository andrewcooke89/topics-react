const mongoose = require('../db');

const topicSchema = new mongoose.Schema({
  title: {type: String, required: true},
  score: {type: Number, default: 0},
  published_at: {type: Date, default: Date.now()}
});

const Topics = mongoose.model('Topics', topicSchema);

module.exports = Topics;