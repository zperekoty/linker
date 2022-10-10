import { render } from "preact";

import { App } from "./";
import "./main.scss";

render(<App />, document.getElementById("app") as HTMLElement);
