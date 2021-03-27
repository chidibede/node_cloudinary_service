import { NextApiRequest, NextApiResponse } from "next";

const CloudinaryImage = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { image } = req.body;
    return res.status(200).json({ status: "success", data: { image } });
  } else {
    return res
      .status(401)
      .json({ status: "error", message: "invalid request method" });
  }
};

export default CloudinaryImage;
