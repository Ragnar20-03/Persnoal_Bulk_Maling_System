import React, { useState } from 'react';

function InputFile() {
  const [selectedFile, setSelectedFile] = useState(null);
    const  [ success , setSuccess] = useState([{}])
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch('http://localhost:3000/upload', {
        method: 'POST',
        body: formData
      })
      const data = await response.json();
      console.log('Data received from server:', data);
      setSuccess(data.success)
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const show =             <div >
 <h1> Successfully send mail to : </h1>
  {success.map((data) => {
      return <li> { data.name} -: {data.email} </li>
  })}
</div>

  return (
    <div>
      <h2>Choose File</h2>
      <input type="file" onChange={handleFileChange} />
      <br /><br />
      <button onClick={handleUpload}>Upload</button>
      {selectedFile && (
        <div>
          <p>Selected File: {selectedFile.name}</p>
          <p>File Size: {selectedFile.size} bytes</p>
            {show}

        </div>
      )}
    </div>
  );
}

export default InputFile;
