import UploadForm from "./components/UploadForm";
import DocumentList from "./components/DocumentList";
import { useState } from "react";
import "./index.css";

function App() {
  const [refresh, setRefresh] = useState(false);

  const triggerRefresh = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mt-8">Document Upload Section for Patient</h1>

        <UploadForm onUploadSuccess={triggerRefresh} />
        <DocumentList key={refresh} />
      </div>
    </div>
  );
}

export default App;
