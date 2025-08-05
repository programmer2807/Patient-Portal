# Design Document

## 1. Tech Stack Choices

**Q1. What frontend framework did you use and why?**  
**React.js**  
Chosen for fast development, reusable components, strong community, and easy API integration.

**Q2. What backend framework did you choose and why?**  
**Express.js (Node.js)**  
Lightweight, minimal setup, ideal for building REST APIs and file uploads.

**Q3. What database did you choose and why?**  
**MongoDB**  
Flexible document-based structure, easy Mongoose integration, suitable for storing metadata.

**Q4. If you were to support 1,000 users, what changes would you consider?**  
- Move file storage to AWS S3 or similar cloud service  
- Use MongoDB Atlas or a scalable cloud database  
- Add caching with Redis  
- Load balancing and rate limiting  
- Implement authentication and authorization  

---

## 2. Architecture Overview

**Flow between components:**  
- Frontend (React) sends file to Backend (Express)  
- Backend saves file to local storage and metadata to MongoDB  
- API endpoints handle upload, retrieval, listing, and deletion

**Component Interaction:**  
- React frontend → Express backend  
- Express backend → Local file system for PDF storage  
- Express backend ↔ MongoDB for document metadata  

---

## API Specification

### `POST /api/documents/upload`
- **Description:** Upload a PDF file  
- **Request:** Form data with a `file` field  
- **Response:**
```json
{
  "message": "File uploaded successfully",
  "document": {
    "_id": "xyz",
    "filename": "example.pdf"
  }
}
```

---

### `GET /api/documents`
- **Description:** List all documents  
- **Response:**
```json
[
  {
    "_id": "xyz",
    "filename": "example.pdf",
    "uploadDate": "2025-08-04"
  }
]
```

---

### `GET /api/documents/:id`
- **Description:** Download a specific document by ID  
- **Response:** Returns PDF as file download

---

### `DELETE /api/documents/:id`
- **Description:** Delete a document by ID  
- **Response:**
```json
{
  "message": "File deleted successfully"
}
```

---

## Data Flow Description

### File Upload Process:
1. User selects a file on the frontend  
2. Sends a `POST` request to `/api/documents/upload`  
3. Backend saves the file to `/uploads` and metadata to MongoDB  
4. Backend sends a confirmation response

### File Download Process:
1. User triggers download on the frontend  
2. Sends a `GET` request to `/api/documents/:id`  
3. Backend fetches file path from MongoDB and returns the file

---

## Assumptions

- Only PDF files are supported  
- Max file size assumed to be 5MB  
- No authentication or user roles implemented  
- Local file system is used for simplicity  
- CORS and basic error handling are implemented  
- Single server setup used (no distributed system)
