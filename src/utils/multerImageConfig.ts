import  multer from 'multer'
import path from "path";

// Multer config
const imageUpload = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    const extension = path.extname(file.originalname);  
    if (extension !== ".jpg" && extension !== ".jpeg" && extension !== ".png") {
      cb(null, false);
      return;
    }
    cb(null, true);
  },
});


export default imageUpload
