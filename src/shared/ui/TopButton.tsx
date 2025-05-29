import React, { useEffect, useState } from "react";

const TopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsVisible(scrollTop > 500);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-[#333] text-white rounded-lg bottom-12 right-12 z-[999] px-5 py-2.5 fixed"
        >
          ↑ Top
        </button>
      )}
    </>
  );
};

export default TopButton;
