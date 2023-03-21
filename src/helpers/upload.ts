import multer, { diskStorage, memoryStorage } from "multer";

const storage = diskStorage({
  destination: function (req, file, cb) {
    cb(null, "src/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname.trim());
  },
});

const upload = multer({ storage: storage });

export { upload };
