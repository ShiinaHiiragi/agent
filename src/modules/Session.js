import { styled } from "@mui/joy/styles";

const Division = styled('div')(({ theme }) => ({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(2, 2, 1, 2),
  overflow: "auto",
  "& > :first-child": {
    marginTop: "auto"
  }
}));

function Session(props) {
  const {
    sessionRef,
    bubbles
  } = props

  return (
    <Division ref={sessionRef}>
      {bubbles}
    </Division>
  );
}

export default Session;
