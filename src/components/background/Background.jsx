const Background = ({ imgUrl, clear = false }) => {
  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-full "
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: "-2",
          filter: clear ? "blur(0px)" : "blur(4px)",
        }}
      ></div>
      <div
        className="fixed top-0 left-0 w-full h-full"
        style={{
          background:
            "linear-gradient(to bottom, #f4f6f9 0%, #f4f6f9 25%, rgba(255, 255, 255, 0) 100%)",
          zIndex: "-1",
        }}
      ></div>
    </>
  );
};

export default Background;
