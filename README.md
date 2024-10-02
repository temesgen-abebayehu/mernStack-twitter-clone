# MERN Stack Twitter(X) Clone

This project is a **Twitter clone** built using the MERN (MongoDB, Express, React, Node.js) stack. It allows users to register, login, post tweets, like tweets, and more, mimicking some of the core functionalities of the Twitter(X) platform.

# To see live 
https://mernstack-twitter-clone-1.onrender.com/

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features
- User Authentication (Register/Login/Logout)
- Create and delete tweets
- Like and unlike tweets
- Responsive UI built with React and vite
- Backend API developed using Express and MongoDB
- Integration with **Cloudinary** for image storage

## Tech Stack
- **Frontend**: React, Redux
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Other Tools**: 
  - Cloudinary for media storage
  - JWT for user authentication
  - bcrypt for password hashing

## Installation

To run this project locally, follow these steps:

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Clone the repository

```bash
git clone https://github.com/temesgen-abebayehu/mernStack-twitter-clone.git
cd mernStack-twitter-clone
```

### Backend Setup

1. Install backend dependencies in main folder:

```bash
npm install
```

2. Create a `.env` file for the backend (follow the [Environment Variables](#environment-variables) section).

### Frontend Setup

1. Navigate to the frontend folder:

```bash
cd frontend
```

2. Install frontend dependencies:

```bash
npm install
```

### Running the Project Locally

To run both the backend and frontend locally:

1. From the root directory of the project, run the following to install all dependencies:

```bash
npm run build
```

2. Start the backend and frontend servers in production mode:

```bash
npm start
```

The backend will run on `http://localhost:5000`, and the frontend will run on `http://localhost:3000`.

## Environment Variables

Create a `.env` file in the `backend` directory with the following variables:

```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

These are essential for connecting to the database and integrating Cloudinary for media storage.

## Scripts

### Backend Scripts

- `npm run dev`: Runs the backend server in development mode using **nodemon**.
- `npm start`: Runs the backend server in production mode.

### Frontend Scripts

- `npm start --prefix frontend`: Starts the frontend development server.
- `npm run build --prefix frontend`: Builds the frontend app for production.

## Deployment

This project can be deployed on platforms like **Render** or **Heroku**. To deploy on Render, follow these steps:

1. Push the latest changes to your GitHub repository.
2. Create a new service on Render and connect it to your GitHub repo.
3. Set the **start command** in Render to:
   ```
   npm start
   ```
4. Add your environment variables in the Render dashboard under the "Environment" section.

## Contributing

Contributions are welcome! Please open a pull request or create an issue for any changes or suggestions.

## License

This project is licensed under the **ISC License**.
