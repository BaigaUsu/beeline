import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const vacancyData = req.body;
      console.log('Received vacancy data:', vacancyData);
      res.status(200).json({ message: 'Vacancy data saved successfully' });
    } catch (error) {
      console.error('Error:', error);
      console.error('Request body:', req.body);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}