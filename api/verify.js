export default function handler(req, res) {
  const current = new Date();
  const deadline = new Date("2025-12-31T23:59:59");

  if (current <= deadline) {
    res.status(200).json({ valid: true });
  } else {
    res.status(403).json({ valid: false });
  }
}
