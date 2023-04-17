const multer = require("multer");

const fileStorageUser = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images/users");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + "-" + file.originalname);
  },
});

const fileFilterUser = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: fileStorageUser,
  limits: {
    // batasan ukuran file
    fileSize: 1024 * 1024 * 5, // 5 MB
  },
  fileFilter: fileFilterUser,
});

module.exports = upload;
