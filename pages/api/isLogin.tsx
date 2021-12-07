import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string | null;
};

export default function isLogin(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.statusCode = 200;
  res.json({ name: req.cookies.a_name });
  // res.status(200).json({ name: 'yr Kim' });
}
