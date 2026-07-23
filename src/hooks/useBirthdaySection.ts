import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useBirthdaySection = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<{
    title: string;
    image: string;
  } | null>(null);

  const location = useLocation();
  const navigate = useNavigate();
  const birthdaySectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (location.hash !== "#cumpleanos") return;

    const scrollTimer = window.setTimeout(() => {
      birthdaySectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 150);

    const clearHashTimer = window.setTimeout(() => {
      navigate("/", {
        replace: true,
        preventScrollReset: true,
      });
    }, 950);

    return () => {
      window.clearTimeout(scrollTimer);
      window.clearTimeout(clearHashTimer);
    };
  }, [location.hash, navigate]);

  return {
    birthdaySectionRef,
    selectedPhoto,
    setSelectedPhoto,
  };
};
