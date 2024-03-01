import React, { useState, useRef } from 'react';
import axios from 'axios';
import cgpImage from '../images/imgu.png'; // Update the path accordingly
import backgroundImage from '../images/bg2.jpg'; // Update the path accordingly

const ImageUpload = React.forwardRef(({ onImageUpload }, ref) => {
  const [uploadedImages, setUploadedImages] = useState(new Array(12).fill(null));
  const fileInputRefs = useRef([]);

  const handleImageChange = (event, index) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newUploadedImages = [...uploadedImages];
        newUploadedImages[index] = reader.result;
        setUploadedImages(newUploadedImages);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = async () => {
    const formData = new FormData();

    uploadedImages.forEach((image, index) => {
      const fileInput = fileInputRefs.current[index];
      const file = fileInput.files[0];
      if (file) {
        formData.append(`file${index + 1}`, file);
      }
    });

    try {
      const response = await axios.post(
        'https://api.pinata.cloud/pinning/pinFileToIPFS',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'pinata_api_key': 'a4fd077d83517f03dae8', // Add your Pinata API key
            'pinata_secret_api_key': '5dc8ff96bd114a9507849411bbab43f9fa17a130bf215ed5ff2a60b65203da27', // Add your Pinata Secret API key
          },
        }
      );

      console.log('Pinata response:', response.data);
      alert('Images uploaded to IPFS successfully!');

      // If the onImageUpload callback is provided, call it
      if (onImageUpload) {
        onImageUpload();
      }
    } catch (error) {
      console.error('Error uploading images to IPFS:', error);
      alert('Error uploading images to IPFS. Please try again.');
    }
  };

  // const bgStyle = {
  //   background: `url(${backgroundImage}) center/cover no-repeat`,
  //   minHeight: '100vh',
  //   minWidth: 'auto',
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignItems: 'flex-end',
  //   padding: '50px',
  // };

  const rows = [];
  for (let i = 0; i < uploadedImages.length; i += 4) {
    const rowImages = uploadedImages.slice(i, i + 4);
    const row = (
      <div
        key={i}
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '-100px',
          marginRight: '300px',
          marginTop: '160px',
        }}
      >
        {rowImages.map((image, index) => (
          <div key={index} style={{ marginRight: '20px' }}>
            <label htmlFor={`imageInput${i + index + 1}`} style={{ ...labelStyle, ...chooseFileLabelStyle }}>
              {image ? (
                <img src={image} alt={`Uploaded ${i + index + 1}`} style={getCroppedImageStyle()} />
              ) : (
                <img src={cgpImage} alt={`CGP ${i + index + 1}`} style={cgpImageStyle} />
              )}
            </label>
            <input
              ref={(el) => (fileInputRefs.current[i + index] = el)}
              type="file"
              id={`imageInput${i + index + 1}`}
              accept="image/*"
              onChange={(event) => handleImageChange(event, i + index)}
              style={fileInputStyle}
            />
          </div>
        ))}
      </div>
    );
    rows.push(row);
  }

  // Expose the handleUploadClick function through the ref
  React.useImperativeHandle(ref, () => ({
    handleUploadClick,
  }));

  return <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', }}>{rows}</div>;
  // return <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', ...bgStyle }}>{rows}</div>;

});

const labelStyle = {
  cursor: 'pointer',
};

const chooseFileLabelStyle = {
  // Add any additional styling for the label
};

const cgpImageStyle = {
  maxWidth: '100px', // Adjust as needed
  maxHeight: '100px', // Adjust as needed
};

const fileInputStyle = {
  display: 'none',
};

const getCroppedImageStyle = () => {
  // Assuming cgpImageStyle represents the size of the CGI image
  return {
    width: cgpImageStyle.maxWidth,
    height: cgpImageStyle.maxHeight,
    objectFit: 'cover', // Crop and fit into the exact dimensions of the CGI image
  };
};

export default ImageUpload;
