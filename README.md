# Node CRUD API

1.Project Structure
Modular Code
Error Handling
Validation
Environment Configuration
Logging
Security
Clean Code Practices
Documentation


node-crud-api/
├── config/
│   └── db.js                # MongoDB connection
├── controllers/
│   └── userController.js     # Logic for user routes
├── models/
│   └── userModel.js          # Mongoose schema
├── routes/
│   └── userRoutes.js         # Define routes here
├── middlewares/
│   └── validateUser.js       # Middleware for request validation
├── utils/
│   └── logger.js             # Logging utility
├── app.js                    # Main application file
└── .env                      # Environment variables

express: Web framework.
mongoose: MongoDB ORM.
body-parser: Middleware to parse incoming request bodies.
dotenv: For environment variables.
joi: For input validation.
winston: For logging.

1.Install Dependencies
npm init -y
npm install express mongoose body-parser dotenv joi winston
2.Create app.js (Main File)
3.config/db.js (Database Connection)
4.Create models/userModel.js (Mongoose Schema)
5.Create controllers/userController.js (Controller Logic)
6.Create routes/userRoutes.js (Define Routes)
7.Create utils/logger.js (Logging Utility)
8.Add .env File
done Setup
npm install
run
node app.js
Server is running on http://localhost:{port}




This is a simple CRUD (Create, Read, Update, Delete) API built with Node.js, Express, and MongoDB.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: [Install Node.js](https://nodejs.org/)
- **MongoDB**: [Install MongoDB](https://www.mongodb.com/try/download/community) (if you're running MongoDB locally)
- **Git**: [Install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) (for version control)

## Setup Instructions

Follow these steps to set up and run the project:

### 1. Clone the repository

Clone this repository to your local machine using the following command:

```bash
git clone https://github.com/abhishek-yadav96/node-crud-api-professional-code.git