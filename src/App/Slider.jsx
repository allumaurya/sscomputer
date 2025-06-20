
  import React, { useState, useEffect } from 'react';
  import imga from '/src/assets/a.jpeg';
  import imgb from '/src/assets/b.jpeg';
  import imgc from '/src/assets/c.jpeg';
  import imgd from '/src/assets/d.jpeg';
  import imge from '/src/assets/e.jpeg';

     // Import the CSS for styling
  
  // Image URLs array
  const images = [
  
  imge, imga,imgb,imgd,imgc
  ];
  
  const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 4500); // Change image every 3 seconds
  
      return () => clearInterval(intervalId); // Clean up interval when component unmounts
    }, []);
  
    return (
      <div className="slider-container mt-2">
        <div className="slider">
          <div
            className="slider-images "
            style={{ transform: `translateX(-${currentIndex * 100}%)` }} // Slide right to left
          >  <h1 className='font-bold absolute text-7xl text-white  '>SS COMPUTER INSTIUTE <br/> OF TECHNOLOGY</h1> 
            {images.map((img, index) => (
              <div className="slider-item  bg-black   " key={index}>

                <img src={img} alt={`Slide ${index}`} className="slider-image  bg-cover opacity-30 " />

           
              </div>
               
            ))}
            
          </div>

        </div>

      </div>
    );
  };
  
  export default Slider;
  