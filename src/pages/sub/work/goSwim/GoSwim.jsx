import { useState } from "react";
import Background from "../../../../components/background/Background";
import Breadcrumbs from "../../../../components/breadcrumbs/Breadcrumbs";
import Particles from "../../../../components/particles/Particles";
import VideoPlayer from "../../../../components/videoPlayer/VideoPlayer";
import ImageCarousel from "../../../../components/imageCarousel/ImageCarousel";
import Lightbox from "../../../../components/lightbox/Lightbox";
import styles from "./goswim.module.css";
import goswim_bg from "/images/portfolio/goswim/bg.jpg";
import swim_ring from "/images/portfolio/goswim/swim ring.png";
import mosaic_tiles from "/images/portfolio/goswim/mosaic tiles.jpg";
import pool_scene from "/images/portfolio/goswim/process/pool scene in blender.jpg";
import animate_character from "/images/portfolio/goswim/process/animate character.jpg";
import material_mask from "/images/portfolio/goswim/process/material mask.png";
import screenshot1 from "/images/portfolio/goswim/screenshot1.png";
import screenshot2 from "/images/portfolio/goswim/screenshot2.png";
import screenshot3 from "/images/portfolio/goswim/screenshot3.png";
import screenshot4 from "/images/portfolio/goswim/screenshot4.png";
import screenshot5 from "/images/portfolio/goswim/screenshot5.png";

const GoSwim = () => {
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const [section1Expanded, setSection1Expanded] = useState(false);
  const [section2Expanded, setSection2Expanded] = useState(false);

  return (
    <>
      <Background imgUrl={goswim_bg} clear={true} />
      <Breadcrumbs
        items={[
          { link: "/", title: "Portfolio" },
          { link: "/work/goswim", title: "GoSwim" },
        ]}
      />

      <main>
        <section className="container max-w-5xl mx-auto pt-5 mb-12 px-4 md:px-0">
          <div className="flex flex-nowrap flex-col md:flex-row mt-8 mb-6">
            <div className="w-full md:w-2/3 md:mb-0 text-lg pr-10">
              <p className="mb-6 text-justify">
                <strong>GoSwim</strong> is a third-person single-player casual
                game set in an increasingly crowded swimming pool. Players
                control a girl character to reach the finish line or to collect
                items while avoiding others. The pool is filled with different
                chracters with all kinds of annoying behaviors. To avoid
                collision, players can use skills to stun others or even kick
                them out of the pool. Enjoy the chaos and try to survive for as
                long as you can!
              </p>
            </div>

            <div className="relative">
              <div
                className="lg:block absolute top-1/2 left-0 w-px bg-gray-300"
                style={{
                  height: "200px",
                  transform: "translateY(-50%)",
                }}
              ></div>
            </div>

            <div className="w-full pl-0 md:w-1/3 md:pl-10">
              <div className="mb-6 space-y-1 text-lg text-gray-600 leading-relaxed">
                <p>
                  <strong>Type:</strong> Study Project
                </p>
                <p>
                  <strong>Role:</strong> Solo Developer
                </p>
                <p>
                  <strong>Tools/Technology:</strong> Unity, Blender, PS
                </p>
                <p>
                  <strong>Genre:</strong> Casual/Simulator
                </p>
                <p>
                  <strong>Time:</strong> July 2024 - Mar. 2025
                </p>
                <p>
                  <strong>Development:</strong> 8 months
                </p>
                <p>
                  <strong>Link:</strong>{" "}
                  <a
                    href="https://github.com/cherr66/Swim-Simulator"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                  >
                    GitHub
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="relative mb-6 flex flex-nowrap flex-col md:flex-row md:-mt-10">
            <div className="w-full lg:w-1/2 lg:mb-0 text-lg lg:pr-10 pr-10">
              <div className="relative w-full mb-6">
                <VideoPlayer
                  url={"https://www.youtube.com/embed/MSfTwVUpz0c"}
                  title={"GoSwim - 1 Minutes Trailer"}
                />
              </div>
              <div className="relative w-full mb-6">
                <VideoPlayer
                  url={"https://www.youtube.com/embed/Dt51i5m4zH0"}
                  title={"GoSwim - 5 Minutes Gameplay Clip"}
                />
              </div>
            </div>

            <div className="w-full md:w-1/2 md:mb-0 text-lg md:pl-10 pl-0">
              <figure className="mt-8 md:mt-36 md:mb-8 md:-ml-2">
                <img src={swim_ring} data-ignore="true" className="w-1/2" />
              </figure>

              <div className="mb-4 px-2">
                <h1 className="text-2xl font-extrabold mt-8">
                  Overall Features
                </h1>
                <ol className="mb-6 list-disc list-inside text-justify text-lg text-gray-700 leading-relaxed">
                  <li>2 game modes;</li>
                  <li>5 player actions and skills;</li>
                  <li>
                    Hair and outfit customization for the player character;
                  </li>
                  <li>Unique NPC behaviors controlled by a behavior tree;</li>
                  <li>Increasing difficulty over time;</li>
                  <li>Indoor and outdoor environments;</li>
                  <li>Localization system.</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.bg_cyan}>
          <img src={mosaic_tiles} data-ignore="true" className="w-full" />

          <div className="relative mt-28 mb-6 max-w-5xl mx-auto  px-4 md:px-0">
            <h1 className="text-2xl font-extrabold mb-6">Development</h1>
            <p className="mb-6 text-justify text-lg leading-relaxed">
              Inspired by some awkward encounters last summer, I decided to
              create a pool-themed game. I've also always wanted to learn 3D
              modelling, so I saw this project as the perfect opportunity to
              start from scratch. The development process was both fun and
              rewarding. What made the project more meaningful was turning an
              unpleasant memory into a playable and shareable game.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto  px-4 md:px-0">
            <div className="flex flex-nowrap flex-col md:flex-row">
              <div className="w-full lg:w-2/3 lg:mb-0 text-lg lg:pr-10 pr-0">
                {!section1Expanded && (
                  <div className="text-justify text-lg leading-relaxed">
                    I started by documenting the game design...
                  </div>
                )}
                {section1Expanded && (
                  <div className="section1-full">
                    <p className="mb-6 text-justify text-lg leading-relaxed">
                      I started by documenting the game design and learning the
                      basics of Blender and 3D modeling. The first model I
                      created was the pool scene. I built the core area entirely
                      by myself, including the pool, nearby buildings, and all
                      the furniture and objects within. To reduce workload, I
                      used some premade assets in non-essential areas—for
                      example, the outermost building blocks and a few small
                      drink props. Starting with a relatively large scene helped
                      me work more smoothly later when creating the indoor
                      fitting room.
                    </p>
                    <p className="mb-6 text-justify text-lg leading-relaxed">
                      After that, I moved on to character design and modeling. I
                      chose a low-poly style, which not only simplified my work
                      but also gave a cartoonish feel. My work included
                      modeling, rigging, weight painting, UV unwrapping, texture
                      painting, and animation for all characters.
                    </p>
                    <p className="text-justify text-lg leading-relaxed">
                      Once the primary assets were made, I shifted my focus to
                      Unity and programming. I used flat shading for most items
                      in the scene to enhance the cartoonish feel. Besides, I
                      utilized full screen shader feature from Unity URP to
                      apply an outline effect on the visuals. By combining both
                      depth- and color-based edge detection, I made sure the
                      outlines remained clean and didn’t overwhelm the visuals,
                      especially in the background.
                    </p>
                  </div>
                )}

                <button
                  className={
                    styles.hover_blue +
                    " text-base px-4 py-2 mt-4 bg-black text-white font-semibold rounded-lg shadow-md transition-all duration-200"
                  }
                  onClick={() => {
                    setSection1Expanded(!section1Expanded);
                  }}
                >
                  {section1Expanded ? "Load less" : "Load more"}
                </button>
              </div>
              {section1Expanded && (
                <div className="w-full lg:w-1/3 lg:mb-0 mt-6 md:mt-0 text-lg section1-full">
                  <figure className="mb-6">
                    <img
                      src={pool_scene}
                      alt="Pool scene in blender"
                      className="rounded-lg shadow-md mb-2 cursor-pointer"
                      onClick={() => setLightboxSrc(pool_scene)}
                    />
                    <figcaption className="text-center text-gray-500 text-sm">
                      Pool scene in blender
                    </figcaption>
                  </figure>
                  <figure className="mb-6">
                    <img
                      src={animate_character}
                      alt="Animate character"
                      className="rounded-lg shadow-md mb-2 cursor-pointer"
                      onClick={() => setLightboxSrc(animate_character)}
                    />
                    <figcaption className="text-center text-gray-500 text-sm">
                      Animate character
                    </figcaption>
                  </figure>
                </div>
              )}
            </div>
          </div>

          <div className="relative pb-4 max-w-5xl mx-auto mt-16 mb-20 px-4 md:px-0">
            <div className={styles.bubble_divider}>
              ✧･ﾟ: *｡.｡･ﾟ✧*:･ﾟ｡.｡:*✧･ﾟ: *
            </div>
          </div>

          <div className="relative pb-28 max-w-5xl mx-auto px-4 md:px-0">
            <h1 className="text-2xl font-extrabold mb-6">
              Interesting Problems
            </h1>
            {!section2Expanded && (
              <div
                id="section2-preview"
                className="text-lg text-gray-700 leading-relaxed text-justify mt-12"
              >
                During the development process, I encountered some interesting
                problems...
              </div>
            )}

            {section2Expanded && (
              <>
                <p className="text-lg text-gray-700 section2-full">
                  During the development process, I encountered some interesting
                  problems. Below are some of the issues and their solutions.
                </p>
                <div className="text-lg text-gray-700 leading-relaxed text-justify mt-12 section2-full">
                  <h2 className="text-xl font-bold mb-4">
                    Material Mask for Decorative NPCs
                  </h2>
                  <figure className="w-full md:w-1/3 float-right px-8 py-4 md:block">
                    <img
                      src={material_mask}
                      alt="A material mask separating bikini from body part"
                      className="rounded-lg shadow-md mb-2 cursor-pointer"
                      onClick={() => setLightboxSrc(material_mask)}
                    />
                    <figcaption className="text-center text-gray-500 text-sm">
                      A material mask separating bikini from body part
                    </figcaption>
                  </figure>
                  <p className="mb-4 w-full md:w-2/3 ">
                    To make the scene look natural and vivid, I decided to place
                    some active characters in areas where players cannot reach.
                    These non-interactable NPCs are called decorative NPCs in
                    this project. I want them to look diverse, but modeling each
                    one individually would have been a massive workload. My
                    eventual solution was to personalize them by varying body
                    types, hairstyles, hair colors, skin tones, clothing styles,
                    and clothing colors.
                  </p>
                  <p className="mb-4 w-full md:w-2/3 ">
                    For body type variation, I first modeled one base body, then
                    modified its mesh and armature to create four additional
                    types—resulting in five total body meshes representing
                    women, men, children, elderly, and pregnant characters. In
                    Unity, all these models share the same avatar to allow
                    animation reuse. I also made several different hair meshes.
                    Each body mesh and hair mesh were exported separately, and
                    individual materials were used in Unity to control their
                    color respectively.
                  </p>
                  <figure className="w-full md:w-1/3 float-right px-8 py-4 md:hidden">
                    <img
                      src={material_mask}
                      alt="A material mask separating bikini from body part"
                      className="rounded-lg shadow-md mb-2 cursor-pointer"
                      onClick={() => setLightboxSrc(material_mask)}
                    />
                    <figcaption className="text-center text-gray-500 text-sm">
                      A material mask separating bikini from body part
                    </figcaption>
                  </figure>
                  <p>
                    As for skin tone and clothing customization, instead of
                    painting clothes and skin on a single texture for the final
                    material, I created several material masks. These masks
                    separate the skin from clothing areas on the body mesh,
                    allowing me to control skin and clothing colors respectively
                    through scripting when instantiating material instances.
                    This method significantly reduced my workload.
                  </p>
                </div>

                <div className="w-full md:w-2/3 text-lg text-gray-700 leading-relaxed text-justify mt-12 section2-full">
                  <h2 className="text-xl font-bold mb-4">
                    Player Skill Adjustment
                  </h2>
                  <p className="mb-4">
                    In the current version, the player’s splash skill affects a
                    rectangular area in front of the character, which aligns
                    with real-life experience. Based on that, I first completed
                    the skill particle effects and then the code.
                  </p>
                  <p className="mb-4">
                    However, during playtesting, I found that this skill seems a
                    bit underused and ineffective especially when the pool
                    becomes crowded as difficulty raises, because enemies are
                    very likely to pile up around players and touch players from
                    side and back.
                  </p>
                  <p>
                    To improve this issue, a possible future adjustment is to
                    add a skill upgrade feature — expanding the area of effect
                    from a limited rectangle to a larger circular area centered
                    on the player, along with new animations and skill effects.
                  </p>
                </div>
              </>
            )}

            <button
              id="section2-toggle"
              className={
                styles.hover_blue +
                " text-base px-4 py-2 mt-4 bg-black text-white font-semibold rounded-lg shadow-md transition-all duration-200"
              }
              onClick={() => {
                setSection2Expanded(!section2Expanded);
              }}
            >
              {section2Expanded ? "Load less" : "Load more"}
            </button>
          </div>
        </section>

        <div className="bg-white pt-36 pb-24 mx-auto relative">
          <Particles colorSet="summer" />

          <div className="max-w-5xl mx-auto px-4 lg:px-0">
            <ImageCarousel
              urls={[
                screenshot1,
                screenshot2,
                screenshot3,
                screenshot4,
                screenshot5,
              ]}
            />

            <div className="flex justify-center mt-16 z-50">
              <a
                href="https://rottencarambola.itch.io/goswim"
                target="_blank"
                className={
                  styles.hover_teal +
                  " px-8 py-4 bg-black text-white text-2xl font-semibold rounded-lg shadow transition"
                }
              >
                Play on Web
              </a>
            </div>
          </div>
        </div>

        <Lightbox
          src={lightboxSrc}
          onClose={() => {
            setLightboxSrc(null);
          }}
        />
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

export default GoSwim;
