import React from "react";

const ButtonMain = ({ txt }: { txt: string }) => {
  return (
    <button className="cursor-pointer bg-primary border border-[#004CC0] px-3 py-1.5 rounded-lg text-white font-vazir text-sm font-bold">
      {txt}
    </button>
  );
};

export default ButtonMain;
