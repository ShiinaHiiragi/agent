import { styled } from "@mui/joy/styles";
import Bubble from "../interface/Bubble";

const Division = styled('div')(({ theme }) => ({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(2, 2, 1, 2),
  overflow: "auto",
  "& > :first-of-type": {
    marginTop: "auto"
  }
}));

function Session(props) {
  const {
    sessionRef,
    sessionList
  } = props

  return (
    <Division ref={sessionRef}>
      {sessionList.map((item, index) =>
        item.type === "Bubble"
          ? <Bubble
            fromSelf={item.fromSelf}
            content={item.content}
            actions={item.actions}
          /> : null
      )}
    </Division>
  );
}

export default Session;
