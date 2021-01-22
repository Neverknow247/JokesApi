const Joke = require("../models/jokes.model");
const jokesRoutes = require("../routes/jokes.routes");

module.exports.findAllJokes = (req, res) => {
  Joke.find()
    .then(allDaUsers => res.json({ users: allDaUsers }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingleJoke = (req, res) => {
  Joke.findOne({ _id: req.params.id })
    .then(oneSingleUser => res.json({ user: oneSingleUser }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};
module.exports.findRandJoke = (req, res) => {

  return Joke.find().then((data)=> {
    let count = data.length
    let rand = Math.floor(Math.random() * count)
    res.status(200).send(data[rand])
  })
  .catch(err => res.status(500).json({ message: "Something went wrong", error: err }));
};

module.exports.createNewJoke = (req, res) => {
  Joke.create(req.body)
    .then(newlyCreatedUser => res.json({ user: newlyCreatedUser }))
    .catch(err => res.status(500).json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingJoke = (req, res) => {
  Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedUser => res.json({ user: updatedUser }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingJoke = (req, res) => {
  Joke.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};