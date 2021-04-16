import { uploadImage } from "../../../src/services/image";
import runMiddleWare from "../../../src/utils/middlewares";
import upload from "../../../src/utils/multerImageConfig";

const CloudinaryImage = async (req, res) => {
  await runMiddleWare(req, res, upload.single("image"));

  try {
    const { api_key, api_secret, cloud_name } = req.body;
    const { public_id, secure_url, format } = await uploadImage({
      path: req.file.path,
      api_key,
      api_secret,
      cloud_name,
    });

    return res
      .status(200)
      .json({ status: "success", data: { public_id, secure_url, format } });
  } catch (error) {
    return res
      .status(500)
      .json({ status: "error", message: "something went wrong" });
  }
};

// this disables bodyParser so that streams can be used
export const config = {
  api: {
    bodyParser: false,
  },
};

export default CloudinaryImage;
