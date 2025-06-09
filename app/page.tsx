"use client";
import Image from "next/image";
import { logo } from "./utils";
import PickPlayerMarkDisplay from "./_ui/home/pickPlayerMarkDisplay";
import Button from "./_ui/home/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [playerMark, setPlayerMark] = useState("x");
  const Router = useRouter();
  const handlePlayCpu = () => {
    Router.push(`/game?play=cpu&playermark=${playerMark}`);
    //how will I then determine the ai Mark
  };

  const handlePlayHumans = () => {
    Router.push(`/game?play=player&playermark=${playerMark}`);
    //how will I then determine the ai Mark
  };

  return (
    <main className="flex relative justify-center p-[8rem] pl-4 pr-4">
      <section className="flex flex-col gap-y-10 *:flex *:justify-center w-full max-w-[500px] *:text-textColor">
        <div>
          <Image src={logo} alt="logo" />
        </div>

        <PickPlayerMarkDisplay setPlayerMark={setPlayerMark} />

        <div className="flex flex-col gap-y-3">
          <Button
            handleClick={handlePlayCpu}
            buttonText={"New Game (vs CPU)"}
            color={"yellow"}
          />
          <Button
            handleClick={handlePlayHumans}
            buttonText={"New Game (vs PLAYER)"}
            color={"blue"}
          />
        </div>
      </section>
    </main>
  );
}
