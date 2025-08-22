import Breadcrumbs from "../../../../components/breadcrumbs/Breadcrumbs";
import Background from "../../../../components/background/Background";
import ImageCarousel from "../../../../components/imageCarousel/ImageCarousel";
import VideoPlayer from "../../../../components/videoPlayer/VideoPlayer";
import Particles from "../../../../components/particles/Particles";

const UnleashedLove = () => {
  return (
    <>
      <Background imgUrl={"/images/portfolio/unleashed_love/bg.png"} />
      <Breadcrumbs
        items={[
          { link: "/", title: "Portfolio" },
          { link: "/work/unleashedlove", title: "Unleashed Love" },
        ]}
      />

      <div className="flex flex-nowrap flex-col max-w-5xl mx-auto md:flex-row mt-8 mb-10 panelMask">
        <div className="w-full lg:w-2/3 md:mb-0 text-lg mr-10 py-2 px-4">
          <p className="mb-4 text-justify">
            <strong>Unleashed Love</strong> is a second-person narrative game
            where player plays as a pet dog owned by a young couple, Daniel and
            Alex. Their relationship seems to be falling apart, and through
            making choices, players can explore each character’s perspective and
            influence how the story unfolds.
          </p>
          <p className="mb-4 text-justify">
            The story begins on a Friday night over dinner, as the couple gets
            into an argument over trifle things. After the meal, players can
            choose whether to follow Daniel on a walk or stay home with Alex.
          </p>
          <p className="mb-2 text-justify">
            The game features three key choices and three unique endings—each
            choice leading to a different ending. Within a fully branching story
            world, players can experience full agency over a story about love,
            choices, and trust.
          </p>
        </div>

        <div className="relative">
          <div
            className="hidden lg:block absolute top-1/2 left-0 w-px bg-gray-400"
            style={{ height: "300px", transform: "translateY(-50%)" }}
          ></div>
        </div>

        <div className="w-full lg:w-1/3 pr-0 md:pl-10 px-4">
          <div className="mb-6 space-y-1 text-lg text-gray-600 leading-relaxed py-2">
            <p>
              <strong>Type:</strong> School Project
            </p>
            <p>
              <strong>Role:</strong> Solo developer
            </p>
            <p>
              <strong>Tools/Technology:</strong> Ren’Py
            </p>
            <p>
              <strong>Genre:</strong>{" "}
              <span className="text-sm">Narrative / Visual Novel</span>
            </p>
            <p>
              <strong>Time:</strong> Aug. 2023
            </p>
            <p>
              <strong>Development:</strong> 3 days
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto mb-8 mt-6 px-4 lg:px-0">
        <ImageCarousel
          urls={[
            "/images/portfolio/unleashed_love/1.jpg",
            "/images/portfolio/unleashed_love/2.jpg",
            "/images/portfolio/unleashed_love/3.jpg",
            "/images/portfolio/unleashed_love/4.jpg",
            "/images/portfolio/unleashed_love/5.jpg",
          ]}
        />
      </div>

      <div className="bg-white pt-24 pb-36 lg:pt-36 lg:pb-48 mt-12 mx-auto relative">
        <Particles />
        <VideoPlayer
          url={"https://www.youtube.com/embed/HVjnFko3YJA"}
          title={"Unleashed Love - Gameplay Clip"}
        />
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

export default UnleashedLove;
