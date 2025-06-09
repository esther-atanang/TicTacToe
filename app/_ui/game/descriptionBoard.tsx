import React from "react";
import Image from "next/image";
import { logo, not_active_o, not_active_x, reload } from "@/app/utils";

const DescriptionBoard = ({
  nextMove,
  onReload,
}: {
  nextMove: string;
  onReload: () => void;
}) => {
  return (
    <nav className="flex *:flex-1 justify-between gap-8 items-center mb-16 md:mb-5">
      <div>
        <Image className="w-16" src={logo} alt="logo" />
      </div>

      <div className="flex items-center justify-center  gap-x-3 uppercase bg-boardColor p-2  pl-4 pr-4 rounded-xl border-b-4 border-borderColor w-full">
        <Image
          className="w-4"
          src={nextMove === "x" ? not_active_x : not_active_o}
          alt=""
        />
        <p className="text-textColor font-semibold tracking-widest">turn</p>
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => onReload()}
          className="bg-textColor p-3 rounded-lg  border-b-2 border-[#979797] "
        >
          <Image src={reload} alt="reload" />
        </button>
      </div>
    </nav>
  );
};

export default DescriptionBoard;
