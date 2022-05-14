export default function handle(req, res) {
  res.status(200).json({
    body: req.body,
    query: req.query,
    cookies: req.cookies,
    index: true,
  });
}

export function test() {
  return "Soy la funcion de test";
}
