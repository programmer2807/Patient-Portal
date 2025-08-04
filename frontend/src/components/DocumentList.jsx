import { useEffect, useState } from "react";
import axios from "axios";

const DocumentList = () => {
  const [documents, setDocuments] = useState([]);

  const fetchDocuments = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/documents");
      setDocuments(res.data);
    } catch (err) {
      console.error("Error fetching documents", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/documents/${id}`);
      fetchDocuments();
    } catch (err) {
      console.error("Error deleting document", err);
    }
  };

  useEffect(() => {
    fetchDocuments();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-6">
          Welcome to Patient Portal
        </h1>

        <div className="bg-white p-6 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">
            Uploaded Documents
          </h2>

          {documents.length === 0 ? (
            <p className="text-gray-500 text-center py-10">
              No documents uploaded yet.
            </p>
          ) : (
            <ul className="divide-y divide-gray-200">
              {documents.map((doc) => (
                <li
                  key={doc._id}
                  className="flex flex-col md:flex-row md:items-center md:justify-between py-4"
                >
                  <span className="text-gray-700 font-medium truncate max-w-md">
                     {doc.filename}
                  </span>

                  <div className="mt-2 md:mt-0 flex gap-4">
                    <a
                      href={`http://localhost:8080/api/documents/${doc._id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm hover:bg-blue-600 transition"
                    >
                      Download
                    </a>
                    <button
                      onClick={() => handleDelete(doc._id)}
                      className="bg-red-500 text-white px-4 py-1 rounded-full text-sm hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default DocumentList;
