import { RemoveScroll } from "react-remove-scroll";
import { useRef } from "react";
export const ModalWrapper = ({ children, isOpen, onCloseClick }) => {
  const ref = useRef();

  if (!isOpen) {
    return null;
  }
  return (
    <RemoveScroll>
      <div
        ref={ref}
        onClick={(e) => {
          if (e.target === ref.current) {
            onCloseClick();
          }
        }}
        className="fixed top-0 left-0 w-full h-full bg-black/30 backdrop-blur-sm flex justify-end items-start z-20"
      >
        <button className="absolute top-0 right-0 p-2" onClick={onCloseClick}>
          <i className="fa-regular fa-circle-xmark text-emerald-400 text-4xl"></i>
        </button>
        {children}
      </div>
    </RemoveScroll>
  );
};
