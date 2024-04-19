const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const dbConfig = require("./config/dbConfig");
const cloudinary = require("cloudinary");
const errorMiddleware = require("./middleWares/error");

const app = express();
require("dotenv").config();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());

const auth = require("./routes/auth");
const category = require("./routes/category");
const product = require("./routes/product");

app.use("/api/v1", auth);
app.use("/api/v1", category);
app.use("/api/v1", product);

const port = process.env.PORT || 5000;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use(errorMiddleware);

app.listen(port, () =>
  console.log(`Node JS Server is running on port ${port}`)
);
