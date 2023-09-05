import { styled } from "@mui/joy/styles";

const Division = styled('div')(({ theme }) => ({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(2, 2, 1, 2),
  overflow: "auto",
}));

function Session(props) {
  const {
    bubbles
  } = props

  return (
    <Division>
      {bubbles}
    </Division>
  );
}

export default Session;
