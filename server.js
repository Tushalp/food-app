const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDb = require("./config/db");


dotenv.config();


connectDb();


const app = express();


app.use(express.json());
app.use(morgan("dev"));


app.use("/api/v1/test", require("./routes/testRoutes"));
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/resturant", require("./routes/resturantRoutes"));
app.use("/api/v1/category", require("./routes/catgeoryRoutes"));
app.use("/api/v1/food", require("./routes/foodRoutes"));

app.get("/", (req, res) => {
  return res
    .status(200)
    .send("<h1>Welcome to Food Server APP  </h1>");
});

  
 const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
