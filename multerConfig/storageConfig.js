const multer = require("multer");

// storage config

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const filename = `image-${
      Date.now() + "-" + Math.round(Math.random() * 1e9)
    }`;
    cb(null, filename);
  },
});

// filter
const filefilter = (req, file, callback) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    callback(null, true);
  } else {
    callback(null, false);
    return callback(new Error("Only .png .jpg & .jpeg formatted Allowed"));
  }
};

const upload = multer({
  storage: storage,
  fileFilter: filefilter,
});

module.exports = upload;
