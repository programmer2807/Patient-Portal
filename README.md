# Patient Portal

A full-stack web application that allows patients to upload, view, download, and delete their medical documents (PDFs). Built with Node.js (Express) on the backend and React.js on the frontend. Documents are stored locally using Multer middleware.

---
## Project Structure
<pre> <code> ## Project Structure ``` patient-portal/ ├── backend/ │ ├── server.js │ ├── routes/ │ └── uploads/ ├── frontend/ │ ├── public/ │ └── src/ ├── package.json ├── .gitignore └── README.md ``` </code> </pre>


---

## How to Run Locally

### Prerequisites
- Node.js and npm installed
- Git installed

### 1. Clone the Repository
bash
git clone https://github.com/programmer2807/patient-portal.git
cd patient-portal

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

```bash
git clone https://github.com/programmer2807/patient-portal.git
cd patient-portal
npm install
```

### 2. Backend Setup
   -cd backend
   -npm install
   
#### Create a .env file inside the backend directory with the following:

    -MONGODB_URI=your_mongodb_connection_string ,, 
    -PORT=5000

### 3. Frontend Setup
     cd ../frontend
      npm install
      npm start

React app runs at: http://localhost:3000

Express API runs at: http://localhost:5000

Base URL: http://localhost:5000/api/documents
