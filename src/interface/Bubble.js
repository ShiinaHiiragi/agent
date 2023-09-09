import React from "react";
import clsx from "clsx";
import { styled } from "@mui/joy/styles";
import Card from "@mui/joy/Card";
import PackedMarkdown from "../components/Markdown";
import Button from "@mui/joy/Button";
import ButtonGroup from "@mui/joy/ButtonGroup";

const PaddingDivision = styled('div')(({ theme }) => ({
  paddingBottom: theme.spacing(2),
  "& code, pre": {
    fontFamily: theme.fontFamily.code,
    fontSize: theme.fontSize.md
  },
  "& code.dialogue-user, pre.dialogue-user": {
    backgroundColor: theme.palette.neutral.softHoverBg
  },
  "& code.dialogue-cpu, pre.dialogue-cpu": {
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
    fromUser,
    content,
    actions,
    actionsValid,
    handleActionClick
  } = props;

  return (
    <PaddingDivision
      sx={(theme) => ({
        alignSelf: fromUser ? "flex-end" : "flex-start",
        maxWidth: "750px",
        [theme.breakpoints.only("sm")]: {
          [fromUser ? "paddingLeft" : "paddingRight"]: "min(40px, 10%)"
        },
        [theme.breakpoints.up("sm")]: {
          [fromUser ? "paddingLeft" : "paddingRight"]: "9%",
        }
      })}
    >
      <Card
        className={clsx("markdown-body", fromUser ? "dialogue-user" : "dialogue-cpu")}
        color={fromUser ? "neutral" : "primary"}
        orientation="vertical"
        size="md"
        variant="soft"
      >
        <PackedMarkdown children={content} />
        {actions ? <ButtonGroup orientation="vertical" disabled={!actionsValid}>
          {actions.map((item, index) => (
            <ActionPad
              key={index}
              className="ActionPad"
              children={item.name}
              disabled={item.disabled}
              onClick={() => { handleActionClick(item.name, actions.map((act) => ({
                name: act.name,
                disabled: act.name === item.name
                  ? true
                  : act.disabled
              })))}}
            />
          ))}
        </ButtonGroup> : null}
      </Card>

    </PaddingDivision>
  )
};

export default Bubble;
