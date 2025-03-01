import { useState } from "react";

const App = () => {
  // State Variables
  const [singleFile, setSingleFile] = useState(null);
  const [multipleFiles, setMultipleFiles] = useState([]);
  const [randomImages, setRandomImages] = useState([]); // For multiple images
  const [singleImage, setSingleImage] = useState(null); // For single image
  const [dogImage, setDogImage] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // ✅ Added loading state

  // Handle Single File Selection
  const handleSingleFileChange = (e) => {
    setSingleFile(e.target.files[0]);
  };

  // Handle Multiple Files Selection
  const handleMultipleFilesChange = (e) => {
    setMultipleFiles([...e.target.files]);
  };

  // ✅ Fetch a single random image
  const fetchSingleFile = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:8000/fetch/single`);
      if (!response.ok) throw new Error("Failed to fetch a single file.");
      
      const data = await response.json();
      setSingleImage(data.image);
    } catch (error) {
      console.error("Error fetching single file:", error);
      setMessage("Failed to fetch a single image.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Fetch multiple random images separately
  const fetchMultipleImages = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:8000/fetch/random-images`);
      if (!response.ok) throw new Error("Failed to fetch multiple images.");

      const data = await response.json();
      setRandomImages(data.images);
    } catch (error) {
      console.error("Error fetching multiple images:", error);
      setMessage("Failed to fetch multiple images.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Fetch a random dog image
  const fetchDogImage = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:8000/fetch/dog`);
      if (!response.ok) throw new Error("Failed to fetch dog image.");

      const data = await response.json();
      setDogImage(data.dogImage);
    } catch (error) {
      console.error("Error fetching dog image:", error);
      setMessage("Failed to fetch a dog image.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Upload a single file
  const handleSubmitSingleFile = async (e) => {
    e.preventDefault();
    if (!singleFile) {
      setMessage("Please select a file before uploading.");
      return;
    }
  
    setLoading(true);
    try {
      console.log("Uploading Single File..."); // ✅ Debugging
  
      const formData = new FormData();
      formData.append("file", singleFile); // ✅ Fix: Ensure field name is "file"
  
      const response = await fetch("http://localhost:8000/save/single", {
        method: "POST",
        body: formData,
      });
  
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Upload failed");
  
      setMessage("Single file uploaded successfully!");
      console.log("File uploaded:", data.filePath); // ✅ Debugging
    } catch (error) {
      console.error("Error uploading file:", error);
      setMessage("Single file upload failed.");
    } finally {
      setLoading(false);
    }
  };
  

  // ✅ Upload multiple files
  const handleSubmitMultipleFiles = async (e) => {
    e.preventDefault();
    if (multipleFiles.length === 0) {
      setMessage("Please select files before uploading.");
      return;
    }
  
    setLoading(true);
    try {
      console.log("Uploading Multiple Files..."); // ✅ Debugging
  
      const formData = new FormData();
      multipleFiles.forEach((file) => formData.append("files", file)); // ✅ Fix: Use "files"
  
      const response = await fetch("http://localhost:8000/save/multiple", {
        method: "POST",
        body: formData,
      });
  
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Upload failed");
  
      setMessage("Multiple files uploaded successfully!");
      console.log("Files uploaded:", data.filePaths); // ✅ Debugging
    } catch (error) {
      console.error("Error uploading multiple files:", error);
      setMessage("Multiple file upload failed.");
    } finally {
      setLoading(false);
    }
  };
  
  // ✅ Upload the dog image to Express
  const uploadDogImage = async () => {
    if (!dogImage) {
      setMessage("Fetch a dog image before uploading.");
      return;
    }
  
    setLoading(true);
    try {
      console.log("Downloading dog image..."); // ✅ Debugging
  
      const response = await fetch(dogImage);
      const blob = await response.blob();
      const file = new File([blob], "dog.jpg", { type: "image/jpeg" });
  
      console.log("Dog image downloaded, preparing upload..."); // ✅ Debugging
  
      const formData = new FormData();
      formData.append("file", file); // ✅ Fix: Ensure field name matches backend
  
      console.log("Uploading dog image..."); // ✅ Debugging
  
      const uploadResponse = await fetch("http://localhost:8000/save/dog", {
        method: "POST",
        body: formData,
      });
  
      const data = await uploadResponse.json();
      if (!uploadResponse.ok) throw new Error(data.error || "Upload failed");
  
      setMessage("Dog image uploaded successfully!");
      console.log("Dog image uploaded:", data.imageUrl); // ✅ Debugging
    } catch (error) {
      console.error("Error uploading dog image:", error);
      setMessage("Dog image upload failed.");
    } finally {
      setLoading(false);
    }
  };
  
  

  return (
    <div>
      <p>{message}</p>

      {/* ✅ Loading Indicator */}
      {loading && <p>Loading...</p>}

      {/* ✅ Single Image Section */}
      <h2>Fetch Single Random Image</h2>
      <button onClick={fetchSingleFile} disabled={loading}>
        Fetch Single File
      </button>
      {singleImage && (
        <div>
          <img src={singleImage} alt="Single Random" width="150" />
        </div>
      )}

      {/* ✅ Multiple Images Section */}
      <h2>Fetch Multiple Random Images</h2>
      <button onClick={fetchMultipleImages} disabled={loading}>
        Fetch Multiple Images
      </button>
      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        {randomImages.length > 0 ? (
          randomImages.map((img, index) => (
            <img key={index} src={img} alt="Random" width="150" />
          ))
        ) : (
          <p>No images found.</p>
        )}
      </div>

      {/* ✅ Dog Image Section */}
      <h2>Fetch and Upload Dog Image</h2>
      <button onClick={fetchDogImage} disabled={loading}>
        Get Random Dog Image
      </button>
      {dogImage && (
        <div>
          <img src={dogImage} alt="Dog" width="200" />
          <button onClick={uploadDogImage} style={{ marginTop: "10px" }} disabled={loading}>
            Upload Dog Image
          </button>
        </div>
      )}

      {/* ✅ File Upload Forms */}
      <form onSubmit={handleSubmitSingleFile}>
        <h2>Upload Single File</h2>
        <input type="file" onChange={handleSingleFileChange} disabled={loading} />
        <button type="submit" disabled={loading}>Upload Single File</button>
      </form>

      <form onSubmit={handleSubmitMultipleFiles}>
        <h2>Upload Multiple Files</h2>
        <input type="file" multiple onChange={handleMultipleFilesChange} disabled={loading} />
        <button type="submit" disabled={loading}>Upload Multiple Files</button>
      </form>
    </div>
  );
};

export default App;
