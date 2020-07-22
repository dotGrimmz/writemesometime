const WMSDomain = require("../Domains/WMSDomain");
const UserDomain = require("../Domains/UserDomain");
const mongoose = require("mongoose");

class WMSService {
  getAllMessages(req, res) {
    WMSDomain.find()
      .then((messages) => res.json(messages))
      .catch((err) => res.status(400).json("Error: " + err));
  }

  getAllUserMessages(req, res) {
    const userId = mongoose.Types.ObjectId(req.params.id);
    const userPosts = [];
    WMSDomain.find()
      .then((users) => {
        users.forEach((user) => {
          if (user._id === userId) {
            console.log("matching user id", user._id);
            userPosts.push(user);
          } else {
            console.log("this user had no posts");
          }
        });
      })
      .then(() => {
        console.log("these should be all the users posts?", userPosts);
      })
      .catch((err) => res.status(400).json("Error:" + err));
  }

  postMessage(req, res) {
    const message = req.body.message;
    const liked = req.body.liked;
    const userKey = mongoose.Types.ObjectId(req.params.id);
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const userName = req.body.userName;
    const newMessage = new WMSDomain({
      userName,
      firstName,
      lastName,
      message,
      liked,
      userKey,
    });

    newMessage
      .save()
      .then(() => res.json("Message Saved"))
      .catch((err) => res.status(400).json("Error:" + err));
  }

  deleteMessage(req, res) {
    WMSDomain.findByIdAndDelete(req.params.id)
      .then(() => res.json("Message DELETED"))
      .catch((err) => res.status(400).json("Error: " + err));
  }

  updateMessage(req, res) {
    WMSDomain.findById(req.params.id)
      .then((message) => {
        message.date = req.body.date;
        message.message = req.body.message;
        message.title = req.body.title;
        message.liked = req.body.liked;

        WMSDomain.save();
      })
      .then(() => res.json("Message Updated"))
      .catch((err) => res.status(400).json("Error: " + err));
  }

  createNewUser(req, res) {
    const userName = req.body.userName;
    const password = req.body.password;
    const newUser = new UserDomain({
      userName,
      password,
    });
    let existingUser = false;
    UserDomain.find()
      .then((users) => {
        users.forEach((user) => {
          if (user.userName === userName) {
            existingUser = true;
          }
        });
      })
      .then(() => {
        if (existingUser === false) {
          newUser
            .save()
            .then(() => {
              res.status(200).send({
                created: true,
                message: "User Saved",
              });
            })
            .catch((err) => res.status(400).json("Error:" + err));
        } else {
          res
            .status(200)
            .send({ created: false, message: "User Already Exists" });
        }
      })
      .catch((error) => {
        res.status(400).json("Error:", error);
      });
  }

  authenticateUser(req, res) {
    const userName = req.body.userName;
    const password = req.body.password;
    let validated = false;
    let wrongPassword = false;
    let userId = "";

    UserDomain.find()
      .then((users) => {
        users.forEach((user) => {
          if (user.userName === userName && user.password === password) {
            validated = true;
            userId = user._id;
          } else if (user.userName === userName && user.password !== password) {
            wrongPassword = true;
          }
        });
      })
      .then(() => {
        if (validated === false) {
          res.status(200).send({
            login: false,
            message: wrongPassword
              ? "Incorrect Password"
              : "User Does Not Exist",
          });
        } else {
          res
            .status(200)
            .send({ login: true, message: "User Logged In", userId: userId });
        }
      })
      .catch((err) => {
        res.status(400).json("Error: " + err);
      });
  }
}

module.exports = WMSService;
