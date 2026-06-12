const $ = (s) => document.querySelector(s);

async function refreshAuthUI() {
  if (!window.sb) return;
  const { data } = await window.sb.auth.getSession();
  const session = data?.session;
  document.querySelectorAll('[data-auth="out"]').forEach(el => el.style.display = session ? 'none' : '');
  document.querySelectorAll('[data-auth="in"]').forEach(el => el.style.display = session ? '' : 'none');
  if ($('#officerEmail') && session?.user?.email) $('#officerEmail').textContent = session.user.email;
}

async function signIn(e) {
  e.preventDefault();
  const email = $('#email').value.trim();
  const password = $('#password').value;
  const status = $('#loginStatus');
  status.textContent = 'Checking credentials...';
  const { error } = await window.sb.auth.signInWithPassword({ email, password });
  if (error) {
    status.textContent = error.message;
    return;
  }
  location.href = 'dashboard.html';
}

async function signOut() {
  await window.sb.auth.signOut();
  location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', () => {
  refreshAuthUI();
  $('#loginForm')?.addEventListener('submit', signIn);
  $('#logoutBtn')?.addEventListener('click', signOut);
});
