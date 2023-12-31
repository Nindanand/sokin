import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const user = await prisma.owner.findFirst();
    return res.status(200).json(user);
  }
  return res.status(405).json({ message: "Method unallowed" });
};
