import { NextApiRequest, NextApiResponse } from "next";

const CloudinaryVideoDelete = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "DELETE") {
    const id = req.query;
    return res
      .status(200)
      .json({ status: "success", message: "video deleted successfully!" });
  } else {
    return res
      .status(401)
      .json({ status: "error", message: "invalid request method" });
  }
};

export default CloudinaryVideoDelete;
