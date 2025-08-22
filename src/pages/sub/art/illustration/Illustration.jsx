import { useState, useEffect } from "react";
import Breadcrumbs from "../../../../components/breadcrumbs/Breadcrumbs";
import Lightbox from "../../../../components/lightbox/Lightbox";

const Illustration = () => {
  const [lightboxSrc, setLightboxSrc] = useState(null);

  useEffect(() => {
    const imgs = document.querySelectorAll("main img");
    imgs.forEach((img) => {
      const handleClick = () => setLightboxSrc(img.src);
      img.addEventListener("click", handleClick);
      return () => img.removeEventListener("click", handleClick);
    });
  }, []);

  return (
    <>
      <Breadcrumbs
        items={[
          { link: "/arts", title: "Arts" },
          { link: "/arts/illustration", title: "Illustration" },
        ]}
      />

      <main>
        {/* Part 1 */}
        <div className="max-w-5xl mx-auto pt-8 pb-28 px-4 md:px-0">
          <section className="text-center py-8">
            <h2 className="text-2xl font-semibold mb-2">
              Portrait Illustrations
            </h2>
            <p className="text-gray-500"> - 2022 - </p>
          </section>

          <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <figure className="flex flex-col items-center">
              <img
                src="/images/illustrations/22/endless green.jpg"
                alt="Endless Green"
                className="w-full object-cover rounded-lg cursor-pointer shadow-md"
                style={{ maxHeight: "650px" }}
              />
              <figcaption className="mt-2 text-sm text-gray-500">
                Endless Green
              </figcaption>
            </figure>
            <figure className="flex flex-col items-center">
              <img
                src="/images/illustrations/22/she smiles amidst the blossoms.jpg"
                alt="She Smiles Amidst the Blossoms"
                className="w-full object-cover rounded-lg cursor-pointer shadow-md"
                style={{ maxHeight: "650px" }}
              />
              <figcaption className="mt-2 text-sm text-gray-500">
                She Smiles Amidst the Blossoms
              </figcaption>
            </figure>
          </section>

          <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <figure className="flex flex-col items-center md:row-span-2">
              <img
                src="/images/illustrations/22/zen.jpg"
                alt="Zen"
                id="photo-zen"
                className="w-full max-h-[900px] object-contain rounded-lg cursor-pointer shadow-md"
              />
              <figcaption className="mt-2 text-sm text-gray-500">
                Zen
              </figcaption>
            </figure>
            <figure className="flex flex-col items-center">
              <img
                src="/images/illustrations/22/white peony.jpg"
                alt="White Peony"
                className="w-full max-h-[450px] object-contain rounded-lg cursor-pointer shadow-md"
              />
              <figcaption className="mt-2 text-sm text-gray-500">
                White Peony
              </figcaption>
            </figure>
            <figure className="flex flex-col items-center">
              <img
                src="/images/illustrations/22/silent rebellion.jpg"
                alt="Silent Rebellion"
                className="w-full max-h-[450px] object-contain rounded-lg cursor-pointer shadow-md"
              />
              <figcaption className="mt-2 text-sm text-gray-500">
                Silent Rebellion
              </figcaption>
            </figure>
          </section>
        </div>

        {/* Part 2 Heidi */}
        <div className="max-w-8xl mx-auto bg-white pt-16 pb-28">
          <section className="text-center py-8">
            <h2 className="text-2xl font-semibold mb-2">Heidi</h2>
            <p className="text-gray-500"> - 2021 - </p>
          </section>

          <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3">
            <figure className="flex flex-col items-center">
              <img
                src="/images/illustrations/21/heidi1.png"
                alt="Heidi 1"
                className="w-full max-h-[900px] object-contain cursor-pointer"
              />
            </figure>
            <figure className="flex flex-col items-center">
              <img
                src="/images/illustrations/21/heidi2.png"
                alt="Heidi 2"
                id="photo-heidi"
                className="w-full max-h-[900px] object-contain cursor-pointer"
              />
            </figure>
            <figure className="flex flex-col items-center">
              <img
                src="/images/illustrations/21/heidi3.png"
                alt="Heidi 3"
                className="w-full max-h-[900px] object-contain cursor-pointer"
              />
            </figure>
          </section>
        </div>

        {/* Part 3 Style Experiments */}
        <div className="max-w-5xl mx-auto pt-16 pb-28 px-4 md:px-0">
          <section className="text-center py-8">
            <h2 className="text-2xl font-semibold mb-2">Style Experiments</h2>
            <p className="text-gray-500"> - 2021 - </p>
          </section>

          <section className="max-w-5xl mx-auto flex gap-8 mb-12">
            <figure
              className="flex flex-col items-center"
              style={{ flex: "1 1 45%" }}
            >
              <img
                src="/images/illustrations/21/gift.png"
                alt="Gift"
                id="photo-gift"
                className="max-h-96 object-contain rounded-lg cursor-pointer shadow-md"
              />
              <figcaption className="mt-2 text-sm text-gray-500">
                Gift
              </figcaption>
            </figure>
            <figure
              className="flex flex-col items-center"
              style={{ flex: "1 1 55%" }}
            >
              <img
                src="/images/illustrations/21/blooming droplet.png"
                alt="Blooming Droplet"
                className="max-h-96 object-contain rounded-lg cursor-pointer shadow-md"
              />
              <figcaption className="mt-2 text-sm text-gray-500">
                Blooming Droplet
              </figcaption>
            </figure>
          </section>

          <section className="max-w-5xl mx-auto flex grid-cols-1 md:grid-cols-2 gap-8">
            <figure
              className="flex flex-col items-center"
              style={{ flex: "1 1 65%" }}
            >
              <img
                src="/images/illustrations/21/fish stars.png"
                alt="Stargathering"
                className="w-full max-h-128 object-contain rounded-lg cursor-pointer shadow-md"
              />
              <figcaption className="mt-2 text-sm text-gray-500">
                Fish Stars
              </figcaption>
            </figure>
            <div className="flex flex-col gap-8" style={{ flex: "1 1 35%" }}>
              <figure className="flex flex-col items-center">
                <img
                  src="/images/illustrations/21/procrastination.png"
                  alt="Procrastination"
                  className="w-full max-h-48 object-contain rounded-lg cursor-pointer shadow-md"
                />
                <figcaption className="mt-2 text-sm text-gray-500">
                  Procrastination
                </figcaption>
              </figure>
              <figure className="flex flex-col items-center">
                <img
                  src="/images/illustrations/21/last sunset.png"
                  alt="Sunset"
                  className="w-full max-h-48 object-contain rounded-lg cursor-pointer shadow-md"
                />
                <figcaption className="mt-2 text-sm text-gray-500">
                  Last Sunset
                </figcaption>
              </figure>
            </div>
          </section>
        </div>

        {/* Part 4 Anime */}
        <div className="max-w-8xl mx-auto bg-white pt-16 pb-28">
          <section className="text-center py-8">
            <h2 className="text-2xl font-semibold mb-2">Anime-Style</h2>
            <p className="text-gray-500"> - 2020 - </p>
          </section>

          <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-0">
            <figure className="flex flex-col items-center">
              <img
                src="/images/illustrations/20/anime1.png"
                alt="Anime-Style 1"
                className="w-full max-h-[900px] object-cover rounded-lg cursor-pointer shadow-md"
              />
            </figure>

            <div className="flex flex-col gap-8">
              <figure className="flex flex-col items-center">
                <img
                  src="/images/illustrations/20/anime2.png"
                  alt="Anime-Style 2"
                  className="w-full h-72 object-cover rounded-lg cursor-pointer shadow-md"
                />
              </figure>
              <figure className="flex flex-col items-center">
                <img
                  src="/images/illustrations/20/anime3.png"
                  alt="Anime-Style 3"
                  className="w-full h-72 object-cover rounded-lg cursor-pointer shadow-md"
                />
              </figure>
            </div>

            <div className="flex flex-col gap-8">
              <figure className="flex flex-col items-center">
                <img
                  src="/images/illustrations/20/anime4.png"
                  alt="Anime-Style 4"
                  className="w-full h-72 object-cover rounded-lg cursor-pointer shadow-md"
                />
              </figure>
              <figure className="flex flex-col items-center">
                <img
                  src="/images/illustrations/20/anime5.png"
                  alt="Anime-Style 5"
                  id="photo-anime"
                  className="w-full h-72 object-cover rounded-lg cursor-pointer shadow-md"
                />
              </figure>
            </div>

            <figure className="flex flex-col items-center">
              <img
                src="/images/illustrations/20/anime6.png"
                alt="Anime-Style 6"
                className="w-full max-h-[900px] object-cover rounded-lg cursor-pointer shadow-md"
              />
            </figure>
          </section>
        </div>

        {/* Part 5 Misc */}
        <div className="max-w-5xl mx-auto pt-16 pb-28 px-4 md:px-0">
          <section className="text-center py-8">
            <h2 className="text-2xl font-semibold mb-2">Misc</h2>
            <p className="text-gray-500"> - 2020 - </p>
          </section>

          <section className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-8">
              <figure className="flex flex-col items-center">
                <img
                  src="/images/illustrations/20/misc1.png"
                  alt="Misc 1"
                  className="w-full h-48 object-cover rounded-lg cursor-pointer shadow-md"
                />
              </figure>
              <figure className="flex flex-col items-center">
                <img
                  src="/images/illustrations/20/misc4.png"
                  alt="Misc 2"
                  className="w-full h-48 object-cover rounded-lg cursor-pointer shadow-md"
                />
              </figure>
            </div>

            <div className="flex flex-col gap-8">
              <figure className="flex flex-col items-center">
                <img
                  src="/images/illustrations/20/misc2.png"
                  alt="Misc 4"
                  className="w-full h-48 object-cover rounded-lg cursor-pointer shadow-md"
                />
              </figure>
              <figure className="flex flex-col items-center">
                <img
                  src="/images/illustrations/20/misc5.png"
                  alt="Misc 5"
                  id="photo-misc"
                  className="w-full h-48 object-cover rounded-lg cursor-pointer shadow-md"
                />
              </figure>
              <figure className="flex flex-col items-center">
                <img
                  src="/images/illustrations/20/misc7.png"
                  alt="Misc 3"
                  className="w-full h-48 object-cover rounded-lg cursor-pointer shadow-md"
                />
              </figure>
            </div>

            <div className="flex flex-col gap-8">
              <figure className="flex flex-col items-center">
                <img
                  src="/images/illustrations/20/misc3.png"
                  alt="Misc 6"
                  className="w-full h-48 object-cover rounded-lg cursor-pointer shadow-md"
                />
              </figure>
              <figure className="flex flex-col items-center">
                <img
                  src="/images/illustrations/20/misc6.png"
                  alt="Misc 7"
                  className="w-full h-48 object-cover rounded-lg cursor-pointer shadow-md"
                />
              </figure>
            </div>
          </section>
        </div>

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

export default Illustration;
