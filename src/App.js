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
  return (
    <CssVarsProvider theme={globalTheme}>
      <Root>
        <Session />
        <InputPanel />
      </Root>
    </CssVarsProvider>
  );
}

export default App;
