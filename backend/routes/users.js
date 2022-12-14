const router = require("express").Router();
let User = require("../models/user.model");

// Create
router.route("/").post((req, res) => {
  let data = new User({
    name: req.body.name,
    city: req.body.city,
    age: req.body.age,
  });
  data
    .save()
    .then(() => res.json("User data Added Sucessfully..!"))
    .catch((err) => res.status(400).json("Error :" + err));
});

// Get Data
router.route("/").get((req, res) => {
  User.find()
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error :" + err));
});

// single user Data

router.route("/:id").get(async (req, res) => {
  try {
    const singleuser = await User.findById(req.params.id);
    console.log(singleuser);
    res.json(singleuser);
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
});

// Update
router.route("/update/:id").put((req, res) => {
  User.updateOne({
    $set: {
      name: req.body.name,
      city: req.body.city,
      age: req.body.age,
    },
  })
    .then(() => res.json("User Data Updated Sucessfully..!"))
    .catch((err) => res.status(400).json("Error :" + err));
});

router.route("/update/:id").put((req, res) => {
  User.updateOne({
    $set: {
      name: req.body.name,
      city: req.body.city,
      age: req.body.age,
    },
  })
    .then(() => res.json("User Data Updated Sucessfully..!"))
    .catch((err) => res.status(400).json("Error :" + err));
});

// Delete
router.route("/delete/:id").delete((req, res) => {
  User.findByIdAndRemove(req.params.id)
    .then(() => res.json("user data Deleted  Sucessfully..!"))
    .catch((err) => res.status(400).json("Error :" + err));
});

module.exports = router;
