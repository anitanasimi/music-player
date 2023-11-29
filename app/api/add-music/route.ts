// pages/api/add-music.ts

import type { NextApiRequest, NextApiResponse } from 'next'
import formidable from 'formidable'

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const form = new formidable.IncomingForm()

  form.parse(req, async (err, fields, files) => {
    if (err) {
      res.status(500).json({ error: 'Error parsing the form data' })
      return
    }

    // Your form data will be available in fields
    console.log(fields)

    // You can send a response back to the client
    res.status(200).json({ message: 'Success' })
  })
}
