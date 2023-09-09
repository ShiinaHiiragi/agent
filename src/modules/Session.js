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
        <Bubble
          key={index}
          fromSelf={item.fromSelf}
          content={item.content}
        />
      )}
    </Division>
  );
}

export default Session;
