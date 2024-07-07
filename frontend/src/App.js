import React, { useState } from 'react';
import Auth from './components/Auth';
import FileUpload from './components/FileUpload';
import FileList from './components/FileList';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const handleSetToken = (newToken) => {
    setToken(newToken);
    localStorage.setItem('token', newToken);
  };

  if (!token) {
    return <Auth setToken={handleSetToken} />;
  }

  return (
    <div>
      <h1>File Manager</h1>
      <FileUpload token={token} />
      <FileList token={token} />
    </div>
  );
};

export default App;