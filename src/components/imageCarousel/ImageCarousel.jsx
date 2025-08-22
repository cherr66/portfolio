import { useState } from "react";
import Lightbox from "../lightbox/Lightbox";

const ImageCarousel = ({ urls }) => {
  const [current, setCurrent] = useState(0);
  const [lightboxSrc, setLightboxSrc] = useState(null);

  const prev = () => {
    setCurrent(current === 0 ? urls.length - 1 : current - 1);
  };

  const next = () => {
    setCurrent(current === urls.length - 1 ? 0 : current + 1);
  };

  if (!urls || urls.length <= 0) {
    return null;
  }

  return (
    <>
      <div className="relative w-full mx-auto  shadow-lg group">
        <div className="overflow-hidden">
          {urls.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Slide ${index}`}
              className={`w-full transition-all duration-500 cursor-pointer ${
                current === index ? "block" : "hidden"
              }`}
              onClick={() => setLightboxSrc(url)}
            />
          ))}
        </div>

        <button
          onClick={prev}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 rounded-full p-3 bg-transparent group-hover:bg-white group-hover:shadow transition duration-300"
        >
          <i className="fas fa-chevron-left text-white group-hover:text-black transition"></i>
        </button>

        <button
          onClick={next}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 rounded-full p-3 bg-transparent group-hover:bg-white group-hover:shadow transition duration-300"
        >
          <i className="fas fa-chevron-right text-white group-hover:text-black transition"></i>
        </button>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {urls.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                current === index ? "bg-white" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>

      <Lightbox
        src={lightboxSrc}
        onClose={() => {
          setLightboxSrc(null);
        }}
      />
    </>
  );
};

export default ImageCarousel;
