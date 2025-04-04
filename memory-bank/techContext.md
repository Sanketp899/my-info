# Technical Context: QuantumFix Website

## Technologies Used

### Frontend
- **React**: JavaScript library for building user interfaces
- **Vite**: Build tool and development server
- **TypeScript**: Typed superset of JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for React
- **Axios**: HTTP client for API requests
- **React Router**: Client-side routing

### Backend
- **Django**: Python web framework
- **Django REST Framework**: Toolkit for building Web APIs
- **PostgreSQL**: Relational database
- **Psycopg2**: PostgreSQL adapter for Python
- **Django CORS Headers**: Middleware for handling CORS
- **Django Environ**: Environment variable management

## Development Setup

### Frontend Setup
1. **Node.js and npm/yarn/bun**: For package management
2. **Vite**: For development server and building
3. **ESLint and Prettier**: For code linting and formatting
4. **TypeScript**: For type checking

### Backend Setup
1. **Python**: Programming language
2. **Django**: Web framework
3. **PostgreSQL**: Database server
4. **Virtualenv/venv**: For Python environment isolation

### Running the Project
1. **Frontend**:
   ```bash
   cd frontend/animated-business-hub
   npm install
   npm run dev
   ```

2. **Backend**:
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   python manage.py migrate
   python manage.py runserver
   ```

## Technical Constraints

### Frontend Constraints
- Must use React with TypeScript
- Must implement Tailwind CSS for styling
- Must use Framer Motion for animations
- Must be responsive for all device sizes

### Backend Constraints
- Must use Django with Django REST Framework
- Must use PostgreSQL as the database
- Must implement proper CORS and CSRF protection
- Must handle form submissions and send auto-response emails

## Dependencies

### Frontend Dependencies
- react
- react-dom
- react-router-dom
- framer-motion
- axios
- tailwindcss
- typescript
- @types/react
- vite

### Backend Dependencies
- django
- djangorestframework
- django-cors-headers
- psycopg2-binary
- python-decouple (optional for environment variables)

## API Endpoints

- **POST /api/contact/**: Submit contact form data
- **GET /admin/**: Django admin interface

## Deployment Considerations

- Frontend can be deployed to services like Vercel, Netlify, or GitHub Pages
- Backend can be deployed to services like Render, Railway, or DigitalOcean
- Database can be hosted on services like AWS RDS, DigitalOcean, or Render
- Environment variables should be properly managed for production deployments 