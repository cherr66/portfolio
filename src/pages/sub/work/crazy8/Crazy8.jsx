import { Link } from "react-router-dom";
import Breadcrumbs from "../../../../components/breadcrumbs/Breadcrumbs";
import ImageCarousel from "../../../../components/imageCarousel/ImageCarousel";
import VideoPlayer from "../../../../components/videoPlayer/VideoPlayer";
import Particles from "../../../../components/particles/Particles";
import crazy8_1 from "/images/portfolio/crazy8/1.jpg";
import crazy8_2 from "/images/portfolio/crazy8/2.jpg";

const Crazy8 = () => {
  return (
    <>
      <Breadcrumbs
        items={[
          { link: "/", title: "Portfolio" },
          { link: "/work/crazy8", title: "Crazy Eight" },
        ]}
      />

      <section className="container max-w-5xl mx-auto pt-5 mb-20 px-4 md:px-0">
        <div className="flex flex-nowrap flex-col md:flex-row mt-8 mb-6">
          <div className="w-full lg:w-2/3 lg:mb-0 text-lg pr-0 md:pr-10">
            <p className="mb-6 text-justify">
              <strong>Crazy Eight</strong> is a single-player card game, where
              player plays against the computer.
            </p>

            <h1 className="text-2xl font-extrabold mb-3">Gameplay</h1>
            <p className="mb-6 text-justify">
              Each player is dealt seven cards, and a starter card is drawn and
              placed on the discard pile. Each round, players must play a card
              that matches either the number or suit of the top discard. Eights
              are wild cards that can be played regardless the prior rule and
              allow the player to choose a new suit. If players have no playable
              card, they must draw from the stock. The one who get rid of all
              cards in their hand becomes the winner.
            </p>
          </div>

          <div className="relative">
            <div
              className="hidden lg:block absolute top-1/2 left-0 w-px bg-gray-300"
              style={{
                height: "300px",
                transform: "translateY(-50%)",
              }}
            ></div>
          </div>

          <div className="w-full lg:w-1/3 pr-0 md:pl-10 pl-0">
            <div className="mb-6 space-y-1 text-lg text-gray-600 leading-relaxed">
              <p>
                <strong>Type:</strong> Study Project
              </p>
              <p>
                <strong>Role:</strong> Solo developer
              </p>
              <p>
                <strong>Technology:</strong> JavaFX, FXML
              </p>
              <p>
                <strong>Genre:</strong> Card
              </p>
              <p>
                <strong>Time:</strong> Jan. 2024
              </p>
              <p>
                <strong>Development:</strong> 1 week
              </p>
              <p>
                <strong>Link:</strong>{" "}
                <Link
                  to="https://github.com/cherr66/Crazy8"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                >
                  GitHub
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row mt-12 mb-6 gap-8">
          <div className="w-full lg:w-1/2 text-lg pr-0 md:pr-4">
            <h1 className="text-2xl font-extrabold mb-3">Development</h1>
            <p className="mb-4 text-justify">
              This project was my first attempt at learning JavaFX and building
              a small desktop application with it. I learned the basics of
              JavaFX, set up the environment, and completed the project within a
              week.
            </p>
            <p className="mb-4 text-justify">
              The game consists of two scenes —intro and gameplay— both built
              within the same BorderPane in a single FXML file. Scene switching
              is handled simply by toggling visibility. A reactive programming
              style is used for UI elements like the notification panel and suit
              selector.
            </p>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col bg-white/80 shadow-lg backdrop-blur-sm border border-gray-300 rounded-xl overflow-hidden">
            <ImageCarousel urls={[crazy8_1, crazy8_2]} />
          </div>
        </div>
      </section>

      <div className="bg-white pt-36 pb-24 mt-12 mx-auto relative">
        <Particles />
        <div className="max-w-5xl mx-auto">
          <VideoPlayer
            url={"https://www.youtube.com/embed/d04wwdlb1S0"}
            title={"Crazy Eight - Gameplay Clip"}
          />
        </div>

        <div className="flex justify-center mt-16 z-50">
          <a
            href="https://drive.google.com/file/d/1hZLNGtDzsBGLDjL9aZM6fCS7IImbSbt_/view?usp=drive_link"
            target="_blank"
            className="px-8 py-4 bg-black hover:bg-green-600 text-white text-2xl font-semibold rounded-lg shadow transition"
          >
            Download
          </a>
        </div>
      </div>
      <div className="relative">
        <div
          className="absolute top-0 w-full h-10 bg-white "
          style={{ zIndex: -1 }}
        ></div>
      </div>
    </>
  );
};

export default Crazy8;
