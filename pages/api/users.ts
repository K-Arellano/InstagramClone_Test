import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const filePath = path.join(process.cwd(), 'Data', 'users.json');

  try {
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    const users = JSON.parse(jsonData);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load users' });
  }
}
