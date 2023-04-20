import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
  email?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      //a get request
      res.status(200).json({ message: "Welcome!!" });
      break;
    case "POST":
      //a post request
      const { email, password } = req.body;
      res.status(200).json({ message: "Welcome!!", email });
      break;
    default:
      //a request that is not get or post
      res.status(405).end("Method Not Allowed");
      res.status(404).json({
        status: 404,
        message: "Not Found",
      });
      break;
  }
}
