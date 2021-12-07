/* eslint-disable import/no-anonymous-default-export */
export default function (req: any, res: any) {
  if (req.method === 'POST') {
    res.setHeader('Set-Cookie', 'a_name=yrKim;Max-Age=3600;HttpOnly,Secure');
    res.statusCode = 200;
    res.json({ message: 'ok' });
  }

  // res.status(200).json({ name: null });
  // res.status(200).json({ name: 'yr Kim' });
}
