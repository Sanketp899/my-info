"""
TASK SCRIPT: QuantumFix Website Project Audit & Auto-Fix
Purpose: Verify full setup of the Next.js + Django website.
Run in Cursor AI to automatically validate, flag, and optionally fix issues.
"""

# --- PROJECT STRUCTURE CHECK ---
Ensure folders exist:
- frontend/ (Next.js app)
- backend/ (Django project)
- backend/manage.py
- frontend/pages/index.tsx or .js
- Tailwind config file present
- PostgreSQL connected via Django settings

# --- FRONTEND FEATURE CHECKS ---
Open: frontend/
- [ ] Does `tailwind.config.js` exist and include custom colors like `#FAF1E6`, `#3C3D37`?
- [ ] Is Framer Motion imported and used in at least 1 component?
- [ ] Does `/pages/index.tsx` or `/pages/index.js` render a Hero section?
- [ ] Does the Contact Form exist with `name`, `email`, and `message` fields?
- [ ] Is metadata set using `<Head>` in `_app.tsx` or individual pages?

# --- BACKEND (DJANGO) CHECKS ---
Open: backend/
- [ ] Does settings.py include:
  - `'rest_framework'`, `'corsheaders'`, `'django.contrib.admin'`, and your custom apps?
  - `ALLOWED_HOSTS`, `CORS_ALLOWED_ORIGINS`, and database config for SQL?
- [ ] Is contact form data received via API? (Check for `/contact/` view or serializer)
- [ ] Is auto-response email sent using `send_mail` or similar function?
- [ ] Is admin panel customized to show:
  - Homepage Sections (Hero, Services, Testimonials)
  - Contact Submissions
- [ ] Check if CSRF is properly enabled and token is passed to frontend form

# --- CONNECTION TEST ---
Run:
- [ ] Test if frontend can make a request to Django (GET & POST)
- [ ] Validate CORS headers are properly set
- [ ] Confirm static files load in Django admin (for production)

# --- DEPLOYMENT CHECK (Optional) ---
- [ ] Is frontend set up for deployment to Vercel?
- [ ] Is backend configured for deployment (Render / Railway / DO)?
- [ ] Are `.env` or secret settings correctly managed (use `python-decouple`)?

# --- SECURITY CHECK ---
- [ ] CSRF Middleware enabled in Django
- [ ] Rate limit or throttling applied to API (optional)
- [ ] Admin panel password is strong (manual check)
- [ ] HTTPS enforced (for deployed version)

# --- SUGGESTED FIXES (Auto / Manual Prompt) ---
If any of the above is missing:
- Auto-create missing folders
- Suggest `npx create-next-app` for frontend or `django-admin startproject`
- Add missing Tailwind or Framer Motion imports
- Generate Django models or serializers if needed
- Suggest adding SEO meta tags
- Offer to configure email setup or CORS

