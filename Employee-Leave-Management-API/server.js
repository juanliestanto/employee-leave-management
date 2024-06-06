const express = require("express");
const cors = require("cors");
const db = require("./app/models");
const app = express();

const corsOptions = {
  origin: "*",
};

//register cors middleware
app.use(cors(corsOptions));
app.use(express.json());

//connect to database
const mongooseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

db.mongoose
  .connect(db.url, mongooseConfig)
  .then(() => console.log("database connected"))
  .catch((err) => {
    console.log(`failed connected ${err.message}`);
    process.exit;
  });

//register routes
require("./app/routes/employee.routes")(app);

const PORT = 8000;
app.listen(PORT, () => console.log(`server started on port ${PORT}`));


