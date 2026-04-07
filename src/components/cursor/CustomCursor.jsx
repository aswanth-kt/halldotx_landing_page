import { useEffect, useState } from "react";
import useMousePosition from "../../hooks/useMousePosition.js";
import "./cursor.css";

const CustomCursor = () => {
  const { x, y } = useMousePosition();

  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const links = document.querySelectorAll("a, button");

    links.forEach((el) => {
      el.addEventListener("mouseenter", () => setCursorVariant("hover"));
      el.addEventListener("mouseleave", () => setCursorVariant("default"));
    });

    return () => {
      links.forEach((el) => {
        el.removeEventListener("mouseenter", () => {});
        el.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <>
      <div
        className={`cursor-dot ${cursorVariant}`}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>

      <div
        className={`cursor-outline ${cursorVariant}`}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
    </>
  );
};

export default CustomCursor;