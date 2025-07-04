import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { password } = req.body;
  if (!password) return res.status(400).json({ error: 'Password is required' });

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return res.status(200).json({ hashedPassword });
  } catch (error) {
    return res.status(500).json({ error: 'Error hashing password' });
  }
}
