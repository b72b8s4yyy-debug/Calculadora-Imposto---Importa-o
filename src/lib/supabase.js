import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const CLIENT_ID_KEY = "calc-import-client-id";

// Anonymous per-browser identifier used to link saved data — no login screen.
// Isolation relies on this id being unguessable (like a share link), not on
// server-side auth, since the app has no login step.
export function getClientId() {
  let id = localStorage.getItem(CLIENT_ID_KEY);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(CLIENT_ID_KEY, id);
  }
  return id;
}

export async function loadAppState(clientId) {
  const { data, error } = await supabase
    .from("app_state")
    .select("data")
    .eq("client_id", clientId)
    .maybeSingle();
  if (error) throw error;
  return data?.data ?? null;
}

export async function saveAppState(clientId, data) {
  const { error } = await supabase
    .from("app_state")
    .upsert({ client_id: clientId, data, updated_at: new Date().toISOString() });
  if (error) throw error;
}
