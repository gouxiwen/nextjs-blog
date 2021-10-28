
   
import type { NextApiRequest, NextApiResponse } from 'next'
export default (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json({ 
      data: {
          name: ' hill',
          Phone: '1234567890'
      }
    })
  }