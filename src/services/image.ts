import cloudinaryConfig from "../utils/cloudinary";

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
  const cloudinary = cloudinaryConfig(cloud_name, api_key, api_secret);
  const response = await cloudinary.uploader.upload(path);
  return response;
};
