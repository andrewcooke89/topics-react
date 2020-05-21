const Topics = require('../model/topic.model');

exports.getTopics = async (req,res) => {
  try {
    const topics = await Topics.find();
    res.status = 200;
    res.json(topics);
  } catch (err) {
    res.sendStatus = 500;
  }
}

exports.postTopic = async (req, res) => {
  try {
    const {title} = req.body;
    const topic = await Topics.create({title});
    res.status = 201;
    res.json(topic);
  } catch (err) {
    res.sendStatus = 500;
  }
}

exports.deleteTopic = async (req, res) => {
  try {
    const response = await Topics.findByIdAndDelete({_id: req.params.id})
    res.status = 204;
    res.json(response);
  } catch (err) {
    res.sendStatus = 500;
  }
}

exports.updateVote = async (req, res) => {
  try {
    const dir = req.params.dir === 'up' ? 1 : -1
    const topic = await Topics.findByIdAndUpdate({_id: req.params.id}, {$inc: {score: dir}}, {new: true});
    res.sendStatus = 201;
    res.json(topic);
  } catch (err) {
    res.sendStatus = 500;
  }
}