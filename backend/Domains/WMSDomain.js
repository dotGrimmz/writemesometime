const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WMSSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
    liked: {
      type: Number,
      required: true,
      trim: true,
    },
    userName: {
      type: String,
      required: true,
      trim: true,
    },
    userKey: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "UserDomain",
    },
  },
  {
    timestamps: true,
  }
);

const WMSDomain = mongoose.model("WMSDomain", WMSSchema);

module.exports = WMSDomain;
