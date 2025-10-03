import Background from "../../../../components/background/Background";
import Breadcrumbs from "../../../../components/breadcrumbs/Breadcrumbs";
import Particles from "../../../../components/particles/Particles";
import VideoPlayer from "../../../../components/videoPlayer/VideoPlayer";
import ImageCarousel from "../../../../components/imageCarousel/ImageCarousel";
import bgCardosseum from "/images/portfolio/cardosseum/bg.jpg";
import card2 from "/images/portfolio/cardosseum/2.jpg";
import card3 from "/images/portfolio/cardosseum/3.jpg";
import card4 from "/images/portfolio/cardosseum/4.jpg";
import card5 from "/images/portfolio/cardosseum/5.jpg";
import card6 from "/images/portfolio/cardosseum/6.jpg";

const Cardosseum = () => {
  return (
    <>
      <Background imgUrl={bgCardosseum} />
      <Breadcrumbs
        items={[
          { link: "/", title: "Portfolio" },
          { link: "/work/cardosseum", title: "Cardosseum" },
        ]}
      />

      <main>
        <section className="container max-w-5xl mx-auto pt-5 mb-20 px-4 lg:px-0">
          <div className="flex flex-nowrap flex-col md:flex-row mt-8 mb-6">
            <div className="w-full lg:w-2/3 lg:mb-0 text-lg pr-0 lg:pr-10">
              <p className="mb-6 text-justify">
                <strong>Cardosseum</strong> is a single-player roguelite
                deckbuilder game inspired by Slay the Spire.
              </p>

              <h1 className="text-2xl font-extrabold mb-3">Gameplay</h1>
              <p className="mb-6 text-justify">
                Players take on the role of a magician competing in a three-day
                magical card tournament. Each day brings turn-based battles
                against rival wizards, along with unpredictable events drawn
                from an event deck. The game starts with choosing an initial
                deck from a random pool of cards, which will later be used in
                turn-based combats against other wizards. The goal of this game
                is to upgrade players' deck along the way, make through the
                three-day tournament, eventually defeat last year’s tournament
                Champion Magician and win the ultimate prize.
              </p>
            </div>

            <div className="relative">
              <div
                className="hidden lg:block absolute top-1/2 left-0 w-px bg-gray-300"
                style={{ height: "400px", transform: "translateY(-50%)" }}
              ></div>
            </div>

            <div className="w-full lg:w-1/3 pr-0 lg:pl-10 pl-0">
              <div className="mb-6 space-y-1 text-lg text-gray-600 leading-relaxed">
                <p>
                  <strong>Type:</strong> School Project
                </p>
                <p>
                  <strong>Role:</strong> Programmer
                </p>
                <p>
                  <strong>Tools/Technology:</strong> Unity
                </p>
                <p>
                  <strong>Genre:</strong> Card
                </p>
                <p>
                  <strong>Development:</strong> 1.5 months
                </p>
                <p>
                  <strong>Time:</strong> Jan. 2023 - Mar. 2023
                </p>
                <p>
                  <strong>Year:</strong> 2023
                </p>
                <p>
                  <strong>Link:</strong>
                  <a
                    href="https://github.com/BeadsInCheese/Cardosseum"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                  >
                    GitHub
                  </a>
                </p>
              </div>
            </div>
          </div>

          <h1 className="text-2xl font-extrabold mb-3">Responsibility</h1>
          <p className="mb-4 text-justify text-lg">
            In a team of five, I collaborated with teammates on implementing
            core systems including the event card system, combat, and day
            progression. I also contributed to animations, tooltip, and use flow
            control.
          </p>

          <div className="max-w-3xl mx-auto mt-10">
            <ImageCarousel urls={[card2, card3, card4, card5, card6]} />
          </div>
        </section>

        <div className="bg-white pt-36 pb-24 mt-12 mx-auto relative">
          <Particles />

          <VideoPlayer
            url={"https://www.youtube.com/embed/T3MZvouuP2U"}
            title={"Cardosseum - Gameplay Clip"}
          />

          <div className="flex justify-center mt-16 z-50">
            <a
              href="https://aarnituli.itch.io/cardosseum"
              target="_blank"
              className="px-8 py-4 bg-black hover:bg-yellow-300 text-white text-2xl font-semibold rounded-lg shadow transition"
            >
              Play on Web
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

export default Cardosseum;
