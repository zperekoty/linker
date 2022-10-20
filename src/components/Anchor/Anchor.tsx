import { FunctionComponent } from "preact";

import { anchorProps } from "../../types";

const Anchor: FunctionComponent<anchorProps> = ({
  anchor,
  children,
}): JSX.Element => (
  <a
    href={anchor.url}
    target={anchor.b ? "_blank" : "_self"}
    class={`no-underline ${anchor.classes ? anchor.classes : ""}`}
  >
    {children}
  </a>
);

export default Anchor;
