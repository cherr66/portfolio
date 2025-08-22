import { useState } from "react";
import Breadcrumbs from "../../../../components/breadcrumbs/Breadcrumbs";
import Particles from "../../../../components/particles/Particles";
import Lightbox from "../../../../components/lightbox/Lightbox";
import styles from "./acedemo.module.css";

const AceDemo = () => {
  const [lightboxSrc, setLightboxSrc] = useState(null);

  return (
    <>
      <div className={styles.particles_container}>
        <Particles />
      </div>

      <Breadcrumbs
        items={[
          { link: "/", title: "Portfolio" },
          { link: "/work/acedemo", title: "ACE Demo" },
        ]}
      />

      <main>
        <section className="container max-w-5xl mx-auto pt-5 mb-20 px-4 lg:px-0">
          <div className="flex flex-nowrap flex-col md:flex-row mb-6">
            <div className="w-full lg:w-2/3 lg:mb-0 text-lg pr-0 lg:pr-10 panelMask">
              <p className="mb-6 text-justify">
                People with visual impairments encounter barriers when dealing
                with digital games, as the majority of them heavily rely on
                graphics and visual content. Although commercial games nowadays
                include accessible options, a universal assistive tool for a
                wide range of digital games is still lacking.
              </p>
              <p className="mb-6 text-justify">
                As part of my thesis —{" "}
                <a
                  href="https://www.utupub.fi/handle/10024/178160"
                  className="italic text-blue-600 hover:underline"
                  target="_blank"
                >
                  Enhancing HTML5 Games Accessibility: An Exploration of
                  Assistive Technology for People with Visual Impairments
                </a>{" "}
                — I developed a prototype Chrome add-on to explore the
                feasibility of a universal assistive tool for HTML5 games.
              </p>
            </div>

            <div className="relative">
              <div
                className="hidden lg:block absolute top-1/2 left-0 w-px bg-gray-300"
                style={{ height: "240px", transform: "translateY(-50%)" }}
              ></div>
            </div>

            <div className="w-full lg:w-1/3 pr-0 lg:pr-10 pl-0 md:pl-10 panelMask">
              <div className="mb-6 space-y-1 text-lg text-gray-600 leading-relaxed">
                <p>
                  <strong>Type:</strong> Thesis Project
                </p>
                <p>
                  <strong>Role:</strong> Solo Developer
                </p>
                <p>
                  <strong>Technology:</strong> HTML, CSS, JS
                </p>
                <p>
                  <strong>Time:</strong> Feb. 2024 - Mar. 2024
                </p>
                <p>
                  <strong>Development:</strong> 2 months
                </p>
                <p>
                  <strong>Link:</strong>{" "}
                  <a
                    href="https://github.com/cherr66/ACE-demo"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                  >
                    GitHub
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="relative mb-6 panelMask">
            <h1 className="text-2xl font-extrabold mb-4">Features</h1>

            <div className="flex flex-nowrap flex-col md:flex-row">
              <div className="w-full lg:w-1/2 lg:mb-0 text-lg lg:pr-10 pr-0">
                <ul className="mb-6 list-disc list-inside text-justify text-lg text-gray-700 leading-relaxed">
                  <li>
                    Injects appropriate ARIA labels to improve screen reader
                    support for better content identification;
                  </li>
                  <li>
                    Highlights clickable or interactive elements in HTML5 games
                    to assist players with low vision;
                  </li>
                  <li>
                    Sonification – uses sound cues to guide players in finding
                    interactive elements, based on two strategies: volume-based
                    and tempo-based;
                  </li>
                  <li>
                    Narration – provides an alternative to screen readers for
                    spoken content;
                  </li>
                  <li>Font customization for better readability;</li>
                  <li>Cursor customization for improved visibility;</li>
                  <li>Magnifier tool for zooming in on small details.</li>
                </ul>
              </div>
              <div className="w-full lg:w-1/2 lg:mb-0 text-lg">
                <figure className="mb-6">
                  <img
                    src="/images/portfolio/ace_demo/user interface.jpg"
                    alt="User Interface"
                    className="rounded-lg shadow-md mb-2 cursor-pointer"
                    onClick={() =>
                      setLightboxSrc(
                        "/images/portfolio/ace_demo/user interface.jpg"
                      )
                    }
                  />
                  <figcaption className="text-center text-gray-500 text-sm">
                    User Interface
                  </figcaption>
                </figure>
              </div>
            </div>

            <p className="mb-6 text-justify text-lg leading-relaxed">
              Due to time constraints, the current version and features are
              limited to web games built upon vanilla HTML5. Further research is
              needed to adapt the tool for games using advanced graphics
              technology like WebGL.
            </p>
          </div>

          <div className="flex flex-nowrap flex-col md:flex-row mt-12 mb-8">
            <div className="w-full lg:w-1/2 lg:mb-0 text-lg lg:pr-4 pr-0">
              <figure className="mb-6">
                <img
                  src="/images/portfolio/ace_demo/with game.jpg"
                  alt="Use with a HTML5 Game"
                  className="rounded-lg shadow-md mb-2 cursor-pointer"
                  onClick={() =>
                    setLightboxSrc("/images/portfolio/ace_demo/with game.jpg")
                  }
                />
                <figcaption className="text-center text-gray-500 text-sm">
                  Use with a HTML5 Game
                </figcaption>
              </figure>
            </div>
            <div className="w-full lg:w-1/2 lg:mb-0 text-lg lg:pl-4 pl-0">
              <figure className="mb-6">
                <img
                  src="/images/portfolio/ace_demo/highlight feature.jpg"
                  alt="Highlight Feature"
                  className="rounded-lg shadow-md mb-2 cursor-pointer"
                  onClick={() =>
                    setLightboxSrc(
                      "/images/portfolio/ace_demo/highlight feature.jpg"
                    )
                  }
                />
                <figcaption className="text-center text-gray-500 text-sm">
                  Highlight Feature
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="flex justify-center mt-2 mb-32 z-50">
            <a
              href="https://chromewebstore.google.com/detail/ace-demo/hjeimilonjjfpmiopchdhdedjfpgdabk?hl=en&authuser=1&pli=1"
              target="_blank"
              className="px-12 py-4 bg-black hover:bg-blue-500 text-white text-2xl font-semibold rounded-lg shadow transition"
            >
              Install
            </a>
          </div>
        </section>

        <Lightbox
          src={lightboxSrc}
          onClose={() => {
            setLightboxSrc(null);
          }}
        />
      </main>
    </>
  );
};

export default AceDemo;
