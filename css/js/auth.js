const hasSupabaseConfig = () => window.SUPABASE_URL && !window.SUPABASE_URL.includes('YOUR-PROJECT') && window.SUPABASE_ANON_KEY && !window.SUPABASE_ANON_KEY.includes('YOUR_PUBLIC');
const client = hasSupabaseConfig() ? window.supabase.createClient(window.SUPABASE_URL, window.SUPABASE_ANON_KEY) : null;

async function signIn(email, password) {
  if (!client) throw new Error('Add your Supabase URL and anon key in js/config.js first.');
  const { error } = await client.auth.signInWithPassword({ email, password });
  if (error) throw error;
  window.location.href = 'dashboard.html';
}

async function signOut() {
  if (client) await client.auth.signOut();
  window.location.href = 'index.html';
}

async function requireSession() {
  if (!client) { window.location.href = 'index.html#login'; return null; }
  const { data } = await client.auth.getSession();
  if (!data.session) { window.location.href = 'index.html#login'; return null; }
  return data.session;
}

const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const msg = document.getElementById('authMessage');
    msg.textContent = 'Authenticating...';
    try { await signIn(document.getElementById('email').value, document.getElementById('password').value); }
    catch (err) { msg.textContent = err.message; }
  });
}

const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) logoutBtn.addEventListener('click', signOut);
