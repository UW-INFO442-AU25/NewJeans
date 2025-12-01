import React, { useState, useEffect } from 'react';
import { auth, storage, rtdb } from '../firebase';
import { ref as storageRef, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { ref as dbRef, set, get } from 'firebase/database';

// Component allows uploading a passport file (image/pdf) and stores metadata + download URL in Realtime DB.
// Once uploaded, parent can mark the Passport card as "Added" via onUploaded(true).
function PassportUpload({ onUploaded }) {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState(null);
  const [downloadURL, setDownloadURL] = useState('');

  useEffect(() => {
    const loadExisting = async () => {
      if (!auth.currentUser) return;
      const snap = await get(dbRef(rtdb, `passports/${auth.currentUser.uid}`));
      if (snap.exists()) {
        const data = snap.val();
        if (data.downloadURL) setDownloadURL(data.downloadURL);
        onUploaded && onUploaded(true);
      }
    };
    loadExisting();
  }, [onUploaded]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0] || null);
  };

  const compressImage = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          let width = img.width;
          let height = img.height;
          
          // Resize if too large
          const maxDimension = 1000;
          if (width > maxDimension || height > maxDimension) {
            if (width > height) {
              height = (height / width) * maxDimension;
              width = maxDimension;
            } else {
              width = (width / height) * maxDimension;
              height = maxDimension;
            }
          }
          
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);
          
          canvas.toBlob((blob) => {
            resolve(new File([blob], file.name, {
              type: 'image/jpeg',
              lastModified: Date.now()
            }));
          }, 'image/jpeg', 0.85);
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    });
  };

  const handleUpload = async () => {
    if (!auth.currentUser) {
      setError('You must be signed in to upload');
      return;
    }
    if (!file) return;
    setError(null);
    setUploading(true);
    setUploadProgress(0);

    // Show immediate preview for images
    const ext = file.name.split('.').pop().toLowerCase();
    const allowed = ['jpg','jpeg','png','pdf'];
    if (!allowed.includes(ext)) {
      setError('Unsupported file type. Use JPG, PNG, or PDF');
      setUploading(false);
      return;
    }

    let localPreviewURL = null;
    if (['jpg', 'jpeg', 'png'].includes(ext)) {
      localPreviewURL = URL.createObjectURL(file);
      setDownloadURL(localPreviewURL);
    }

    try {
      // Compress image if it's an image and larger than 300KB
      let fileToUpload = file;
      if (['jpg', 'jpeg', 'png'].includes(ext) && file.size > 300000) {
        fileToUpload = await compressImage(file);
      }

      const path = `passports/${auth.currentUser.uid}/passport.${ext}`;
      const sRef = storageRef(storage, path);
      
      const uploadTask = uploadBytesResumable(sRef, fileToUpload, {
        contentType: fileToUpload.type
      });

      uploadTask.on('state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
        },
        (error) => {
          console.error('Upload error:', error);
          if (localPreviewURL) URL.revokeObjectURL(localPreviewURL);
          setDownloadURL('');
          setError('Upload failed. Please try again.');
          setUploading(false);
        },
        async () => {
          const url = await getDownloadURL(uploadTask.snapshot.ref);
          await set(dbRef(rtdb, `passports/${auth.currentUser.uid}`), {
            downloadURL: url,
            uploadedAt: Date.now()
          });
          if (localPreviewURL) URL.revokeObjectURL(localPreviewURL);
          setDownloadURL(url);
          setUploadProgress(0);
          setUploading(false);
          onUploaded && onUploaded(true);
        }
      );
    } catch (e) {
      setError(e.message);
      if (localPreviewURL) URL.revokeObjectURL(localPreviewURL);
      setDownloadURL('');
      setUploading(false);
    }
  };

  return (
    <div className="passport-upload-box">
      <h3 className="passport-upload-title">Passport Upload</h3>
      <p className="passport-upload-help">Upload a clear, valid copy of your passport (image or PDF).</p>

      <div style={{ marginTop: 12, display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
        <input type="file" accept=".jpg,.jpeg,.png,.pdf" onChange={handleFileChange} disabled={uploading} />
        <button onClick={handleUpload} disabled={!file || uploading} className="passport-upload-btn">
          {uploading ? `Uploading ${Math.round(uploadProgress)}%` : 'Upload Passport'}
        </button>
      </div>
      
      {uploading && uploadProgress > 0 && (
        <div style={{ marginTop: 12 }}>
          <div style={{ 
            width: '100%', 
            height: 8, 
            backgroundColor: '#e0e0e0', 
            borderRadius: 4, 
            overflow: 'hidden' 
          }}>
            <div style={{ 
              width: `${uploadProgress}%`, 
              height: '100%', 
              backgroundColor: '#5384A4', 
              transition: 'width 0.3s ease' 
            }}></div>
          </div>
        </div>
      )}

      {downloadURL && (
        <div className="passport-download-row">
          <a href={downloadURL} target="_blank" rel="noopener noreferrer" className="passport-download-link">View Uploaded Passport</a>
        </div>
      )}
      {error && <div className="passport-error" role="alert">{error}</div>}
    </div>
  );
}

export default PassportUpload;
