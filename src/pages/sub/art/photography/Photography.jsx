import { useState, useEffect, useRef } from "react";
import Breadcrumbs from "../../../../components/breadcrumbs/Breadcrumbs";
import Lightbox from "../../../../components/lightbox/Lightbox";

const Photography = () => {
  const batchSize = 9;
  const loadedCount = useRef(0);
  const numCols = 3;
  const gap = 16; // gap-4 = 16px

  const [columnWidth, setColumnWidth] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [columns, setColumns] = useState([[], [], []]);
  const [isLoading, setIsLoading] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState(null);

  const getPhotos = () => {
    const modules = import.meta.glob("/src/assets/photography/*.{jpg,png}", {
      eager: true,
    });
    return Object.values(modules)
      .map((m) => m.default)
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  };

  const assignImagesToColumns = (images) => {
    setColumns((prevColumns) => {
      const newColumns = [...prevColumns];

      images.forEach((img) => {
        // to avoid twice render under strict mode
        const alreadyExists = newColumns.some((col) =>
          col.some((imgCol) => img.src === imgCol.src)
        );
        if (alreadyExists) {
          return;
        }

        const colHeights = newColumns.map((col) =>
          col.reduce((sum, i) => sum + i.height, 0)
        );
        const shortestIndex = colHeights.indexOf(Math.min(...colHeights));
        newColumns[shortestIndex].push(img);
      });
      return newColumns;
    });
  };

  const loadMorePhotos = () => {
    if (loadedCount.current >= photos.length || isLoading) return;
    setIsLoading(true);

    const nextBatch = photos.slice(
      loadedCount.current,
      loadedCount.current + batchSize
    );

    const imagesWithHeight = [];
    let loadedImagesCount = 0;

    nextBatch.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        const renderedHeight =
          (img.naturalHeight / img.naturalWidth) * columnWidth;

        imagesWithHeight.push({ src, height: renderedHeight });
        loadedImagesCount++;

        if (loadedImagesCount === nextBatch.length) {
          assignImagesToColumns(imagesWithHeight);
          loadedCount.current += nextBatch.length;
          setIsLoading(false);
        }
      };
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 200 &&
        !isLoading
      ) {
        loadMorePhotos();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading, photos]);

  useEffect(() => {
    if (photos.length > 0) loadMorePhotos();
  }, [photos]);

  useEffect(() => {
    const updateColumnWidth = () => {
      const container = document.querySelector("#arts > .flex");
      if (!container) return;

      const colWidth = (container.offsetWidth - gap * (numCols - 1)) / numCols;
      setColumnWidth(colWidth);
    };

    updateColumnWidth();
    window.addEventListener("resize", updateColumnWidth);
    return () => window.removeEventListener("resize", updateColumnWidth);
  }, []);

  useEffect(() => {
    (() => {
      const urls = getPhotos();
      setPhotos(urls);
    })();
  }, []);

  return (
    <>
      <Breadcrumbs
        items={[
          { link: "/arts", title: "Arts" },
          { link: "/arts/photography", title: "Photography" },
        ]}
      />

      <main>
        <section className="mt-20 max-w-5xl mx-auto px-4 lg:px-0" id="arts">
          <div className="flex gap-4">
            {columns.map((col, colIndex) => (
              <div key={colIndex} className="flex-1 flex flex-col gap-4">
                {col.map((photo, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={photo.src}
                    alt="Photo"
                    className="rounded-lg shadow-md object-cover w-full cursor-pointer transition-transform duration-300 hover:scale-105"
                    onClick={() => setLightboxSrc(photo.src)}
                  />
                ))}
              </div>
            ))}
          </div>

          {/* Loading 动画 */}
          {isLoading && (
            <div className="text-center my-8 text-gray-500">
              <div className="flex justify-center items-center space-x-2">
                <div className="w-4 h-4 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-4 h-4 bg-gray-400 rounded-full [animation-delay:.1s]"></div>
                <div className="w-4 h-4 bg-gray-400 rounded-full [animation-delay:.2s]"></div>
              </div>
              <p className="mt-2 text-sm">Loading more photos...</p>
            </div>
          )}
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

export default Photography;
