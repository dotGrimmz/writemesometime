const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WMSSchema = new Schema(
  {
    date: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    liked: {
      type: Boolean,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const WMSDomain = mongoose.model("WMSDomain", WMSSchema);

module.exports = WMSDomain;

const UserSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      trim: true,
      minlength: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
  },
  {
    timestamps: true,
  }
);

const UserDomain = mongoose.model("UserDomain", UserSchema);

module.exports = UserDomain;
