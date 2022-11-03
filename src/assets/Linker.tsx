import { FunctionComponent } from "preact";

import { imgProps } from "../types";
import linkerLogo from "./linker-2.png";

const Linker: FunctionComponent<imgProps> = ({ alt, classes }): JSX.Element => (
  <img src={linkerLogo} alt={alt} class={classes ? classes : ""} />
);

export default Linker;
