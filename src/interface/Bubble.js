import { styled } from "@mui/joy/styles";
import Card from "@mui/joy/Card";
import PackedMarkdown from "../components/Markdown";

const PaddingDivision = styled('div')(({ theme }) => ({
  paddingBottom: theme.spacing(2)
}));

const Bubble = (fromSelf, content) => {
  const timeNow = new Date().getTime();
  return (
    <PaddingDivision
      key={timeNow}
      sx={(theme) => ({
        alignSelf: fromSelf ? "flex-end" : "flex-start",
        maxWidth: "750px",
        [theme.breakpoints.only("sm")]: {
          [fromSelf ? "paddingLeft" : "paddingRight"]: "min(40px, 10%)"
        },
        [theme.breakpoints.up("sm")]: {
          [fromSelf ? "paddingLeft" : "paddingRight"]: "9%",
        }
      })}
    >
      <Card
        color={fromSelf ? "neutral" : "primary"}
        orientation="vertical"
        size="md"
        variant="soft"
        children={<PackedMarkdown children={content}/>}
      />
    </PaddingDivision>
  );
}

export default Bubble;
