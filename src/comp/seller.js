// seller.js
import React, { useState } from 'react';
import ImageUpload from './ImageUpload';
import Navbar from './Navbar';

const Seller = () => {
  const [uploadResponse, setUploadResponse] = useState(null);

  const handleListButtonClick = (response) => {
    console.log('Image upload response:', response);
    setUploadResponse(response);
  };

  return (
    <div><Navbar/>
      
    
    <div className="container" id="container">
      <div className="tog">
        <ImageUpload onListButtonClick={handleListButtonClick} />
      </div>

      <div className="form-container ">
        <form>
        <h1 style={{transform:'translate(35px)'}}>List a Property</h1>
          <div className='tx'>
            <textarea type="text" placeholder="Name" style={{height:'50px'}}/>
            <textarea type="text" placeholder="Description" style={{height:'100px', wordWrap: 'break-word'}} />
            <textarea type="text" placeholder="Address"style={{height:'50px'}} />
          </div>
          <div class="custom-select" style={{transform:'translate(75px)'}}>
          <label >Property Type : </label>
            <select id="propertyType" style={{transform:'translate(20px)',width:'195px'}}>
              <option value="house">House/Apartment</option>
              <option value="apartment">Industrial Property</option>
              <option value="condo">Commercial Property</option>
              <option value="condo">Land</option>

              {/* Add more options as needed */}
            </select>
        </div>


          <div style={{ display: 'flex', gap: '10px',padding: '10px',textAlign:'left' }}className='slider'>
            <div style={{transform: 'translateX(90px)'}}className='bed' >
              <input style={{ fontSize: '12px', width: '70px', padding: '8px',height:'35px' }}
                type='number'
                id='bedrooms'
                min='1'
                max='10'
                required
                //className='p-3 border border-gray-300 rounded-lg'
                //onChange={handleChange}
                //value={formData.bedrooms}
              />
              <p style={{transform:'translate(15px)'}}>Beds</p>
            </div>
            <div className='bath'style={{transform: 'translateX(120px)'}}>
              <input style={{ fontSize: '12px', width: '70px', padding: '8px',height:'35px'}}
                type='number'
                id='bathrooms'
                min='1'
                max='10'
              
                required
                //className='p-3 border border-gray-300 rounded-lg'
                //onChange={handleChange}
                //value={formData.bathrooms}
              />
              <p style={{transform:'translate(15px)'}}>Baths</p>
            </div>
           
            <div className='price'style={{transform: 'translateX(150px)',height:'50px'}}>
          
              <input
                type='text'
                id='regularPrice'
                min='50'
                max='10000000'
                required
                //className='p-3 border border-gray-300 rounded-lg'
                //onChange={handleChange}
                //value={formData.regularPrice}
              />
              <p style={{transform:'translate(35px)'}}>price</p>
              </div>
            </div>
            <button style={{width:'300px',transform:'translate(78px)'}}>List</button>
        </form>
        <style>
          {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');



body{
    background-color: #c9d6ff;
    background: linear-gradient(to right, #e2e2e2, #c9d6ff);
    display: flex;
    overflow:hidden;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height:auto;
    width:auto;
}

.container{
    
    border-radius: 3px;
    // box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
    position: relative;
    overflow: hidden;
    width: 768px;
    min-width: 1800px;
    height: 100%;;
    min-height: 1080px;
    background: linear-gradient(white, #236c7e);
}

.container p{
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.3px;
    margin: 20px 0;
}

.container span{
    font-size: 12px;
}

.container a{
    color: #333;
    font-size: 13px;
    text-decoration: none;
    margin: 15px 0 10px;
}

.container button{
    background-color: #ffd900;
    color: #fff;
    font-size: 12px;
    padding: 10px 45px;
    border: 1px solid transparent;
    border-radius: 8px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    margin-top: 10px;
    cursor: pointer;
}

.container button.hidden{
    background-color: transparent;
    border-color: #fff;
}

.container form{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    height: 100%;
    transform:translate(0px);

}

.container input{
    background-color: #eee;
    border: none;
    margin: 8px 0;
    padding: 10px 15px;
    font-size: 13px;
    border-radius: 8px;
    width: 60%;
    outline: none;
    transition: background-color 5s;
}
.container select{
  background-color: #eee;
  border: none;
  margin: 8px 0;
  padding: 10px 15px;
  font-size: 13px;
  border-radius: 8px;
  width: 60%;
  outline: none;
  transition: background-color 5s;
}
.container textarea{
  background-color: #eee;
  border: none;
  margin: 8px 0;
  padding: 10px 15px;
  font-size: 13px;
  border-radius: 8px;
  width: 60%;
  outline: none;
  transition: background-color 5s;
  resize:none;

}

.form-container{
    position: fixed;
    top: 100px;
    height: 88%;
    transition: all 0.6s ease-in-out;
    width: 50%;
    background: linear-gradient(white, #236c7e);
    
    
    

}
  .tx{
    padding:10px;
    margin:5px;
    transform: translateX(200px);
    
  } 
  .toggle{
      background-color: #503a83;
      height: 100%;
      background: linear-gradient(to right, #37e7ca, #246b7e);
      background-size: 200% 100%; 
      background-position: 100%;
      color: #fff;
      marginRight:-100%;
      position: relative;
      left: -50%;
      height: 800px;
      width: 200%;
      transform: translateX(0);
  }
  
  }
        `}
        </style>
      </div>
    </div>
    </div>
  );
};

export default Seller;
