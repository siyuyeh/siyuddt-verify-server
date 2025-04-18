// api/verify.js
export default function handler(req, res) {
  const now = new Date();
  const expiryDate = new Date("2025-12-31");

  const isValid = now < expiryDate;

  res.status(200).json({ valid: isValid });
}
