// const express=require("express")
// const Router=express.Router()
// const UserController=require("../controller/userController")

// Router.post("/adduser",UserController.adduser)

// module.exports={
//     Router
// }

const express = require('express');
const User = require('../model/userModel');

const router = express.Router();

router.post('/createUser', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.get('/AllUser', async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  router.get('/userByID/:id', async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      res.status(404).json({ error: 'User not found' });
    }
  });
  router.delete('/Dltuser/:id', async (req, res) => {
    try {
     const deletedUser= await User.findByIdAndDelete(req.params.id);
      res.status(200).json(deletedUser);
    } catch (error) {
      res.status(404).json({ error: 'User not found' });
    }
  });
  router.put('/updateUser/:id', async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(404).json({ error: 'User not found' });
    }
  });
module.exports = router;


