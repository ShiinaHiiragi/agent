import React from "react";
import clsx from "clsx";
import { styled } from "@mui/joy/styles";
import Card from "@mui/joy/Card";
import PackedMarkdown from "../components/Markdown";
import Button from "@mui/joy/Button";
import ButtonGroup from "@mui/joy/ButtonGroup";

const PaddingDivision = styled('div')(({ theme }) => ({
  paddingBottom: theme.spacing(2),
  "& action": {
    backgroundColor: theme.palette.primary.softHoverBg,
    fontFamily: theme.fontFamily.code,
    fontSize: theme.fontSize.md
  },
  "& code": {
    fontFamily: theme.fontFamily.code,
    fontSize: theme.fontSize.md
  },
  "& code.dialogue-user": {
    backgroundColor: theme.palette.neutral.softHoverBg
  },
  "& code.dialogue-cpu": {
    backgroundColor: theme.palette.primary.softHoverBg
  },
}));

const ActionPad = styled(Button)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  fontFamily: theme.fontFamily.code,
  color: theme.palette.primary.softColor,
}));

const Bubble = (props) => {
  const {
    fromSelf,
    content,
    actions,
    actionsValid
  } = props;

  return (
    <PaddingDivision
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
        className={clsx("markdown-body", fromSelf ? "dialogue-user" : "dialogue-cpu")}
        color={fromSelf ? "neutral" : "primary"}
        orientation="vertical"
        size="md"
        variant="soft"
      >
        <PackedMarkdown children={content} />
        {actions ? <ButtonGroup orientation="vertical">
          {actions.map((item, index) => (
            <ActionPad
              key={index}
              className="ActionPad"
              children={item.name}
              disabled={!actionsValid}
              onClick={() => { console.log(item.index, item.name) }}
            />
          ))}
        </ButtonGroup> : null}
      </Card>

    </PaddingDivision>
  )
};

export default Bubble;
