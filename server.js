const express = require("./node_modules/express");
const cors = require("cors");

const { Sequelize, Op } = require("sequelize");
const User = require("./User"); // Import model đã tạo trước đó

const sequelize = new Sequelize("login", "root", "0966314211", {
  host: "localhost",
  dialect: "mysql",
});

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

const app = express();
app.use(express.json());
app.use(cors(corsOptions));

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  User.create({
    username: username,
    password: password,
  })
    .then(() => {
      res.json({ success: true });
    })
    .catch((error) => {
      console.error("Failed to create a new record : ", error);
      res.json({ success: false });
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    console.log(`Server running on port ${PORT}`);
  } catch (error) {
    console.error("Unable to connect to the database: ", error);
  }
});
