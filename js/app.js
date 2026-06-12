(async () => {
  const session = await requireSession();
  if (!session) return;
  const officerEmail = document.getElementById('officerEmail');
  if (officerEmail) officerEmail.textContent = `Signed in as ${session.user.email}`;
})();
