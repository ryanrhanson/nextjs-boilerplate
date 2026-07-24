import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    // Replace MY_SENSITIVE_VAR with your variable's key
    value: process.env.SENS_TEST_VAR ?? 'Variable not found',
  });
}
