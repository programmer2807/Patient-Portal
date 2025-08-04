// backend/controllers/documentController.js
const path = require('path');
const fs = require('fs');
const Document = require('../models/Document');


exports.uploadDocument = async (req, res) => {
    try {
        const file = req.file;
        if (!file || path.extname(file.originalname) !== '.pdf') {
            return res.status(400).json({ message: 'Only PDF files are allowed' });
        }

        const doc = new Document({
            filename: file.originalname,
            filepath: file.path,
            filesize: file.size
        });

        await doc.save();
        res.status(201).json({ message: 'File uploaded successfully', fileId: doc._id });
    } catch (err) {
        res.status(500).json({ message: 'Upload failed', error: err.message });
    }
};


exports.getAllDocuments = async (req, res) => {
    try {
        const documents = await Document.find();
        res.json(documents);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


exports.downloadDocument = async (req, res) => {
    try {
        const doc = await Document.findById(req.params.id);
        if (!doc) return res.status(404).json({ message: 'File not found' });

        res.download(path.join(__dirname, '..', doc.filepath), doc.filename);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


exports.deleteDocument = async (req, res) => {
  try {
    const doc = await Document.findById(req.params.id);
    if (!doc) return res.status(404).json({ message: "File not found" });

    const filePath = path.join(__dirname, "..", doc.filepath || "uploads", doc.filename);

    try {
      fs.unlinkSync(filePath);
    } catch (fileErr) {
      console.warn("File deletion failed:", fileErr.message);
    }

    await doc.deleteOne();
    res.json({ message: "File deleted successfully" });
  } catch (err) {
    console.error("DELETE error:", err);
    res.status(500).json({ message: err.message });
  }
};