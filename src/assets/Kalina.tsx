import { FunctionComponent } from "preact";

import { imgProps } from "../types";
import kalinaLogo from "./kalina.png";

const Kalina: FunctionComponent<imgProps> = ({ alt, classes }): JSX.Element => (
    <img src={kalinaLogo} alt={alt} class={classes ? classes : ""} />
);

export default Kalina;
