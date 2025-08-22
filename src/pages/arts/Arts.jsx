import { useState } from "react";
import { Link } from "react-router-dom";
import Background from "../../components/background/Background";
import { artsPageLinks } from "../../dummyData";

const Arts = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      <Background imgUrl={"../src/assets/photography//17.jpg"} />

      <header className="mt-28 mb-12">
        <h1 className="text-2xl text-center font-semibold mb-2">Quick Nav</h1>
      </header>

      <div className="max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4 mb-12 md:mb-36">
        {artsPageLinks.map((link, idx) => (
          <Link
            key={idx}
            to={link.href}
            className="flex flex-col w-full items-center bg-white overflow-hidden"
          >
            <div className="w-full relative" style={{ paddingTop: "100%" }}>
              <img
                src={link.img}
                alt={link.alt}
                style={{
                  objectPosition: link.objectPosition,
                  transition: "transform 0.7s ease-in-out",
                  transform: link.scale
                    ? `scale(${
                        hoveredIndex === idx ? link.scale * 1.1 : link.scale
                      })`
                    : undefined,
                }}
                className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-700 ease-in-out "
                onMouseEnter={() => link.scale && setHoveredIndex(idx)}
                onMouseLeave={() => link.scale && setHoveredIndex(null)}
              />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Arts;
