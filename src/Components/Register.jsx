import React, { useState } from 'react';
import axios from 'axios';
import {Link, useNavigate} from "react-router-dom"
const Register = () => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);

  const[userName,setuserName] = useState();
  const[usertype,setuserType] = useState();
  const[userclass,setuserclass] = useState();
  const[Medium,setMedium] = useState();
  const[contact,setcontact] = useState();
  const[email,setemail] = useState();
  const[password,setpassword] = useState();

  const navigate = useNavigate();
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setSelectedFile(selectedFile);
    // Simulate the image upload progress
    simulateImageUpload(selectedFile);
  };

  const simulateImageUpload = (file) => {
    const totalSize = file.size;
    let uploadedSize = 0;

    const progressInterval = setInterval(() => {
      uploadedSize += 1024; // Simulate uploading 1KB at a time
      const progress = (uploadedSize / totalSize) * 100;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(progressInterval);
        setUploadProgress(0); // Reset progress after completion
      }
    }, 100); // Update progress every 100 milliseconds
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:5000/register",{
      userName,usertype,userclass,Medium,contact,email,password})
    // console.log(response);
    navigate('/login');
  }
  return (
    <div className='w-container'>
      <div className="r-container">
      <p><h3>Registration form</h3></p>
        <form action="" className="upload-form" onSubmit={handleSubmit}>
          <input type="text" placeholder='User Name' onChange={(e)=>{setuserName(e.target.value)}} required/>
          <div>
            <select id="userRole"  value={usertype}   onChange={(e)=>{setuserType(e.target.value)}}>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>
          <input type="number" placeholder='Class'  onChange={(e)=>{setuserclass(e.target.value)}} required/>
          <div>
            <select id="userMedium"  value="English"  onChange={(e)=>{setMedium(e.target.value)}}>
              <option value="student">English</option>
              <option value="teacher">Tamil</option>
              <option value="teacher">Hindi</option>
            </select>
          </div>
          <input type="text"  placeholder='Contact Number'  onChange={(e)=>{setcontact(e.target.value)}} required/>
          <input type="text" placeholder='Your EmailId'  onChange={(e)=>{setemail(e.target.value)}} required/>
          <input type="password" placeholder='Your Password'  onChange={(e)=>{setpassword(e.target.value)}} required />
          {/* <div className="file-upload">
            <label htmlFor="profileImage" className="file-label" >Choose Profile Image ...</label>
            <input type="file" id="profileImage" onChange={handleFileChange} className="file-input" />
          </div>
          {selectedFile && <p style={{width:"240px", padding:"5px"}}>{selectedFile.name}</p>}
          {uploadProgress > 0 && (
            <div className="progress-container">
              <progress value={uploadProgress} max="100" className="progress-bar" />
              <span className="progress-text">{Math.round(uploadProgress)}% Uploaded</span>
            </div>
          )} */}
          <div>
          <button type="submit" className="submit-button">Submit</button>
          <Link to ='/login'><button className="submit-button">Login</button></Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
