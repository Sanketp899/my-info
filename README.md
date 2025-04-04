# QuantumFix Website

A modern business website with a React frontend and Django backend.

## Project Structure

- `frontend/`: React application built with Vite, TypeScript, Tailwind CSS, and Framer Motion
- `backend/`: Django REST API with PostgreSQL database

## Development Setup

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install the required dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Set up environment variables:
   ```bash
   cp .env.example .env
   # Edit the .env file with your settings
   ```

5. Run migrations:
   ```bash
   python manage.py migrate
   ```

6. Create a superuser (for admin access):
   ```bash
   python manage.py createsuperuser
   ```

7. Start the development server:
   ```bash
   python manage.py runserver
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   # Edit the .env file with your settings
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Production Deployment

### Backend Deployment

1. Set the necessary environment variables in your production environment:
   - Set `DEBUG=False`
   - Set `ALLOWED_HOSTS` to your domain(s)
   - Configure a production database
   - Set `SECURE_SSL_REDIRECT=True`
   - Set `SESSION_COOKIE_SECURE=True`
   - Set `CSRF_COOKIE_SECURE=True`

2. Collect static files:
   ```bash
   python manage.py collectstatic
   ```

3. Deploy to your hosting provider of choice (Heroku, AWS, DigitalOcean, etc.)

### Frontend Deployment

1. Build the frontend:
   ```bash
   npm run build
   ```

2. Deploy the contents of the `dist` directory to a static site hosting service (Netlify, Vercel, GitHub Pages, etc.)

## Features

- Modern, responsive design with smooth animations
- Contact form with validation
- Interactive UI elements
- Admin panel for managing contact submissions
- SEO-optimized
- Secure API endpoints

## Security

- Environment variables for sensitive data
- CSRF protection
- Secure cookies
- XSS protection
- Content security policies

## License

[MIT](LICENSE) 