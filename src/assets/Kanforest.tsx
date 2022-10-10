import { FunctionComponent } from "preact";

import { imgProps } from "../types";
import kanforestLogo from "./kanforest.png";

const Kanforest: FunctionComponent<imgProps> = ({
    alt,
    classes,
}): JSX.Element => (
    <img src={kanforestLogo} alt={alt} class={classes ? classes : ""} />
);

export default Kanforest;
