import React, { useState } from 'react';
import Navbar from './Navbar';
import propertyData from '../PropertyData.json';

const BuyerPage = () => {
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedPropertyIndex, setSelectedPropertyIndex] = useState(null);
  const [propertyType, setPropertyType] = useState(''); 


  const handleSearch = (event) => {
    event.preventDefault();
    const filteredResults = propertyData.filter((property) => {
      const locationMatch = property.location.toLowerCase().includes(location.toLowerCase());
      const priceMatch = property.price <= parseInt(price) || isNaN(parseInt(price));
      const typeMatch = !propertyType || (property.type && property.type.toLowerCase() === propertyType.toLowerCase());
  
      return locationMatch && priceMatch && typeMatch;
    });
  
    if (filteredResults.length > 0) {
      setSearchResults(filteredResults);
      const imageUrls = filteredResults.map((property) => property.imageUrl);
      setSelectedImages(imageUrls);
      setSelectedPropertyIndex(null); // Reset the selected property index when performing a new search
    } else {
      // If no results match the criteria, reset the search results and images
      setSearchResults([]);
      setSelectedImages([]);
      setSelectedPropertyIndex(null);
    }
  };
  
  
  
  const handleImageClick = (index) => {
    setSelectedPropertyIndex(index);
  };

  const handleClosePopup = () => {
    setSelectedPropertyIndex(null);
  };

  return (
    <div className='bg'>
<Navbar></Navbar>

    <div className="buyer-page-container">
      
      <h2>Buy Property Here</h2>
      <hr></hr>
      {/* //////////////////////////////////////////////////////////////// */}
      <form className="search-bar" onSubmit={handleSearch}>
  <label htmlFor="location">Location  </label>
  <input type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)} />
  
  <label htmlFor="price">Price  </label>
  <input type="text" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />

  {/* Custom select dropdown */}
  <label htmlFor="propertyType">Property Type  </label>
  <select id="propertyType" onChange={(e) => setPropertyType(e.target.value)}>
    <option value="House/Apartment">House/Apartment</option>
    <option value="Industrial_Property">Industrial Property</option>
    <option value="Commercial_Property">Commercial Property</option>
    <option value="Land">Land</option>
  </select>

  <button className="styled-button" type="submit">
    Search
  </button>
  
</form>
<br></br>
      


      <div className="search-results">
  
  <div className="result-columns"> {/* This div has the class name result-columns */}
    {searchResults.map((property, index) => (
      <div
        key={index}
        className="property-container"
        onClick={() => handleImageClick(index)}
      >
        <img src={property.imageUrl} alt={`Property ${index + 1}`} />
        <p>
          <span className="bold-price">₹ {property.price}</span>
          <br></br>
          {property.name} 
        </p>
      </div>
    ))}
  </div>
</div>


      {selectedPropertyIndex !== null && (
        <div className="popup-container">
          <button className="close-popup-button" onClick={handleClosePopup}>
            X
          </button>
          <img
            src={selectedImages[selectedPropertyIndex]}
            alt={`Property ${selectedPropertyIndex + 1}`}
          />
          <p>
            ₹
            <span className="bold-price">{searchResults[selectedPropertyIndex].price}</span>
            <br></br>
            {searchResults[selectedPropertyIndex].name}
          </p>
        </div>
      )}

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');


          
          body {
            background-color: #ffffff;
            
          }
          .bg{
            background: linear-gradient(white, #236c7e);
            padding :0px;
            // display: flex;
            // align-items: center;
            // justify-content: left;
            // flex-direction: column;
            // height: auto;
            // color: #333;
            background-position: center 70px;
            
             height: 100vh;

          }
          .buyer-page-container {
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
            position: relative;
            overflow: auto;
            width: auto; 
            height: auto;
            padding: 20px;
            margin: 20px;
          }
          
          h2 {
            color: #333;
          }
          
          .search-bar {
            display: flex;
            flex-wrap: wrap;
            margin-top: 20px;
          }
          
          label {
            margin-right: 10px;
          }
          
          input, select {
            background-color: #eee;
            border: none;
            margin: 8px 0;
            margin-right: 100px;
            margin-bottom: 10px;
            padding: 12px 15px;
            font-size: 16px;
            border-radius: 8px;
            width: 100%;
            outline: none;
            transition: background-color 5s;
          }

          select {
            cursor: pointer;
          }
          
            label[for="location"],
            label[for="price"],
            label[for="propertyType"] {
            flex: 1;
            font-size:18px;
            font-weight: bold;
          }
          Navbar {
            height: 60px; 
          }
          
          .styled-button {
            background-color: #246B7E;
            color: #fff;
            font-size: 20px;
            padding: 10px 45px;
            border: 1px solid transparent;
            border-radius: 8px;
            font-weight: bold;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            margin-top: 10px;
            cursor: pointer;
          }
          
          .styled-button:hover {
            background-color: #ffc803;
          }
          

          .selected-images {
            margin-top: 500px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
          }

          .selected-images img {
            margin: 10px;
            max-width: 100%;
            max-height: 100px; 
            object-fit: cover;
            border-radius: 8px;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
          }
          .result-columns {
            display: flex;
            width: auto;
            flex-wrap: wrap;
            justify-content: space-around;
          }

          .property-container {
            cursor: pointer;
            transition: transform 0.2s ease-in-out;
            margin-bottom: 20px;
            max-width: calc(50% - 20px); /* Adjust the maximum width as needed */
          }

          .property-container img {
            max-width: 100%;
            max-height: 210px;
            height: auto;
            border-radius: 8px;
          }

          .property-container:hover {
            transform: scale(1.05);
          }

          .popup-container {
            position: fixed;
            top: 50%;
            left: 50%;
            border-radius: 8px;
            transform: translate(-50%, -50%);
            background-color: #fff;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0.2, 0.2, 0.2, 0.3);
            z-index: 1000;
          }

          .close-popup-button {
            position: absolute;
            top: -30px;
            right: -30px;
            cursor: pointer;
            background-color: #246b7e;
            border: none;
            font-size: 20px;
            font-weight: bold;
            color: #000;
            padding: 12px;
            border-radius: 18px;
            transition: background-color 0.3s;
          }

          .close-popup-button:hover {
            background-color: #ffc803;
          }

          .bold-price{
            font-size:20px;
            font-weight: bold;
          }
          hr {
            display: block;
            margin-top: 0.5em;
            margin-bottom: 0.5em;
            margin-left: auto;
            margin-right: auto;
            border-style: inset;
            border-width: 3px;
            border-color: #ffc803
          }
        `}
      </style>
    </div>
    </div>
    
  );
};

export default BuyerPage;
