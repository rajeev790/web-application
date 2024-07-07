import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FileList = ({ token }) => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get('/api/files', {
          headers: {
            'Authorization': Bearer ${token}
          }
        });
        setFiles(response.data);
      } catch (error) {
        console.error('Error fetching files', error);
      }
    };

    fetchFiles();
  }, [token]);

  return (
    <div>
      <h2>Your Files</h2>
      <ul>
        {files.map((file) => (
          <li key={file._id}>{file.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;