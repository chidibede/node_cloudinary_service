import cloudinary from "cloudinary";

const cloudinaryConfig = (cloud_name, api_key, api_secret) => {
  const cloudinaryV2 = cloudinary.v2;
  cloudinaryV2.config({
    cloud_name: cloud_name || process.env.CLOUDINARY_CLOUD_NAME,
    api_key: api_key || process.env.CLOUDINARY_API_KEY,
    api_secret: api_secret || process.env.CLOUDINARY_API_SECRET,
  });
  return cloudinaryV2;
};

export default cloudinaryConfig;
