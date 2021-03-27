import { NextApiRequest, NextApiResponse } from "next";

const CloudinaryRaw = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { raw } = req.body;
    return res.status(200).json({ status: "success", data: { raw } });
  } else {
    return res
      .status(401)
      .json({ status: "error", message: "invalid request method" });
  }
};

export default CloudinaryRaw;
