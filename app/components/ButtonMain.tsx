import React from "react";

const ButtonMain = ({ txt }: { txt: string }) => {
  return (
    <button
      className="
      cursor-pointer 
      relative
      bg-primary 
      text-white 
      text-sm 
      font-bold 
      px-6 
      py-2.5 
      rounded-xl 
      shadow-[0_4px_14px_0_rgba(0,76,192,0.39)] 
      hover:shadow-[0_6px_20px_rgba(0,76,192,0.45)] 
      hover:-translate-y-0.5 
      active:scale-95 
      transition-all 
      duration-300 
      ease-in-out
      border border-blue-700/10
    "
    >
      {txt}
    </button>
  );
};

export default ButtonMain;
