import React from "react";
import { CssVarsProvider, styled } from "@mui/joy/styles";
import globalTheme from "./theme";
import Session from "./modules/Session";
import InputPanel from "./modules/InputPanel";

const Root = styled('div')(({ theme }) => ({
  width: "100wh",
  height: "100vh",
  display: "flex",
  flexDirection: "column"
}));

function App() {
  const [bubbles, setBubbles] = React.useState([]);
  const handleAppendBubbles = React.useCallback((...params) => {
    setBubbles((bubbles) => [...bubbles, ...params]);
  }, []);
  const handleClearBubbles = React.useCallback(() => {
    setBubbles([]);
  }, []);

  const sessionRef = React.useRef(null);
  React.useEffect(() => {
    const current = sessionRef.current
    current.scrollTop = current.scrollHeight;
  }, [bubbles]);

  return (
    <CssVarsProvider theme={globalTheme}>
      <Root>
        <Session
          sessionRef={sessionRef}
          bubbles={bubbles}
        />
        <InputPanel
          handleAppendBubbles={handleAppendBubbles}
          handleClearBubbles={handleClearBubbles}
        />
      </Root>
    </CssVarsProvider>
  );
}

export default App;
