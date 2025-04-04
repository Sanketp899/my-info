# System Patterns: QuantumFix Website

## System Architecture
The QuantumFix website follows a decoupled architecture with separate frontend and backend components:

1. **Frontend (React/Vite)**
   - Single-page application
   - Component-based UI architecture
   - Client-side routing
   - API integration with backend

2. **Backend (Django)**
   - REST API for data exchange
   - Django admin for content management
   - PostgreSQL database for data storage
   - Email service integration

## Key Technical Decisions

### Frontend
1. **React/Vite**: Chosen for its performance and modern development experience
2. **Tailwind CSS**: Used for utility-first styling approach
3. **Framer Motion**: Implemented for smooth animations and transitions
4. **TypeScript**: Employed for type safety and better developer experience

### Backend
1. **Django**: Selected for its robust admin interface and security features
2. **Django REST Framework**: Used for API development
3. **PostgreSQL**: Chosen for reliable relational database capabilities
4. **CORS Middleware**: Implemented for secure cross-origin requests

## Design Patterns

### Frontend Patterns
1. **Component Composition**: UI built from reusable components
2. **Custom Hooks**: For encapsulating and reusing logic
3. **Context API**: For state management where needed
4. **Responsive Design**: Adapts to different screen sizes

### Backend Patterns
1. **MVC Architecture**: Django's model-view-controller pattern
2. **Serialization**: Converting model data to JSON for API responses
3. **Authentication**: Token-based authentication for secure access
4. **Form Processing**: Handling and validating form submissions

## Component Relationships

### Frontend Components
```
App
├── Layout
│   ├── Navbar
│   └── Footer
├── Pages
│   ├── Home
│   │   ├── Hero
│   │   ├── Services
│   │   └── Testimonials
│   └── Contact
│       └── ContactForm
└── UI Components
    ├── Button
    ├── Card
    └── RevealSection (Framer Motion)
```

### Backend Components
```
Django Project
├── Settings
├── URLs
├── Apps
│   └── ContactForm
│       ├── Models
│       ├── Views
│       ├── Serializers
│       ├── URLs
│       └── Admin
└── Database
    └── PostgreSQL
```

## Data Flow
1. User submits contact form on frontend
2. Frontend validates data and sends POST request to backend API
3. Backend validates data, saves to database, and sends auto-response email
4. Backend returns success/failure response to frontend
5. Frontend displays appropriate feedback to user 