const WMSDomain = require("../Domains/WMSDomain.js");
const UserDomain = require("../Domains/WMSDomain.js");

class WMSService {
  getAllMessages(req, res) {
    WMSDomain.find()
      .then((messages) => res.json(messages))
      .catch((err) => res.status(400).json("Error: " + err));
  }

  postMessage(req, res) {
    const date = req.body.date;
    const title = req.body.title;
    const message = req.body.title;
    const liked = req.body.liked;
    const newMessage = new WMSDomain({
      date,
      title,
      message,
      liked,
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

  async createNewUser(req, res) {
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
              res.status(200).send({ created: true, message: "User Saved" });
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

  async authenticateUser(req, res) {
    const userName = req.body.userName;
    const password = req.body.password;
    let validated = false;
    let wrongPassword = false;
    UserDomain.find()
      .then((users) => {
        users.forEach((user) => {
          if (user.userName === userName && user.password === password) {
            validated = true;
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
          res.status(200).send({ login: true, message: "User Logged In" });
        }
      })
      .catch((err) => {
        res.status(400).json("Error: " + err);
      });
  }
}

module.exports = WMSService;
