import React from "react";
import Background from "../../../../components/background/Background";
import Breadcrumbs from "../../../../components/breadcrumbs/Breadcrumbs";
import Particles from "../../../../components/particles/Particles";
import VideoPlayer from "../../../../components/videoPlayer/VideoPlayer";
import ImageCarousel from "../../../../components/imageCarousel/ImageCarousel";

const HeartOfTheJungle = () => {
  return (
    <>
      <Background imgUrl={"/images/portfolio/heart_of_the_jungle/bg.jpg"} />
      <Breadcrumbs
        items={[
          { link: "/", title: "Portfolio" },
          { link: "/work/heartofthejungle", title: "Heart of the Jungle" },
        ]}
      />

      <main>
        <section className="container max-w-5xl mx-auto pt-5 mb-12 px-4 md:px-0">
          <div className="flex flex-nowrap flex-col md:flex-row mt-8 mb-6">
            <div className="w-full lg:w-2/3 lg:mb-0 text-lg pr-0 lg:pr-10">
              <p className="mb-6 text-justify">
                <strong>Heart of the Jungle</strong> is a 2D platformer, where
                player play the role as a little red panda to retrieve stolen
                items from the evil goblins.
              </p>

              <h1 className="text-2xl font-extrabold mb-3">Gameplay</h1>
              <p className="mb-6 text-justify">
                Players can move left and right, jump, and explore the jungle
                like in most platformers. There are two kinds of goblins
                implemented in the demo version: the blue ones can be scared off
                with a panda roar, while the green ones are more dangerous, that
                players can only dodge them by jumping. Goblins block the
                player's path, with some patrolling restlessly. In areas where
                giant trees form hollow trunks, players can hide inside to rest
                and avoid all damage.
              </p>
              <p className="mb-6 text-justify">
                The full game was originally designed to include seven levels
                and the jungle becomes darker and dangerous as players level up.
                The current demo includes two fully implemented levels.
              </p>
            </div>

            <div className="w-full lg:w-1/3 pr-0 lg:pl-12 pl-12 lg:pr-12 pr-12 lg:pt-12 pt-2">
              <img
                src="/images/portfolio/heart_of_the_jungle/owl.png"
                alt="Wise owl"
                className="w-1/2 max-w-xs mx-auto md:w-full md:max-w-full"
              />
            </div>
          </div>

          <div className="flex flex-nowrap flex-col md:flex-row mt-8 mb-6 ">
            <div className="w-full lg:w-1/3 lg:mb-0 text-lg pr-10">
              <div className="mb-6 space-y-1 text-lg text-gray-600 leading-relaxed">
                <p>
                  <strong>Type:</strong> School Project
                </p>
                <p>
                  <strong>Role:</strong> Art, Programmer
                </p>
                <p>
                  <strong>Tools/Technology:</strong> Unity, PS
                </p>
                <p>
                  <strong>Genre:</strong> Platformer
                </p>
                <p>
                  <strong>Time:</strong> Nov. 2023 – Dec. 2023
                </p>
                <p>
                  <strong>Development:</strong> 1 month
                </p>
                <p>
                  <strong>Link:</strong>{" "}
                  <a
                    href="https://github.com/Sohaib76/Heart-Of-The-Jungle"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                  >
                    GitHub
                  </a>
                </p>
              </div>
            </div>

            <div className="w-full mx-auto md:w-2/3 lg:pr-10 pr-0 lg:pl-12 pl-0">
              <ImageCarousel
                urls={[
                  "/images/portfolio/heart_of_the_jungle/2.jpg",
                  "/images/portfolio/heart_of_the_jungle/3.jpg",
                  "/images/portfolio/heart_of_the_jungle/4.jpg",
                  "/images/portfolio/heart_of_the_jungle/5.jpg",
                  "/images/portfolio/heart_of_the_jungle/6.jpg",
                ]}
              />
            </div>
          </div>

          <div className="flex flex-col max-w-5xl mx-auto justify-end h-24 mt-48 md:-mt-8">
            <h1 className="text-2xl font-extrabold mb-3">Responsibility</h1>
            <p className="mb-4 text-justify text-lg">
              In a team of four, I was primarily responsible for creating most
              of the art assets, including environment art and character
              animations. Besides, I served as tech support throughout
              development, working on UI functionality, testing, and bug fixes.
            </p>
          </div>
        </section>

        <div className="bg-white pt-36 pb-24 mt-12 mx-auto relative">
          <Particles />

          <VideoPlayer
            url={"https://www.youtube.com/embed/FUBgf1G6Z7s"}
            title={"Heart of the Jungle - Gameplay Clip"}
          />

          <div className="flex justify-center mt-16 z-50">
            <a
              href="https://drive.google.com/file/d/1WyQDkfvdH39YMBvOjqIc8gUz3ygScaBc/view?usp=drive_link"
              target="_blank"
              className="px-8 py-4 bg-black hover:bg-red-900 text-white text-2xl font-semibold rounded-lg shadow transition"
            >
              Download
            </a>
          </div>
        </div>
      </main>
      <div className="relative">
        <div
          className="absolute top-0 w-full h-10 bg-white "
          style={{ zIndex: -1 }}
        ></div>
      </div>
    </>
  );
};

export default HeartOfTheJungle;
