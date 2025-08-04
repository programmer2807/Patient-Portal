// backend/routes/documentRoutes.js
const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const {
    uploadDocument,
    getAllDocuments,
    downloadDocument,
    deleteDocument
} = require('../controllers/documentController');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

router.post('/upload', upload.single('pdf'), uploadDocument);
router.get('/', getAllDocuments);
router.get('/:id', downloadDocument);
router.delete('/:id', deleteDocument);

module.exports = router;
