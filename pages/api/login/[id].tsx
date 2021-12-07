// Dynamic API Routes
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  id: string | string[];
};

export default function isLogin(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ id: req.query.id });
}
