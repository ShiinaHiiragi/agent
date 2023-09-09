import React from "react";
import { styled } from "@mui/joy/styles";
import Card from "@mui/joy/Card";
import PackedMarkdown from "../components/Markdown";
import Button from "@mui/joy/Button";
import ButtonGroup from "@mui/joy/ButtonGroup";

const PaddingDivision = styled('div')(({ theme }) => ({
  paddingBottom: theme.spacing(2),
  "& action": {
    backgroundColor: theme.palette.primary.softHoverBg,
    fontFamily: theme.fontFamily.code
  }
}));

const ActionPad = styled(Button)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  fontFamily: theme.fontFamily.code,
  color: theme.palette.primary.softColor,
}));

const Bubble = (props) => {
  const {
    key,
    fromSelf,
    content,
    actions
  } = props;

  return (
    <PaddingDivision
      key={key}
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
        className="markdown-body"
        color={fromSelf ? "neutral" : "primary"}
        orientation="vertical"
        size="md"
        variant="soft"
      >
        <PackedMarkdown children={content} />
        {actions ? <ButtonGroup orientation="vertical">
          {actions.map((item) => (
            <ActionPad
              className="ActionPad"
              children={item}
            />
          ))}
        </ButtonGroup> : null}
      </Card>

    </PaddingDivision>
  )
};

export default Bubble;
