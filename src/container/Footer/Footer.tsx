import { FunctionComponent } from "preact";

import { Logo, GitHub, Telegram } from "../../svg";
import { Anchor } from "../../components";
import { anchorType } from "../../types";

const Footer: FunctionComponent = (): JSX.Element => {
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
        <footer class="flex justify-between items-center bg-white dark:bg-black w-full p-5">
            <div class="flex justify-center items-center">
                <Anchor anchor={anchors[0]}>
                    <Logo classes="2xl:w-[120px] 2xl:h-[120px] lg:w-[60px] lg:h-[60px] w-[30px] h-[30px] fill-black dark:fill-white hover:fill-pink-500 dark:hover:fill-green-400 hover:transition-all ease-in-out duration-300" />
                </Anchor>

                <p class="ml-6 text-sm lg:text-2xl 2xl:text-4xl text-slate-700 dark:text-slate-400">
                    &copy; 2022 Linker, Захар Перекотий
                </p>
            </div>

            <div class="flex justify-center items-center">
                <Anchor anchor={anchors[1]}>
                    <GitHub classes="2xl:w-[120px] 2xl:h-[120px] lg:w-[60px] lg:h-[60px] w-[30px] h-[30px] fill-gray-300 dark:fill-slate-700 hover:fill-black dark:hover:fill-white hover:transition-all ease-in-out duration-300" />
                </Anchor>

                <Anchor anchor={anchors[2]}>
                    <Telegram classes="2xl:w-[120px] 2xl:h-[120px] lg:w-[60px] lg:h-[60px] w-[30px] h-[30px] fill-gray-300 dark:fill-slate-700 hover:fill-black dark:hover:fill-white hover:transition-all ease-in-out duration-300" />
                </Anchor>
            </div>
        </footer>
    );
};

export default Footer;
