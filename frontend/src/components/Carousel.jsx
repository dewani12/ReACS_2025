import React, { useState, useEffect } from 'react';
import img1 from "./../assets/collegeImg1.svg"
import img2 from "./../assets/collegeImg2.svg"


const Carousel = () => {
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: `${img1}`,
      title: "ReACS'25",
      subtitle:"The International Conference on Recent Advances in Computing and Systems, 2025 ",
      description: "Department of CSE, IIITM Gwalior Dec 19,20, (Friday and Saturday), 2025"
    },
    {
      image: `${img2}`,
      title: "ReACS'25",
      subtitle: "The International Conference on Recent Advances in Computing and Systems, 2025",
      description: "Department of CSE, IIITM Gwalior Dec 19,20, (Friday and Saturday), 2025"

    },
    
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[400px] inter w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 z-10" />
         
        <img
          src={slide.image}
          alt={slide.title}
          className="w-full h-full object-cover"
        />
          <div className="absolute inset-0 flex flex-col items-center md:items-start max-md:mx-4 md:ml-16 mb-10 justify-end  text-white z-20">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center">{slide.title}</h1>
            <p className="text-base text-center font-bold md:text-start w-[80] md:w-[110]">{slide.subtitle}</p>
            <p className="text-[12px] mt-1 font-bold text-center md:text-start w-[52] md:w-[52]">{slide.description}</p>
          </div>
        </div>
      ))}
      
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;