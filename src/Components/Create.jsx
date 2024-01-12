import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import Nav from '../Components/Nav';
import '../App.css'
import axios from 'axios';

const Create = () => {
    const maxWords = 20;
    const [description, setDescription] = useState('');
    const[sub,setSub] = useState();
    const[desc,setDesc] = useState();
    const[file,setFile] = useState();

    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (buttonName) => {
      setActiveButton(buttonName);
      setSub(buttonName);
    };
    const [uploadProgress, setUploadProgress] = useState(0); 
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setSelectedFile(selectedFile);
    simulateImageUpload(selectedFile);
    setFile(selectedFile);
  };

    const simulateImageUpload = (file) => {
    const totalSize = file.size;
    let uploadedSize = 0;

    const progressInterval = setInterval(() => {
      uploadedSize += 1024; 
      const progress = (uploadedSize / totalSize) * 100;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(progressInterval);
        setUploadProgress(0);
      }
    }, 100); 
  };
  const handleChange = (event) => {
    const inputValue = event.target.value;
    const words = inputValue.split(/\s+/); // Split by whitespace to count words
    if (words.length <= maxWords) {
      setDescription(inputValue);
    }
    else{
        alert(`Maximum ${maxWords} words allowed.`);
    }
  };

 const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('sub',sub)
    formData.append('desc',desc)
    formData.append('file',file)

    const res = await axios.post("http://localhost:5000/create", formData, {
    withCredentials: true,
});
    console.log(res.data)
    if( res.data === "Success") {
        window.location.href = "/home" /*reload js code */
   }
 } 

  return (
    <div>
     <Nav />
    <div className="create-container">
            <div className="d-container">
            <form action="" onSubmit={handleSubmit}>
                <div className="top">
                   <h3>Get Help from Teachers</h3>
                </div>
                <p className='option'>Select one of the subjects / issues </p>
                <div className="subjects">
                   <button  className={activeButton === 'Tamil' ? 'active' : ''}
              onClick={() => handleButtonClick('Tamil')}>Tamil</button>
                   <button  className={activeButton === 'English' ? 'active' : ''}
              onClick={() => handleButtonClick('English')}>English</button>
                   <button  className={activeButton === 'Maths' ? 'active' : ''}
              onClick={() => handleButtonClick('Maths')}>Maths</button>
                   <button  className={activeButton === 'React Js' ? 'active' : ''}
              onClick={() => handleButtonClick('React Js')}>React Js</button>
                   <button  className={activeButton === 'CSS' ? 'active' : ''}
              onClick={() => handleButtonClick('CSS')}>CSS</button>
                   <button  className={activeButton === 'Logical error' ? 'active' : ''}
              onClick={() => handleButtonClick('Logical error')}>Logical error</button>
                   <button  className={activeButton === 'Compilation error' ? 'active' : ''}
              onClick={() => handleButtonClick('Compilation error')}>Compilation error</button>
                   <button  className={activeButton === 'Chemistry' ? 'active' : ''}
              onClick={() => handleButtonClick('Chemistry')}>Chemistry</button>
                   <button  className={activeButton === 'Runtime Error' ? 'active' : ''}
              onClick={() => handleButtonClick('Runtime Error')}>Runtime Error</button>
                   <button  className={activeButton === 'Java' ? 'active' : ''}
              onClick={() => handleButtonClick('Java')}>Java</button>
                   <button  className={activeButton === 'C,C++' ? 'active' : ''}
              onClick={() => handleButtonClick('C,C++')}>C,C++</button>
              <button  className={activeButton === 'Hindi' ? 'active' : ''}
              onClick={() => handleButtonClick('Hindi')}>Hindi</button>
                </div>
                <div className="descp">
               <p className='option'>Description about issues</p>
            <textarea id="description" name="description"
             rows="15" cols="30" onChange={handleChange} placeholder="Enter your description here..."  onChange={ (e) => {setDesc(e.target.value)}}></textarea>
                </div>
                <div className="img">
                <p className='option'>Attach Screenshot here</p>
                <div className="file-upload">
            <input type="file" id="profileImage" className="file-label,file-input"  onChange={handleFileChange} />
          </div>
          {selectedFile && <p style={{width:"240px", padding:"5px"}}></p>}
          {uploadProgress > 0 && (
            <div className="progress-container">
              <progress value={uploadProgress} max="100" className="progress-bar" />
              <span className="progress-text">{Math.round(uploadProgress)}% Uploaded</span>
            </div>
          )}
                </div>
                <div className='help-btn'>
                <button className="submit-button">Ask for help</button>
                </div>
                </form>
            </div>
        </div></div>
  )
}

export default Create