import Breadcrumbs from "../../../../components/breadcrumbs/Breadcrumbs";
import ImageCarousel from "../../../../components/imageCarousel/ImageCarousel";
import VideoPlayer from "../../../../components/videoPlayer/VideoPlayer";
import styles from "./arCards.module.css";

const ARCards = () => {
  return (
    <>
      <Breadcrumbs
        items={[
          { link: "/", title: "Portfolio" },
          { link: "/work/arcards", title: "AR Cards" },
        ]}
      />

      <main>
        <section className="container max-w-5xl mx-auto items-center pt-2 mb-20 px-4 lg:px-0">
          <div className="flex flex-nowrap flex-col md:flex-row mt-8 mb-6">
            <div className="w-full lg:w-1/3 lg:mb-0 text-lg ">
              <p className="mb-6 text-justify">
                <strong>AR Cards</strong> is an augmented reality application
                that blends the virtual UNO card game experience into users'
                real-world environment.
              </p>

              <div className="mb-6 space-y-1 text-lg text-gray-600 leading-relaxed">
                <p>
                  <strong>Type:</strong> School Project
                </p>
                <p>
                  <strong>Role:</strong> Programmer
                </p>
                <p>
                  <strong>Tools/Technology:</strong> Unity3D + AR Core
                </p>
                <p>
                  <strong>Genre:</strong> Application/Card Game
                </p>
                <p>
                  <strong>Time:</strong> Apr. 2023 – May 2023
                </p>
                <p>
                  <strong>Development:</strong> 1 month
                </p>
                <p>
                  <strong>Link:</strong>{" "}
                  <a
                    href="https://github.com/EvaZorman/MR_project"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                  >
                    GitHub
                  </a>
                </p>
              </div>

              <h1 className="text-2xl font-extrabold mb-3">Gameplay</h1>
              <p className="mb-6 text-justify">
                By scanning a designated marker — either physical or virtual —
                with an Android device, the game anchors a virtual UNO deck into
                the real world. Players compete against three virtual opponents
                controlled by the system and can only see their own cards. To
                play a card, simply double-tap it on the screen.
              </p>
            </div>

            <div className="w-full lg:w-2/3 pr-0 lg:pl-16 pl-0">
              {/* 视频播放 */}
              <VideoPlayer
                url={"https://www.youtube.com/embed/9dov0TzOGVg"}
                title={"AR Cards - Gameplay Clip"}
              />

              {/* 图片轮播 */}
              <div className="mt-6">
                <ImageCarousel
                  urls={[
                    "/images/portfolio/ar_cards/1.jpg",
                    "/images/portfolio/ar_cards/2.jpg",
                    "/images/portfolio/ar_cards/3.jpg",
                    "/images/portfolio/ar_cards/4.jpg",
                  ]}
                />
              </div>
            </div>
          </div>

          <div className="mb-8 md:-mt-8">
            <h1 className="text-2xl font-extrabold">Responsibility</h1>
            <p className="text-justify text-lg">
              In a team of three, I was primarily responsible for implementing
              the UNO gameplay logic and GUI functionality, while also working
              closely with other developers on debugging and overall
              integration.
            </p>
          </div>
        </section>
      </main>

      <div
        className={
          styles.green_gradient_bg +
          " absolute inset-0 h-full w-full min-h-screen"
        }
        style={{ zIndex: -1 }}
      ></div>
    </>
  );
};

export default ARCards;
