// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  nombre: string
}

export default function handler( req: NextApiRequest, res: NextApiResponse<Data>) {

  console.log( req.cookies );

  res.status(200).json({ 
    nombre: 'John Doe',
    ...req.cookies
   })
}
