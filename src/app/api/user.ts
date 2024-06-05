// pages/api/user.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth/next';
import { authConfig } from '../../../../../configs/auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authConfig);

  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  // Fetch user data from your backend
  const response = await fetch(`https://ttraining548.pythonanywhere.com/api/v1/user/${session.user.id}`, {
    headers: {
      'Authorization': `Token ${session.user.token}`,
    },
  });

  if (!response.ok) {
    return res.status(response.status).json({ message: 'Failed to fetch user data' });
  }

  const user = await response.json();
  return res.status(200).json(user);
}