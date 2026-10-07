// GET /api/me - who's logged in: {id, name, role} (Discord id, list name, "head"
// or "mod"), or 401.

import { json, jsonError, missingEnv, notSetUp } from "../_lib/http.js";
import { currentEditor } from "../_lib/session.js";

export async function onRequestGet({ request, env }) {
  const missing = missingEnv(env, ["SESSION_SECRET"]);
  if (missing) return notSetUp(missing);
  const ed = await currentEditor(request, env);
  return ed ? json({ id: ed.id, name: ed.name, role: ed.role }) : jsonError(401, "not logged in");
}
