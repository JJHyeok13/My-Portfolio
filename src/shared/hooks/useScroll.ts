import { useEffect, useState } from "react";

export default function useScrollToSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentId, setCurrentId] = useState<string | null>(null);

  const sectionIds = ["Introduce", "AboutMe", "Skill", "Project"];

  function scrollToSection(id: string) {
    const element = document.getElementById(id);
    const navHeight = 50;

    if (element) {
      setCurrentId(id); // 클릭 시도에도 currentId 설정

      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navHeight;
      const duration = 500;
      const startPosition = window.scrollY;
      const distance = offsetPosition - startPosition;
      let startTime: number;

      function animation(currentTime: number) {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);

        const ease =
          progress < 0.5
            ? 2 * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 2) / 2;

        window.scrollTo(0, startPosition + distance * ease);

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      }

      try {
        requestAnimationFrame(animation);
        setIsOpen(false);
      } catch (error) {
        console.log("scroll to section error:", error);
        window.scrollTo(0, offsetPosition);
        setIsOpen(false);
      }
    }
  }

  useEffect(() => {
    function handleScroll() {
      const OFFSET = 200; // 보정값
      let closestId: string | null = null;
      let minDistance = Number.POSITIVE_INFINITY;

      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const distance = Math.abs(rect.top - OFFSET);

          if (distance < minDistance && rect.top < window.innerHeight) {
            minDistance = distance;
            closestId = id;
          }
        }
      });

      if (closestId !== currentId) {
        setCurrentId(closestId);
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll(); // 초기화 시 한 번 실행

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentId]);

  return {
    scrollToSection,
    setIsOpen,
    isOpen,
    currentId,
  };
}
