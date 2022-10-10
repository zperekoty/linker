import { FunctionComponent } from "preact";

import type { cardProps } from "../../types";
import { Anchor } from "../";

const Card: FunctionComponent<cardProps> = ({ card }): JSX.Element => (
    <div
        class={`flex justify-center items-center backdrop:blur-sm rounded-3xl border border-pink-500 dark:border-green-400 p-4 my-4 min-w-[330px] lg:min-w-[420px] bg-slate-600/40 dark:bg-gray-400/40 ${
            card.classes ? card.classes : ""
        }`}
    >
        <Anchor
            anchor={{
                url: card.url,
                b: true,
                classes: card.anchorClasses ? card.anchorClasses : "",
            }}
        >
            {card.icon}
        </Anchor>

        <Anchor
            anchor={{
                url: card.url,
                b: true,
                classes:
                    "ml-auto text-base lg:text-2xl 2xl:text-4xl text-slate-700 dark:text-slate-400 hover:transition-all hover:underline hover:text-black dark:hover:text-white ease-in-out duration-300",
            }}
        >
            {card.text}
        </Anchor>
    </div>
);

export default Card;
