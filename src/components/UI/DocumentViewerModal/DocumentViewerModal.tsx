import { Minus, Plus, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type DocumentViewerModalProps = {
  isOpen: boolean;
  title: string;
  image: string;
  onClose: () => void;
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export const DocumentViewerModal = ({
  isOpen,
  title,
  image,
  onClose,
}: DocumentViewerModalProps) => {
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const dragRef = useRef({
    isDragging: false,
    startX: 0,
    startY: 0,
    originX: 0,
    originY: 0,
    moved: false,
  });

  const resetView = () => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  const updateZoom = (nextZoom: number) => {
    setZoom((currentZoom) => {
      const newZoom = clamp(nextZoom, 1, 5);

      if (newZoom === 1) {
        setPosition({ x: 0, y: 0 });
      }

      return newZoom;
    });
  };

  const closeModal = () => {
    resetView();
    onClose();
  };

  useEffect(() => {
    if (!isOpen) return;

    resetView();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-slate-950/95 p-4 backdrop-blur-md"
      onClick={(e) => {
        if (dragRef.current.moved) {
          dragRef.current.moved = false;
          return;
        }

        if (e.target === e.currentTarget) {
          closeModal();
        }
      }}
    >
      <button
        type="button"
        onClick={closeModal}
        aria-label="Cerrar"
        className="absolute right-5 top-5 z-[120] flex h-12 w-12 items-center justify-center rounded-full bg-slate-900/90 text-white shadow-xl ring-1 ring-white/15 transition hover:bg-blue-700 focus:outline-none"
      >
        <X className="h-6 w-6" strokeWidth={2.2} />
      </button>

      <div
        className="absolute left-1/2 top-5 z-[120] flex -translate-x-1/2 items-center gap-2 rounded-full bg-slate-900/90 px-3 py-2 text-white shadow-xl ring-1 ring-white/15"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => updateZoom(zoom - 0.25)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20 focus:outline-none"
        >
          <Minus className="h-5 w-5" />
        </button>

        <button
          type="button"
          onClick={resetView}
          className="min-w-[74px] rounded-full bg-white/10 px-4 py-2 text-sm font-bold transition hover:bg-white/20 focus:outline-none"
        >
          {Math.round(zoom * 100)}%
        </button>

        <button
          type="button"
          onClick={() => updateZoom(zoom + 0.25)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20 focus:outline-none"
        >
          <Plus className="h-5 w-5" />
        </button>
      </div>

      <div
        className="flex h-full w-full items-center justify-center overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        onWheel={(e) => {
          e.preventDefault();

          if (e.deltaY < 0) {
            updateZoom(zoom + 0.18);
          } else {
            updateZoom(zoom - 0.18);
          }
        }}
        onPointerDown={(e) => {
          if (zoom <= 1) return;

          dragRef.current.isDragging = true;
          dragRef.current.moved = false;
          dragRef.current.startX = e.clientX;
          dragRef.current.startY = e.clientY;
          dragRef.current.originX = position.x;
          dragRef.current.originY = position.y;

          e.currentTarget.setPointerCapture(e.pointerId);
        }}
        onPointerMove={(e) => {
          if (!dragRef.current.isDragging || zoom <= 1) return;

          const deltaX = e.clientX - dragRef.current.startX;
          const deltaY = e.clientY - dragRef.current.startY;

          if (Math.abs(deltaX) > 3 || Math.abs(deltaY) > 3) {
            dragRef.current.moved = true;
          }

          setPosition({
            x: dragRef.current.originX + deltaX,
            y: dragRef.current.originY + deltaY,
          });
        }}
        onPointerUp={(e) => {
          if (dragRef.current.isDragging) {
            e.currentTarget.releasePointerCapture(e.pointerId);
          }

          dragRef.current.isDragging = false;
        }}
        onPointerCancel={() => {
          dragRef.current.isDragging = false;
        }}
        style={{
          cursor: zoom > 1 ? "grab" : "default",
          touchAction: "none",
        }}
      >
        <img
          src={image}
          alt={title}
          draggable={false}
          onDoubleClick={() => {
            if (zoom === 1) {
              updateZoom(2);
            } else {
              resetView();
            }
          }}
          className="max-h-[88vh] max-w-[94vw] select-none object-contain will-change-transform"
          style={{
            transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${zoom})`,
            transformOrigin: "center center",
            transition: dragRef.current.isDragging
              ? "none"
              : "transform 120ms ease-out",
          }}
        />
      </div>

      <div className="pointer-events-none absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-slate-900/85 px-4 py-2 text-sm font-semibold text-white shadow-lg ring-1 ring-white/10">
        {title}
      </div>
    </div>
  );
};