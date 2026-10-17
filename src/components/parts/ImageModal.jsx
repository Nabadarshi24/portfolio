import { useEffect } from "react";
import { FaTimes } from "react-icons/fa";

const ImageModal = ({ src, alt, onClose }) => {

  useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && onClose();

    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden"; // lock page scroll

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 text-white text-2xl hover:text-orange-400 transition cursor-pointer"
        onClick={onClose}
        aria-label="Close"
      >
        <FaTimes />
      </button>

      <img
        src={src}
        alt={alt}
        className="max-h-[90vh] max-w-full rounded-lg shadow-2xl object-contain"
        onClick={(e) => e.stopPropagation()} // clicking the image shouldn't close it
      />
    </div>
  );
};

export default ImageModal;