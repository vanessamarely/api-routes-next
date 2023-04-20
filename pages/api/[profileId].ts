import { NextApiRequest, NextApiResponse } from "next";
import { extractUser, buildFilePath } from "./users";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { profileId } = req.query;

  if (req.method === "GET") {
    //a get request
    const filePath = buildFilePath();
    const fileContents = await extractUser(filePath);
    console.log(fileContents);
    const user = fileContents.find((user: any) => {
      console.log("user: ", user);
      return user.email === profileId;
    });
    res.status(200).json({ user });
  }
}
