import Image from "next/image";
import { o_shape, x_shape } from "@/app/utils";
import { useRouter } from "next/navigation";

const PopUpMenu = ({
  playerWon,
  takesNextRound,
  onNextRound,
}: {
  playerWon: boolean | "tie";
  takesNextRound: string;
  onNextRound: () => void;
}) => {
  const Route = useRouter();
  // console.log(takesNextRound)
  return (
    <div className="bg-boardColorHover absolute w-full z-50 left-[50%] right-0 flex flex-col p-10 top-[50%] -translate-x-[50%] -translate-y-[50%] items-center gap-y-6">
      <div>
        <p className="uppercase text-textColor font-bold text-xl tracking-wider">
          {playerWon === true
            ? "Yayyy, you won this round..."
            : playerWon === false
            ? "oh no, you lost..."
            : "It's a tie, try again..."}
        </p>
      </div>
      <div className="flex items-center gap-x-4">
        <Image
          src={
            takesNextRound === "o"
              ? o_shape
              : takesNextRound === "x"
              ? x_shape
              : null
          }
          alt="The player's mark."
        />
        <p
          className={`uppercase text-[1.3rem] md:text-5xl ${
            takesNextRound === "o" ? "text-btn-yellow" : "text-btn-blue"
          } font-semibold`}
        >
          Takes the round
        </p>
      </div>
      <div className="flex gap-x-6">
        <button
          type="button"
          className={`text-main bg-textColor border-silver-border-color active:border-b-[0.1rem] font-bold md:text-xl rounded-2xl uppercase text-[1.2rem]  p-4 md:pl-6 md:pr-6 border-b-[0.3rem]`}
          onClick={() => Route.push("/")}
        >
          quit
        </button>
        <button
          type="button"
          className={`text-main bg-btn-yellow border-btn-border-yellow  active:border-b-[0.1rem] font-bold md:text-xl rounded-2xl uppercase text-[1.2rem]  p-4 pl-6 pr-6 border-b-[0.3rem]`}
          onClick={onNextRound}
        >
          next round
        </button>
      </div>
    </div>
  );
};

export default PopUpMenu;
