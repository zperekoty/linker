import { FunctionComponent } from "preact";

import { Header, Main, Footer } from "./container";

const App: FunctionComponent = (): JSX.Element => {
  return (
    <div class="flex justify-center items-center flex-col">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
