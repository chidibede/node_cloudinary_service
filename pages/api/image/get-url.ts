import { NextApiRequest, NextApiResponse } from "next";

const CloudinaryImageUrl = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { resource_id } = req.body;
    return res.status(200).json({ status: "success", data: { resource_id } });
  } else {
    return res
      .status(401)
      .json({ status: "error", message: "invalid request method" });
  }
};

export default CloudinaryImageUrl;
