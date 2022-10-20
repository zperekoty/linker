import { FunctionComponent } from "preact";

import { Logo, GitHub, Telegram } from "../../svg";
import { Anchor } from "../../components";
import type { anchorType } from "../../types";

const Header: FunctionComponent = (): JSX.Element => {
  const anchors: anchorType[] = [
    {
      url: "/",
      b: false,
      classes:
        "2xl:w-[120px] 2xl:h-[120px] lg:w-[60px] lg:h-[60px] w-[30px] h-[30px]",
    },
    {
      url: "https://github.com/zperekoty",
      b: true,
      classes:
        "2xl:w-[120px] 2xl:h-[120px] lg:w-[60px] lg:h-[60px] w-[30px] h-[30px] mr-6",
    },
    {
      url: "https://t.me/zperekoty",
      b: true,
      classes:
        "2xl:w-[120px] 2xl:h-[120px] lg:w-[60px] lg:h-[60px] w-[30px] h-[30px]",
    },
  ];

  return (
    <header class="fixed top-0 flex z-10 w-full p-5 justify-between items-center bg-gray-400/60 dark:bg-slate-800/60 backdrop-blur-sm">
      <div class={`flex justify-center items-center`}>
        <Anchor anchor={anchors[0]}>
          <Logo classes="2xl:w-[120px] 2xl:h-[120px] lg:w-[60px] lg:h-[60px] w-[30px] h-[30px] fill-black dark:fill-white hover:fill-pink-500 dark:hover:fill-green-400 hover:transition-all ease-in-out duration-300" />
        </Anchor>

        <h1 class="ml-4 text-base lg:text-2xl 2xl:text-4xl text-slate-700 dark:text-slate-400">
          Linker <span class="text-gray-600">|</span>{" "}
          <span class="text-slate-500 dark:text-slate-200">
            Захар Перекотий
          </span>
        </h1>
      </div>

      <div className="flex justify-center items-center">
        <Anchor anchor={anchors[1]}>
          <GitHub classes="2xl:w-[120px] 2xl:h-[120px] lg:w-[60px] lg:h-[60px] w-[30px] h-[30px] fill-gray-300 dark:fill-slate-700 hover:fill-black dark:hover:fill-white hover:transition-all ease-in-out duration-300" />
        </Anchor>

        <Anchor anchor={anchors[2]}>
          <Telegram classes="2xl:w-[120px] 2xl:h-[120px] lg:w-[60px] lg:h-[60px] w-[30px] h-[30px] fill-gray-300 dark:fill-slate-700 hover:fill-black dark:hover:fill-white hover:transition-all ease-in-out duration-300" />
        </Anchor>
      </div>
    </header>
  );
};

export default Header;
