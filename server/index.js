const express = require("express");
const cors = require("cors");
const db = require("./configs/mongo");

const app = express();

let PORT = process.env.PORT || 8080;

db().catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", require("./routes/users"));

app.listen(PORT, (err) => {
  if (err) return console.error(err);
  console.log(`Server started listening at port ${PORT}`);
});
