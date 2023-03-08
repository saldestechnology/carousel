// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import cars from "../../public/api/cars.json";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Car[]>
) {
  res.status(200).json(cars);
}
