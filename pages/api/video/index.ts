import { NextApiRequest, NextApiResponse } from "next";

const CloudinaryVideo = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { video } = req.body;
    return res.status(200).json({ status: "success", data: { video } });
  } else {
    return res
      .status(401)
      .json({ status: "error", message: "invalid request method" });
  }
};

export default CloudinaryVideo;
