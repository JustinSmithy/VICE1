# LSPD VICE Unit Website

Static GitHub Pages website with Supabase Authentication.

## Setup
1. Upload these files to your GitHub Pages repo.
2. In Supabase, create a project.
3. Go to **Project Settings > API**.
4. Copy your Project URL and anon/public key.
5. Paste them into `js/config.js`.
6. In Supabase Auth, add officer users under **Authentication > Users**.
7. In Supabase Auth URL settings, add your GitHub Pages URL as an allowed site/redirect URL.

## Pages
- `index.html` public page + officer login
- `dashboard.html` protected officer dashboard

Motto: Disrupting Networks. Protecting San Andreas.
