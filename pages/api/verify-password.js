import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { enteredPassword, hashedPassword } = req.body;
  if (!enteredPassword || !hashedPassword)
    return res.status(400).json({ error: 'Both passwords are required' });

  try {
    const isMatch = await bcrypt.compare(enteredPassword, hashedPassword);
    return res.status(200).json({ match: isMatch });
  } catch (error) {
    return res.status(500).json({ error: 'Error comparing passwords' });
  }
}
