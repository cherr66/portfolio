const Lightbox = ({ src, onClose }) => {
  if (!src) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 cursor-pointer"
      onClick={onClose}
    >
      <img
        src={src}
        alt="Lightbox"
        className="max-h-full shadow-lg cursor-auto"
      />
    </div>
  );
};

export default Lightbox;
