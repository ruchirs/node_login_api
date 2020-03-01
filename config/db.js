const mongoose = require("mongoose");

const MONGOURI = "mongodb+srv://<username>:<Password>@cluster0-gp4zx.mongodb.net/test?retryWrites=true&w=majority";

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true
    });
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;
