import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const GalleryDropDown = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, []);
  useEffect(() => {
    setIsOpen(false);
  }, [router.pathname]);
  return (
    <div>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="nav-link-btn flex flex-row"
      >
        Gallery
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 pt-.75 text-center"
          >
            <path
              fillRule="evenodd"
              d="M12 20.25a.75.75 0 01-.75-.75V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l6.75 6.75a.75.75 0 11-1.06 1.06l-5.47-5.47V19.5a.75.75 0 01-.75.75z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 pt-.75"
          >
            <path
              fillRule="evenodd"
              d="M12 3.75a.75.75 0 01.75.75v13.19l5.47-5.47a.75.75 0 111.06 1.06l-6.75 6.75a.75.75 0 01-1.06 0l-6.75-6.75a.75.75 0 111.06-1.06l5.47 5.47V4.5a.75.75 0 01.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>
      {isOpen && (
        <div className="bg-transparent absolute top-20 text-gray-800 flex flex-col items start rounded-lg p-2">
          <Link className="gallery-dropdown-item" href="/gallery/painting">
            {" "}
            Paintings
          </Link>
          <Link className="gallery-dropdown-item" href="/gallery/photograph">
            {" "}
            Photography
          </Link>
        </div>
      )}
    </div>
  );
};

export default GalleryDropDown;
