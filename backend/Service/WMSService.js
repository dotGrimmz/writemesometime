const WMSDomain = require("../Domains/WMSDomain");
const UserDomain = require("../Domains/UserDomain");
const mongoose = require("mongoose");

class WMSService {
  getAllPosts(req, res) {
    WMSDomain.find()
      .then((messages) => res.send(messages))
      .catch((err) => res.status(400).json("Error: " + err));
  }

  getAllUserPosts(req, res) {
    const paramID = req.params.id;
    const userPosts = [];

    // saving this block of code as a refrence for now
    // UserDomain.find().then((accountOwners) => {
    //   console.log(
    //     "this should be ",
    //     accountOwners[Object.keys(accountOwners)[2]].userName,
    //     "account"
    //   );
    //   console.log(
    //     "this should be rakeems Id ",
    //     accountOwners[Object.keys(accountOwners)[2]]._id,
    //     "and this should be true if the param passed is equal to the db userId. user id:",
    //     userId,
    //     accountOwners[Object.keys(accountOwners)[2]]._id == paramID
    //   );
    // });

    WMSDomain.find()
      .then((posts) => {
        posts.forEach((post) => {
          if (post.userKey == paramID) {
            userPosts.push(post);
          }
        });
      })
      .then(() => {
        res.send(userPosts);
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

    console.log(newMessage);

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
            res.status(200).send(user);
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
        }
      })
      .catch((err) => {
        res.status(400).json("Error: " + err);
      });
  }
}

module.exports = WMSService;
