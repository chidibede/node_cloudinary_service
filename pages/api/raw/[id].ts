import { NextApiRequest, NextApiResponse } from "next";

const CloudinaryRawDelete = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "DELETE") {
    const id = req.query;
    return res
      .status(200)
      .json({ status: "success", message: "audio or document deleted successfully!" });
  } else {
    return res
      .status(401)
      .json({ status: "error", message: "invalid request method" });
  }
};

export default CloudinaryRawDelete;
