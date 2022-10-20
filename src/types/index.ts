import { ComponentChildren } from "preact";

export type svgProps = { classes?: string };

export type imgProps = { alt: string; classes?: string };

export type cardType = {
  text: string;
  url: string;
  icon: JSX.Element;
  anchorClasses?: string;
  classes?: string;
};

export type cardProps = { card: cardType };

export type anchorType = {
  url: string;
  b: boolean;
  classes?: string;
};

export type anchorProps = {
  anchor: anchorType;
  children: ComponentChildren;
};
