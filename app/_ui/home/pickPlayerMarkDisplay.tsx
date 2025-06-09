"use client";
import React, { useState } from "react";
import { active_o, active_x, not_active_o, not_active_x } from "@/app/utils";
import Image from "next/image";

const PickPlayerMarkDisplay = ({ setPlayerMark }: any) => {
  //what is this for?
  const [active, setActive] = useState(0);

  function handleClick(id: number) {
    setActive(id);
  }

  return (
    <div className="bg-boardColor flex-col gap-y-6 items-center w-full p-6 rounded-2xl border-b-8 border-borderColor *:uppercase">
      {/**First section */}
      <div>
        <p className="font-semibold text-lg md:text-xl tracking-widest">
          pick player 1&apos;s mark
        </p>
      </div>
      {/**Second section */}
      <div className="bg-borderColor flex w-full justify-between p-3 rounded-xl *:flex-1 *:flex *:justify-center">
        <Button
          active_icon={active_x}
          icon={not_active_x}
          playerMark={"x"}
          id={0}
          active={active}
          onSetActive={handleClick}
          onPickMark={setPlayerMark}
        />
        <Button
          active_icon={active_o}
          icon={not_active_o}
          playerMark={"o"}
          id={1}
          active={active}
          onSetActive={handleClick}
          onPickMark={setPlayerMark}
        />
      </div>
      {/**Third section */}
      <div>
        <p className="opacity-45">remember: x goes first</p>
      </div>
    </div>
  );
};

export default PickPlayerMarkDisplay;

type buttonProps = {
  active_icon: string;
  icon: string;
  playerMark: string;
  id: number;
  active: number;
  onSetActive: (id: number) => void;
  onPickMark: any;
};

function Button({
  active_icon,
  icon,
  playerMark,
  id,
  active,
  onSetActive,
  onPickMark,
}: buttonProps) {
  return (
    <button
      type="button"
      className={`${
        active !== id && "hover:bg-boardColorHover"
      } cursor-pointer rounded-lg p-4 ${active === id && "bg-textColor"}`}
      onClick={() => {
        onSetActive(id);
        onPickMark(playerMark);
      }}
    >
      <Image src={active === id ? active_icon : icon} alt={playerMark} />
    </button>
  );
}
