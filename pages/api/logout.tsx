/* eslint-disable import/no-anonymous-default-export */
export default function (req: any, res: any) {
if (req.method === 'POST') {
    res.setHeader('Set-Cookie', 'a_name=yrKim;Max-Age=0;HttpOnly,Secure');
    res.statusCode = 200;
    res.json({ message: 'ok' });
  
}
