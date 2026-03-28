import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MedicalImageGallery = () => {
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();

  // Load images from local storage on mount
  useEffect(() => {
    const storedImages = JSON.parse(localStorage.getItem('medicalImages') || '[]');
    setImages(storedImages);
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedFile(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!selectedFile || !description) return;

    // Generate mock transaction data
    const mockHash = "0x" + Array(64).fill(0).map(() => Math.floor(Math.random() * 16).toString(16)).join('');
    const mockBlock = Math.floor(Math.random() * 5000) + 19450000; // realistic mainnet block height
    const base58Chars = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
    const mockCid = "Qm" + Array(44).fill(0).map(() => base58Chars[Math.floor(Math.random() * base58Chars.length)]).join('');
    
    const newImage = {
      id: Date.now(),
      url: selectedFile,
      description,
      timestamp: new Date().toLocaleString(),
      txHash: mockHash,
      cid: mockCid
    };

    const updatedImages = [newImage, ...images];
    setImages(updatedImages);
    localStorage.setItem('medicalImages', JSON.stringify(updatedImages));
    
    // Reset form
    setSelectedFile(null);
    setDescription('');
    
    // Navigate to transaction view
    navigate('/transaction', { 
      state: { 
        hash: mockHash,
        from: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
        to: "CyberMedRecords",
        blockNumber: mockBlock,
        cid: mockCid,
        contentHash: "0x" + mockCid.substring(2) + "a82273b7bfad8045d85a470" // Makes it look long like a real hash
      } 
    });
  };

  const handleDelete = (id) => {
    const updatedImages = images.filter(img => img.id !== id);
    setImages(updatedImages);
    localStorage.setItem('medicalImages', JSON.stringify(updatedImages));
  };

  const viewTransaction = (img) => {
      navigate('/transaction', {
          state: {
            hash: img.txHash || "0xd1f3a74659f8c6eb2d6b3846cd4f5b5b91b8d7e0c4b2a8d11c8e1d6c8b9a5f3e",
            from: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
            to: "CyberMedRecords",
            blockNumber: Math.floor(Math.random() * 1000) + 19453000, // realistic block height
            cid: img.cid || "QmT78zSuBmuS4z925WZfrqQ1qHaJ56DQaTf4bH2G76f5Xk",
            contentHash: img.cid ? "0x" + img.cid.substring(2) + "a82273b7bfad8045d85a470" : "0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470"
          }
      });
  };

  return (
    <div className="container">
      <h2>Medical Image Gallery</h2>
      
      <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', marginBottom: '20px' }}>
        <h3>Upload New Image</h3>
        <form onSubmit={handleSave}>
          <div className="form-group">
            <label htmlFor="fileInput">Select Image:</label>
            <input 
              id="fileInput"
              type="file" 
              accept="image/*" 
              onChange={handleFileChange} 
              required 
              style={{ padding: '10px 0' }}
            />
          </div>
          
          {selectedFile && (
            <div style={{ marginBottom: '15px' }}>
              <img src={selectedFile} alt="Preview" style={{ maxWidth: '100%', maxHeight: '200px', borderRadius: '4px', border: '1px solid #ddd' }} />
            </div>
          )}

          <div className="form-group">
            <label>Description:</label>
            <input 
              type="text" 
              value={description} 
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter image description (e.g. Chest X-Ray)" 
              required 
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', marginTop: '5px' }}
            />
          </div>
          
          <button type="submit" style={{ background: '#007bff', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer', fontSize: '16px' }}>
            Upload & Save to Blockchain
          </button>
        </form>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
        {images.map(img => (
          <div key={img.id} style={{ background: '#fff', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <img src={img.url} alt={img.description} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} />
            <h4 style={{ margin: '0 0 5px 0' }}>{img.description}</h4>
            <p style={{ fontSize: '0.85rem', color: '#666', margin: '0 0 10px 0' }}>{img.timestamp}</p>
            <div style={{display: 'flex', gap: '10px'}}>
                <button 
                onClick={() => viewTransaction(img)}
                style={{ background: '#28a745', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer', flex: 1 }}
                >
                View Tx
                </button>
                <button 
                onClick={() => handleDelete(img.id)} 
                style={{ background: '#dc3545', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer', flex: 1 }}
                >
                Delete
                </button>
            </div>
          </div>
        ))}
      </div>
      
      {images.length === 0 && (
        <div style={{ textAlign: 'center', padding: '40px', color: '#666', background: '#fff', borderRadius: '8px' }}>
          <p>No images saved yet. Upload one to get started!</p>
        </div>
      )}
    </div>
  );
};

export default MedicalImageGallery;