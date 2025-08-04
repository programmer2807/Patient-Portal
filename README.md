# Patient Portal

A full-stack **Patient Document Management System** that allows uploading, listing, downloading, and deleting PDF documents securely.

Built using **React.js** for the frontend, **Express.js** for the backend, and **MongoDB** for persistent storage.

---

## Project Overview

This web application allows users to:

- Upload patient-related PDF files (e.g., reports, prescriptions)
- View all uploaded documents
- Download files by ID
- Delete documents when no longer needed

**Tech Stack:**
- Frontend: React.js
- Backend: Node.js + Express.js
- Database: MongoDB
- File Storage: Local `uploads/` folder

---

##  How to Run Locally

### 1. Clone the repository


git clone https://github.com/your-username/patient-portal.git
cd patient-portal

2. Backend Setup
   cd backend
   npm install
   Create a .env file inside the backend directory with the following:
    MONGODB_URI=your_mongodb_connection_string
    PORT=5000

3. Frontend Setup
     cd ../frontend
      npm install8
      npm start

React app runs at: http://localhost:3000

Express API runs at: http://localhost:5000

Base URL: http://localhost:5000/api/documents
