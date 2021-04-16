import connectToDb from "../database/connection";
import cloudinarySchema from "../database/models";
import cloudinaryConfig from "../utils/cloudinaryConfig";

connectToDb()
  .then((res) => console.log("res"))
  .catch((err) => {
    throw err;
  });

export const uploadImage = async ({
  path,
  cloud_name,
  api_key,
  api_secret,
}: {
  path: string;
  cloud_name?: string;
  api_key?: string;
  api_secret?: string;
}) => {
  try {
    const cloudinary = cloudinaryConfig(cloud_name, api_key, api_secret);
    const response = await cloudinary.uploader.upload(path);
    const { public_id, secure_url, format } = response;

    // insert the response to your database for east query and manipulation
    // const newImage = new cloudinarySchema({
    //   file_id: public_id,
    //   url: secure_url,
    //   file_type: "image",
    //   cloud_name: cloud_name ? cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
    // });
    // await newImage.save();
    return { public_id, secure_url, format };
  } catch (error) {
    throw error;
  }
};
