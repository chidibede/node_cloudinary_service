import cloudinaryConfig from "../utils/cloudinaryConfig";
import prisma from "../prisma";

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
    const res = await prisma.file.create({
      data: {
        id: public_id,
        link: secure_url,
        cloudinaryName: cloud_name
          ? cloud_name
          : process.env.CLOUDINARY_CLOUD_NAME,
        type: "image",
      },
    });
    await prisma.$disconnect();
    return {
      public_id,
      secure_url,
      format,
      cloudinary_name: res.cloudinaryName,
    };
  } catch (error) {
    throw error;
  }
};
