import { Minus, Plus, X } from "lucide-react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

type DocumentViewerModalProps = {
  isOpen: boolean;
  title: string;
  image: string;
  onClose: () => void;
};

const MIN_ZOOM = 1;
const MAX_ZOOM = 5;
const ZOOM_STEP = 0.25;

const clamp = (
  value: number,
  min: number,
  max: number,
) => Math.min(Math.max(value, min), max);

export const DocumentViewerModal = ({
  isOpen,
  title,
  image,
  onClose,
}: DocumentViewerModalProps) => {
  const [zoom, setZoom] = useState(MIN_ZOOM);
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  const [isDragging, setIsDragging] = useState(false);

  const dragRef = useRef({
    isDragging: false,
    startX: 0,
    startY: 0,
    originX: 0,
    originY: 0,
    moved: false,
  });

  const resetView = useCallback(() => {
    setZoom(MIN_ZOOM);
    setPosition({
      x: 0,
      y: 0,
    });
    setIsDragging(false);

    dragRef.current.isDragging = false;
    dragRef.current.moved = false;
  }, []);

  const changeZoom = useCallback((amount: number) => {
    setZoom((currentZoom) => {
      const nextZoom = clamp(
        currentZoom + amount,
        MIN_ZOOM,
        MAX_ZOOM,
      );

      if (nextZoom === MIN_ZOOM) {
        setPosition({
          x: 0,
          y: 0,
        });
      }

      return nextZoom;
    });
  }, []);

  const setExactZoom = useCallback((nextZoom: number) => {
    const normalizedZoom = clamp(
      nextZoom,
      MIN_ZOOM,
      MAX_ZOOM,
    );

    setZoom(normalizedZoom);

    if (normalizedZoom === MIN_ZOOM) {
      setPosition({
        x: 0,
        y: 0,
      });
    }
  }, []);

  const closeModal = useCallback(() => {
    resetView();
    onClose();
  }, [onClose, resetView]);

  useEffect(() => {
    if (!isOpen) return;

    resetView();

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (
      event: globalThis.KeyboardEvent,
    ) => {
      if (event.key === "Escape") {
        closeModal();
      }

      if (
        event.key === "+" ||
        event.key === "="
      ) {
        changeZoom(ZOOM_STEP);
      }

      if (event.key === "-") {
        changeZoom(-ZOOM_STEP);
      }

      if (event.key === "0") {
        resetView();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, [
    changeZoom,
    closeModal,
    isOpen,
    resetView,
  ]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Visualizador de ${title}`}
      className="
        fixed inset-0 z-[100]
        flex items-center justify-center
        overflow-hidden
        bg-slate-950/95
        p-2
        backdrop-blur-md
        sm:p-4
      "
      onClick={(event) => {
        if (dragRef.current.moved) {
          dragRef.current.moved = false;
          return;
        }

        if (event.target === event.currentTarget) {
          closeModal();
        }
      }}
    >
      <button
        type="button"
        onClick={closeModal}
        aria-label="Cerrar visualizador"
        title="Cerrar"
        className="
          absolute right-3 top-3 z-[130]
          flex h-11 w-11
          cursor-pointer
          items-center justify-center
          rounded-full
          border border-white/15
          bg-slate-900/90
          text-white
          shadow-xl
          backdrop-blur-md
          transition-all duration-200
          hover:scale-105
          hover:border-blue-400/50
          hover:bg-blue-700
          active:scale-95
          focus:outline-none
          focus-visible:ring-2
          focus-visible:ring-blue-400
          focus-visible:ring-offset-2
          focus-visible:ring-offset-slate-950
          sm:right-5
          sm:top-5
          sm:h-12
          sm:w-12
        "
      >
        <X
          className="h-5 w-5 sm:h-6 sm:w-6"
          strokeWidth={2.2}
        />
      </button>

      <div
        className="
          absolute left-1/2 top-3 z-[120]
          flex max-w-[calc(100vw-80px)]
          -translate-x-1/2
          items-center gap-1.5
          rounded-full
          border border-white/15
          bg-slate-900/90
          px-2 py-2
          text-white
          shadow-xl
          backdrop-blur-md
          sm:top-5
          sm:gap-2
          sm:px-3
        "
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => changeZoom(-ZOOM_STEP)}
          disabled={zoom <= MIN_ZOOM}
          aria-label="Reducir zoom"
          title="Reducir zoom"
          className="
            flex h-9 w-9
            cursor-pointer
            items-center justify-center
            rounded-full
            bg-white/10
            text-white
            transition-all duration-200
            hover:scale-105
            hover:bg-white/20
            active:scale-95
            disabled:cursor-not-allowed
            disabled:opacity-35
            disabled:hover:scale-100
            disabled:hover:bg-white/10
            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-blue-400
            sm:h-10
            sm:w-10
          "
        >
          <Minus
            className="h-4 w-4 sm:h-5 sm:w-5"
            strokeWidth={2.2}
          />
        </button>

        <button
          type="button"
          onClick={resetView}
          aria-label="Restablecer zoom"
          title="Restablecer vista"
          className="
            min-w-[66px]
            cursor-pointer
            rounded-full
            bg-white/10
            px-3 py-2
            text-xs font-bold
            text-white
            transition-all duration-200
            hover:scale-[1.03]
            hover:bg-white/20
            active:scale-95
            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-blue-400
            sm:min-w-[74px]
            sm:px-4
            sm:text-sm
          "
        >
          {Math.round(zoom * 100)}%
        </button>

        <button
          type="button"
          onClick={() => changeZoom(ZOOM_STEP)}
          disabled={zoom >= MAX_ZOOM}
          aria-label="Aumentar zoom"
          title="Aumentar zoom"
          className="
            flex h-9 w-9
            cursor-pointer
            items-center justify-center
            rounded-full
            bg-white/10
            text-white
            transition-all duration-200
            hover:scale-105
            hover:bg-white/20
            active:scale-95
            disabled:cursor-not-allowed
            disabled:opacity-35
            disabled:hover:scale-100
            disabled:hover:bg-white/10
            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-blue-400
            sm:h-10
            sm:w-10
          "
        >
          <Plus
            className="h-4 w-4 sm:h-5 sm:w-5"
            strokeWidth={2.2}
          />
        </button>
      </div>

      <div
        className="
          flex h-full w-full
          items-center justify-center
          overflow-hidden
          pt-16
          sm:pt-20
        "
        onClick={(event) => event.stopPropagation()}
        onWheel={(event) => {
          event.preventDefault();

          if (event.deltaY < 0) {
            changeZoom(0.18);
          } else {
            changeZoom(-0.18);
          }
        }}
        onPointerDown={(event) => {
          if (zoom <= MIN_ZOOM) return;

          dragRef.current.isDragging = true;
          dragRef.current.moved = false;
          dragRef.current.startX = event.clientX;
          dragRef.current.startY = event.clientY;
          dragRef.current.originX = position.x;
          dragRef.current.originY = position.y;

          setIsDragging(true);

          event.currentTarget.setPointerCapture(
            event.pointerId,
          );
        }}
        onPointerMove={(event) => {
          if (
            !dragRef.current.isDragging ||
            zoom <= MIN_ZOOM
          ) {
            return;
          }

          const deltaX =
            event.clientX -
            dragRef.current.startX;

          const deltaY =
            event.clientY -
            dragRef.current.startY;

          if (
            Math.abs(deltaX) > 3 ||
            Math.abs(deltaY) > 3
          ) {
            dragRef.current.moved = true;
          }

          setPosition({
            x: dragRef.current.originX + deltaX,
            y: dragRef.current.originY + deltaY,
          });
        }}
        onPointerUp={(event) => {
          if (
            event.currentTarget.hasPointerCapture(
              event.pointerId,
            )
          ) {
            event.currentTarget.releasePointerCapture(
              event.pointerId,
            );
          }

          dragRef.current.isDragging = false;
          setIsDragging(false);
        }}
        onPointerCancel={(event) => {
          if (
            event.currentTarget.hasPointerCapture(
              event.pointerId,
            )
          ) {
            event.currentTarget.releasePointerCapture(
              event.pointerId,
            );
          }

          dragRef.current.isDragging = false;
          setIsDragging(false);
        }}
        style={{
          cursor:
            zoom > MIN_ZOOM
              ? isDragging
                ? "grabbing"
                : "grab"
              : "default",
          touchAction: "none",
        }}
      >
        <img
          src={image}
          alt={title}
          draggable={false}
          onDoubleClick={() => {
            if (zoom === MIN_ZOOM) {
              setExactZoom(2);
            } else {
              resetView();
            }
          }}
          className="
            max-h-[calc(100dvh-130px)]
            max-w-[96vw]
            select-none
            object-contain
            will-change-transform
            sm:max-h-[88vh]
            sm:max-w-[94vw]
          "
          style={{
            transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${zoom})`,
            transformOrigin: "center center",
            transition: isDragging
              ? "none"
              : "transform 120ms ease-out",
          }}
        />
      </div>

      <div
        className="
          pointer-events-none
          absolute bottom-3 left-1/2
          max-w-[calc(100vw-24px)]
          -translate-x-1/2
          truncate rounded-full
          border border-white/10
          bg-slate-900/85
          px-3 py-2
          text-xs font-semibold
          text-white
          shadow-lg
          backdrop-blur-md
          sm:bottom-5
          sm:px-4
          sm:text-sm
        "
      >
        {title}
      </div>
    </div>
  );
};