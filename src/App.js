import React from "react";
import { CssVarsProvider, styled } from "@mui/joy/styles";
import globalTheme from "./theme";
import Session from "./modules/Session";
import InputPanel from "./modules/InputPanel";
import Bubble from "./interface/Bubble";

const Root = styled('div')(({ theme }) => ({
  width: "100wh",
  height: "100vh",
  display: "flex",
  flexDirection: "column"
}));

function App() {
  const [bubbles, setBubbles] = React.useState([])
  const handleAppendBubbles = React.useCallback((...params) => {
    setBubbles((bubbles) => [...bubbles, Bubble(...params)]);
  }, [setBubbles])

  return (
    <CssVarsProvider theme={globalTheme}>
      <Root>
        <Session
          bubbles={bubbles}
        />
        <InputPanel
          handleAppendBubbles={handleAppendBubbles}
        />
      </Root>
    </CssVarsProvider>
  );
}

export default App;
