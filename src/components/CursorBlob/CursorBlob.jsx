import { useEffect, useState } from "react";
import { Blobatar } from "@blobatar/react";
import "../CursorBlob/CursorBlob.css";

function CursorBlob() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(event) {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="cursor-blob"
      style={{
        left: position.x,
        top: position.y,
      }}
    >
      <Blobatar name="alain00" animate="hover" size={40} />
    </div>
  );
}

export default CursorBlob;
