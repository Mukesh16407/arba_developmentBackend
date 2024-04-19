const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const dbConfig = require("./config/dbConfig");
const errorMiddleware = require("./middleWares/error");

const app = express();
require("dotenv").config();
const cors = require("cors");

app.use(cors());
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
app.use("/uploads", express.static("./uploads"));
app.use("/files", express.static("./public/files"));

const port = process.env.PORT || 5000;

app.use(errorMiddleware);

app.listen(port, () =>
  console.log(`Node JS Server is running on port ${port}`)
);
