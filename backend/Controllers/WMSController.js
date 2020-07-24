const router = require("express").Router();
const WMSService = require("../Service/WMSService.js");
const service = new WMSService();

router.route("/").get((req, res) => {
  return service.getAllPosts(req, res);
});

router.route("/:id").delete((req, res) => {
  return service.deleteMessage(req, res);
});

router.route("/register").post((req, res) => {
  return service.createNewUser(req, res);
});

router.route("/login").post((req, res) => {
  return service.authenticateUser(req, res);
});

router.route("/:id").get((req, res) => {
  return service.getAllUserPosts(req, res);
});

router.route("/newpost/:id").post((req, res) => {
  return service.postMessage(req, res);
});

module.exports = router;
