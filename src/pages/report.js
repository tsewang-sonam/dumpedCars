import  style  from './report.module.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import React, {useEffect, useState,useRef } from "react";
import Uppy from "@uppy/core";
import Dashboard from "@uppy/dashboard";
import Webcam from "@uppy/webcam";
import XHRUpload from "@uppy/xhr-upload";
import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";
import "@uppy/webcam/dist/style.css";
import Modal from './modal';
import dynamic from 'next/dynamic';


const MapView = dynamic(() => import('./components/MapView'), {
  ssr: false,
});

const ReportPage = () => {

 
  const [showModal, setShowModal] = useState(false);
   const [value, setValue] = useState('');
   const [sliderValue, setSliderValue] = useState(50);

  const [uploadedImages, setUploadedImages] = useState([]);
  const dashboardRef = useRef(null);
  const uppyRef = useRef(null); // Store Uppy instance in a ref to prevent re-creation

  

  useEffect(() => {
    // Only initialize Uppy if it hasn’t been created yet

    if (!uppyRef.current) {
      uppyRef.current = new Uppy({
        autoProceed: false,
      allowMultipleUploads: true, // Allow multiple uploads (e.g., from folders)
      restrictions: {
        maxNumberOfFiles: 6, // No limit (or set a number if desired)
        allowedFileTypes: ["image/*"], // Pictures only
      },
    })
      .use(Dashboard, {
        inline: true,
        target: dashboardRef.current,
        showProgressDetails: true,
        // height: 500,
        // width:600,
        proudlyDisplayPoweredByUppy: false,
      })
      .use(Webcam, {
        modes: ["picture"], // Restrict to picture mode only
        showVideoSourceDropdown: true, // Let users select camera
      })
      
     // Update selected files when files are added or removed
     uppyRef.current.on("file-added", (file) => {
      const fileUrl = URL.createObjectURL(file.data);
      setSelectedFiles((prev) => [
        ...prev,
        { id: file.id, name: file.name, url: fileUrl, type: file.type },
      ]);
    });

    uppyRef.current.on("file-removed", (file) => {
      setSelectedFiles((prev) => prev.filter((f) => f.id !== file.id));
    });
  }

  return () => {
    if (uppyRef.current) {
      uppyRef.current.destroy();
      uppyRef.current = null;
    }
  };
}, []);

const handleSubmit = () => {
  if (uppyRef.current.getFiles().length > 0) {
    // Mock upload for now
    uppyRef.current.getFiles().forEach((file) => {
      setTimeout(() => {
        uppyRef.current.emit("upload-success", file, {
          url: URL.createObjectURL(file.data),
        });
        console.log("Mock uploaded:", file.name);
      }, 1000);
    });
    // Later, you’ll replace this with Firebase upload
  } else {
    console.log("No files to upload");
  }
};


    return ( 
      <div>
        <Navbar/>
        <div className = {style.mainReport}>
              
        
               <div className = {style.imgUpload}>
                <h1 className = {style.title}> STEP 1</h1>
                <div className= {style.uppyContainer} ref={dashboardRef} /> {/* Attach the ref here */}
                      {uploadedImages.length > 0 && (
                      <div>
                       <img
                      src={uploadedImages[0].url}
                    alt={uploadedImages[0].name}
                style={{ maxWidth: "100%", maxHeight: "400px" }}
              />
            </div>
          )}
               </div>

                <div className= {style.locationContianer}>
                <h1 className = {style.title}> STEP 2</h1>
                <div className={style.inputgroup}>
                  
                <button className= {style.btn} onClick={() => setShowModal(true)}> locate </button>
                {showModal && (
                  <Modal onClose={() => setShowModal(false)}>
                   <MapView lat={37.8044} lng={-122.2712} />
                   </Modal>
                   )}
                
              
                <h3> OR </h3>
                
                <input className = {style.inputField} type="text" value={value} onChange={(e) => setValue(e.target.value)}
                     placeholder="Street name"
                />
                
                <input className = {style.inputField}  type="text" value={value} onChange={(e) => setValue(e.target.value)}
                     placeholder="City"
                />
                
                <input className = {style.inputField}  type="text" value={value} onChange={(e) => setValue(e.target.value)}
                     placeholder="State"
                />
                <input className = {style.inputField}  type="text" value={value} onChange={(e) => setValue(e.target.value)}
                     placeholder="Zipcode"
                />
                <button className= {style.btn}> Done</button>

                </div>
                </div>

                <div className= {style.infoContianer}>
                <h1 className = {style.title}> STEP 3</h1>
                <div className={style.inputgroup}>
                <h3> Enter Vehical Details </h3>
                
                <input className = {style.inputField} type="text" value={value} onChange={(e) => setValue(e.target.value)}
                     placeholder="Make"
                />
                
                <input className = {style.inputField}  type="text" value={value} onChange={(e) => setValue(e.target.value)}
                     placeholder="Model"
                />
                
                <input className = {style.inputField}  type="text" value={value} onChange={(e) => setValue(e.target.value)}
                     placeholder="Color"
                />
                <input className = {style.inputField}  type="text" value={value} onChange={(e) => setValue(e.target.value)}
                     placeholder="License Number"
                />

                <input type="range" min="0" max="100" value={sliderValue}
            onChange={(e) => setSliderValue(e.target.value)}
                className={style.slider}/>
               <p className={style.sliderValue}>{sliderValue}</p>

                <button className= {style.btn}> Done</button>

                </div>
                
                </div>
                
              
                <div className= {style.SubmitContianer}>
                    <button className= {style.submitBtn}> Submit </button>
                </div>
              

                <span class= {style.scrollArrow}> Scroll -{'>'} </span> 
       
                
         </div>

         <Footer/>

      </div>
    );
  };
  
  export default ReportPage;