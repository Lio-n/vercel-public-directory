import { test } from "./index";

export default function handle(req, res) {
  res.status(200).json({
    body: req.body,
    query: req.query,
    cookies: req.cookies,
    test: test(),
  });
}
