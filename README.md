# React Login System

A full-stack login system built with React (TypeScript), Node.js, Express, and MySQL. Features user registration, authentication, and a protected dashboard.

## Features

- 🔐 User Registration and Login
- 🛡️ JWT-based Authentication
- 🔒 Password Hashing with bcrypt
- 📱 Responsive Design
- 🎨 Modern UI with CSS animations
- 🔄 Protected Routes
- 📊 User Dashboard
- 🌐 CORS-enabled API
- 🏢 TypeScript Support

## Technology Stack

### Frontend
- React 18 with TypeScript
- Axios for API calls
- CSS3 with animations
- Responsive design

### Backend
- Node.js with Express
- JWT for authentication
- bcryptjs for password hashing
- CORS for cross-origin requests
- dotenv for environment variables

### Database
- MySQL
- Structured user table with indexes

## Project Structure

```
sathwik/
├── frontend/               # React TypeScript application
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── Login.tsx
│   │   │   ├── Login.css
│   │   │   ├── Register.tsx
│   │   │   ├── Register.css
│   │   │   ├── Dashboard.tsx
│   │   │   └── Dashboard.css
│   │   ├── services/       # API services
│   │   │   └── authService.ts
│   │   └── types/          # TypeScript type definitions
│   └── package.json
├── backend/                # Node.js Express server
│   ├── server.js          # Main server file
│   ├── database.sql       # Database setup script
│   ├── .env               # Environment variables
│   └── package.json
└── README.md
```

## Setup Instructions

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm (v6 or higher)
- MySQL Server (v5.7 or higher)
- Git

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd sathwik
```

### 2. Database Setup

1. Start your MySQL server
2. Open MySQL command line or a GUI tool like phpMyAdmin
3. Run the SQL script to create the database:

```bash
mysql -u root -p < backend/database.sql
```

Or copy and paste the content of `backend/database.sql` into your MySQL client.

### 3. Backend Setup

```bash
cd backend
npm install
```

#### Configure Environment Variables

1. Open `backend/.env` file
2. Update the database credentials:

```env
# Database Configuration
DB_HOST=localhost
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_NAME=login_system

# JWT Secret (change this to a secure random string)
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# Server Configuration
PORT=5000
```

#### Start the Backend Server

```bash
# Development mode with nodemon
npm run dev

# Or production mode
npm start
```

The server will start on `http://localhost:5000`

### 4. Frontend Setup

```bash
cd frontend
npm install
```

#### Start the Frontend Application

```bash
npm start
```

The React application will start on `http://localhost:3000`

## API Endpoints

### Authentication Endpoints

#### Register User
- **POST** `/api/register`
- **Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com", 
    "password": "password123"
  }
  ```

#### Login User
- **POST** `/api/login`
- **Body:**
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```

#### Get User Profile (Protected)
- **GET** `/api/profile`
- **Headers:** `Authorization: Bearer <jwt_token>`

#### Health Check
- **GET** `/api/health`

## Usage

1. Open `http://localhost:3000` in your browser
2. You'll see the login page
3. Click "Sign up here" to create a new account
4. Fill in the registration form and submit
5. After successful registration, you'll be logged in automatically
6. The dashboard will show your profile information
7. Use the logout button to sign out

## Features Overview

### Authentication Flow
1. User registers with name, email, and password
2. Password is hashed using bcrypt before storing
3. JWT token is generated upon successful login/registration
4. Token is stored in localStorage for persistent sessions
5. Protected routes verify JWT token before allowing access

### Security Features
- Passwords are hashed with bcrypt (10 rounds)
- JWT tokens expire after 24 hours
- Input validation on both frontend and backend
- CORS protection
- SQL injection protection through parameterized queries

### UI/UX Features
- Responsive design works on all screen sizes
- Loading states for better user experience
- Error handling with user-friendly messages
- Smooth CSS animations and transitions
- Modern gradient backgrounds
- Clean and intuitive interface

## Development

### Backend Development

```bash
cd backend
npm run dev  # Starts server with nodemon for auto-reload
```

### Frontend Development

```bash
cd frontend
npm start    # Starts development server with hot reload
```

### Database Management

The application automatically creates the users table if it doesn't exist. However, you may want to run the setup script initially:

```sql
-- In MySQL command line or GUI
source backend/database.sql;
```

## Testing

### Test User Account

The database setup includes a test user:
- **Email:** `test@example.com`
- **Password:** `password123`

You can use this account to test the login functionality immediately.

## Production Deployment

### Environment Variables

For production, make sure to update:

1. `JWT_SECRET` - Use a strong, random secret
2. `DB_PASSWORD` - Use a secure database password  
3. `DB_HOST` - Use your production database host
4. Update CORS origins in server.js if needed

### Build Frontend

```bash
cd frontend
npm run build
```

The built files will be in the `frontend/build` directory.

## Troubleshooting

### Common Issues

1. **Database Connection Error:**
   - Verify MySQL is running
   - Check database credentials in `.env`
   - Ensure database `login_system` exists

2. **CORS Errors:**
   - Ensure backend is running on port 5000
   - Check if frontend is making requests to correct URL

3. **JWT Token Issues:**
   - Check if JWT_SECRET is set in `.env`
   - Verify token is being sent in Authorization header

4. **Frontend Build Issues:**
   - Clear node_modules and reinstall: `rm -rf node_modules && npm install`
   - Check for TypeScript compilation errors

### Logs

Check the backend console for detailed error messages. The application logs:
- Database connection status
- Server startup confirmation
- API request errors
- Authentication failures

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and commit: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Create a Pull Request

## License

This project is licensed under the ISC License - see the package.json files for details.

## Support

If you encounter any issues or have questions, please create an issue in the repository or contact the development team.
