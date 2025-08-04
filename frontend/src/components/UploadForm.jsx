import { useState } from "react";
import axios from "axios";

const UploadForm = ({ onUploadSuccess }) => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

 const handleSubmit = async (e) => {
  e.preventDefault();
  if (!file) return;

  const formData = new FormData();
  formData.append("pdf", file); 

  try {
    setUploading(true);
    await axios.post("http://localhost:8080/api/documents/upload", formData);
    setUploading(false);
    setFile(null);
    onUploadSuccess();
  } catch (err) {
    console.error("Upload failed", err);
    setUploading(false);
  }
};

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-4 bg-white p-6 rounded-lg shadow-md"
    >
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        className="border p-2 rounded w-full"
      />
      <button
        type="submit"
        disabled={uploading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {uploading ? "Uploading..." : "Upload"}
      </button>
    </form>
  );
};

export default UploadForm;
