
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  const { text } = req.body;

  console.log("Received text:", text);

  return res.status(200).json({ received: text });
}
