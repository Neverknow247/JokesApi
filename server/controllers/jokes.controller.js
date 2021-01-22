const Joke = require("../models/jokes.model");

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
module.exports.findRandomJoke = (req, res) => {
  Joke.count().exec(
    function(err, count){
    let random = Math.floor(Math.random()*count);
    Joke.findRandomOne().skip(random).then(randomOne => res.json({user: randomOne}));
    })
  }
  // Joke.findRandomOne()
  //   .then(randomOne => res.json({ user: randomOne }))
  //   .catch(err => res.json({ message: "Something went wrong!", error: err }));
// }

module.exports.createNewJoke = (req, res) => {
  Joke.create(req.body)
    .then(newlyCreatedUser => res.json({ user: newlyCreatedUser }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
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
