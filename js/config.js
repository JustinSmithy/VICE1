window.SUPABASE_URL = "https://twdgwnbvpuwjwbbjfack.supabase.co";
window.SUPABASE_ANON_KEY = "sb_publishable_LzF2eh8Nvf8iGX0-5_izKw_7yuwV0Hw";

const { createClient } = supabase;

window.sb = createClient(
window.SUPABASE_URL,
window.SUPABASE_ANON_KEY
);
