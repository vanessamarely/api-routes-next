import { NextApiRequest, NextApiResponse } from "next";
import { promises as fs } from "fs";
import path from "path";


export function buildFilePath() {
  return path.join(process.cwd(), "data", "users.json");
}

export async function  extractUser(filePath: string) {
  const fileContents = await fs.readFile(filePath, "utf-8");
  console.log(fileContents)
  const data = JSON.parse(fileContents);
  console.log(data)
  return data;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //Find the absolute path of the json directory
  const jsonDirectory = buildFilePath();
  //Read the json data file data.json
  const fileContents = extractUser(jsonDirectory);
  //Return the content of the data file in json format
  res.status(200).json({ data: fileContents });
}
