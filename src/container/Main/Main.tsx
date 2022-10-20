import { FunctionComponent } from "preact";

import { Card } from "../../components";
import type { cardType } from "../../types";
import { GitHub, Telegram, Instagram, Vkontakte } from "../../svg";
import { Kanforest, Kalina } from "../../assets";

const Main: FunctionComponent = (): JSX.Element => {
  const cards: cardType[] = [
    {
      text: "Linker GitHub repository",
      url: "https://github.com/zperekoty/linker",
      icon: (
        <GitHub classes="2xl:w-[160px] 2xl:h-[160px] lg:w-[80px] lg:h-[80px] w-[40px] h-[40px] fill-gray-300 dark:fill-slate-700 hover:transition-all hover:fill-black dark:hover:fill-white ease-in-out duration-300" />
      ),
      anchorClasses:
        "2xl:w-[160px] 2xl:h-[160px] lg:w-[80px] lg:h-[80px] w-[40px] h-[40px] mr-6",
    },
    {
      text: "GitHub Profile",
      url: "https://github.com/zperekoty",
      icon: (
        <GitHub classes="2xl:w-[160px] 2xl:h-[160px] lg:w-[80px] lg:h-[80px] w-[40px] h-[40px] fill-gray-300 dark:fill-slate-700 hover:transition-all hover:fill-black dark:hover:fill-white ease-in-out duration-300" />
      ),
      anchorClasses:
        "2xl:w-[160px] 2xl:h-[160px] lg:w-[80px] lg:h-[80px] w-[40px] h-[40px] mr-6",
    },
    {
      text: "Message me in Telegram",
      url: "https://t.me/zperekoty",
      icon: (
        <Telegram classes="2xl:w-[160px] 2xl:h-[160px] lg:w-[80px] lg:h-[80px] w-[40px] h-[40px] fill-gray-300 dark:fill-slate-700 hover:transition-all hover:fill-black dark:hover:fill-white ease-in-out duration-300" />
      ),
      anchorClasses:
        "2xl:w-[160px] 2xl:h-[160px] lg:w-[80px] lg:h-[80px] w-[40px] h-[40px] mr-6",
    },
    {
      text: "Direct me in Instagram",
      url: "https://instagram.com/z.perekoty",
      icon: (
        <Instagram classes="2xl:w-[160px] 2xl:h-[160px] lg:w-[80px] lg:h-[80px] w-[40px] h-[40px] fill-gray-300 dark:fill-slate-700 hover:transition-all hover:fill-black dark:hover:fill-white ease-in-out duration-300" />
      ),
      anchorClasses:
        "2xl:w-[160px] 2xl:h-[160px] lg:w-[80px] lg:h-[80px] w-[40px] h-[40px] mr-6",
    },
    {
      text: "Message me in Vkontakte",
      url: "https://vk.com/z.perekoty",
      icon: (
        <Vkontakte classes="2xl:w-[160px] 2xl:h-[160px] lg:w-[80px] lg:h-[80px] w-[40px] h-[40px] fill-gray-300 dark:fill-slate-700 hover:transition-all hover:fill-black dark:hover:fill-white ease-in-out duration-300" />
      ),
      anchorClasses:
        "2xl:w-[160px] 2xl:h-[160px] lg:w-[80px] lg:h-[80px] w-[40px] h-[40px] mr-6",
    },
    {
      text: "KanForest project",
      url: "https://kanforest.vercel.app",
      icon: (
        <Kanforest
          alt="kanforest_logo"
          classes="2xl:w-[160px] 2xl:h-[160px] lg:w-[80px] lg:h-[80px] w-[40px] h-[40px]"
        />
      ),
      anchorClasses:
        "2xl:w-[160px] 2xl:h-[160px] lg:w-[80px] lg:h-[80px] w-[40px] h-[40px] mr-6",
    },
    {
      text: "KanTimber project | KanForest ver 2",
      url: "https://kantimber.vercel.app",
      icon: (
        <Kanforest
          alt="kantimber_logo"
          classes="2xl:w-[160px] 2xl:h-[160px] lg:w-[80px] lg:h-[80px] w-[40px] h-[40px]"
        />
      ),
      anchorClasses:
        "2xl:w-[160px] 2xl:h-[160px] lg:w-[80px] lg:h-[80px] w-[40px] h-[40px] mr-6",
    },
    {
      text: "Kalina project",
      url: "https://kalina-kan.vercel.app",
      icon: (
        <Kalina
          alt="kalina_logo"
          classes="2xl:w-[160px] 2xl:h-[160px] lg:w-[80px] lg:h-[80px] w-[40px] h-[40px]"
        />
      ),
      anchorClasses:
        "2xl:w-[160px] 2xl:h-[160px] lg:w-[80px] lg:h-[80px] w-[40px] h-[40px] mr-6",
    },
  ];

  return (
    <main class="flex justify-center items-center pt-32 mb-12 flex-col">
      {cards.map((card) => (
        <Card card={card} />
      ))}
    </main>
  );
};

export default Main;
