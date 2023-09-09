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
  const [sessionList, setSessionList] = React.useState([]);

  const sessionRef = React.useRef(null);
  React.useEffect(() => {
    const current = sessionRef.current
    current.scrollTop = current.scrollHeight;
  }, [sessionList]);

  return (
    <CssVarsProvider theme={globalTheme}>
      <Root>
        <Session
          sessionRef={sessionRef}
          sessionList={sessionList}
        />
        <InputPanel
          setSessionList={setSessionList}
        />
      </Root>
    </CssVarsProvider>
  );
}

export default App;
