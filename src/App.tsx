/* eslint-disable prettier/prettier */
import { GlobalStyle } from "./styles/global";

import Header from "./components/Header";
import { RoutesApp } from "./routes/routes";

function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <Header />
        <RoutesApp />
      </div>
    </>
  );
}

export default App;
