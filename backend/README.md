# MedAware+ Backend Documentation

## Overview
MedAware+ is a web application designed to assist users in managing their medications effectively. This backend project is built using Node.js and Express, providing a RESTful API for the frontend application.

## Project Structure
The backend project is organized as follows:

```
backend/
├── src/
│   ├── app.ts               # Entry point of the application
│   ├── controllers/         # Contains business logic for routes
│   ├── routes/              # Defines API endpoints
│   ├── models/              # Mongoose models for the application
│   └── types/               # TypeScript interfaces for type definitions
├── package.json              # NPM configuration file
├── tsconfig.json             # TypeScript configuration file
└── README.md                 # Documentation for the backend project
```

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd MedAware+/backend
   ```

2. **Install Dependencies**
   Ensure you have Node.js installed. Then run:
   ```bash
   npm install
   ```

3. **Environment Variables**
   Create a `.env` file in the root of the backend directory and add your MongoDB connection string:
   ```
   MONGODB_URI=<your_mongodb_connection_string>
   ```

4. **Run the Application**
   Start the server using:
   ```bash
   npm start
   ```

5. **API Documentation**
   The API endpoints are defined in the `src/routes/index.ts` file. You can refer to this file for details on available routes and their usage.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.