import React from "react";
import { homePageProjects } from "../../dummyData";
import Background from "../../components/background/Background";

const Home = () => {
  return (
    <>
      <Background imgUrl={"../src/assets/photography//16.jpg"} />
      <header className="mt-20 mb-12 px-4 lg:px-0">
        <div className="flex items-center justify-center">
          <img
            src="https://img.icons8.com/ios/50/quote-left.png"
            alt="quote-left"
            className="w-6 h-6 mr-4 opacity-70"
          />
          <p className="mx-10 pt-6 leading-loose text-center text-gray-600">
            Hi there! I'm Rory Chen, a software engineer and indie game
            developer.
            <br />
            Here are some of my projects.
          </p>
          <img
            src="https://img.icons8.com/ios/50/quote-right.png"
            alt="quote-right"
            className="w-6 h-6 ml-4 opacity-70"
          />
        </div>

        <div className="flex flex-col items-center justify-center mt-4">
          <span className="text-2xl text-gray-400">*･ﾟ</span>
          <span className="text-2xl text-gray-400">✧</span>
          <span className="text-2xl text-gray-400">: </span>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto py-8 mb-16 px-4 lg:px-0">
        {homePageProjects.map((project, idx) => (
          <a
            key={idx}
            href={project.href}
            className="relative overflow-hidden rounded-xl shadow-lg group transform transition-all duration-300"
            style={{ aspectRatio: "4 / 3" }}
          >
            <img
              src={project.img}
              alt={project.name}
              className="absolute inset-0 w-full h-full object-cover bg-white"
              style={{ objectPosition: project.imgPosition }}
            />

            <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-3xl font-bold mb-1">{project.name}</h3>
                <p className="text-base">{project.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default Home;
