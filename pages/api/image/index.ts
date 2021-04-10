import { uploadImage } from "../../../src/services/image";
import upload from "../../../src/utils/multerImageConfig";

//TODO:transform image and reduce the size
//TODO:send the response to mongodb

// Middleware Function to be used in the route 
const runMiddleWare = (req, res, fn) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
};

const CloudinaryImage = async (req, res) => {
  await runMiddleWare(req, res, upload.single("image"));
  try {
    const { image, api_key, api_secret, cloud_name } = req.body;
    console.log(req.file);
    const response = await uploadImage({
      path: req.file.path,
      api_key,
      api_secret,
      cloud_name,
    });
    return res.status(200).json({ status: "success", data: { response } });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: "error", message: "something went wrong" });
  }
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default CloudinaryImage;
