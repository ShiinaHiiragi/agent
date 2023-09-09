import React from "react";
import { styled } from "@mui/joy/styles";
import Textarea from "@mui/joy/Textarea";
import Box from '@mui/joy/Box';
import Button from "@mui/joy/Button";
import IconButton from "@mui/joy/IconButton";
import SendIcon from "@mui/icons-material/Send";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import sendPrompts from "../interface/api";

const Division = styled('div')(({ theme }) => ({
  padding: theme.spacing(1, 2, 2, 2),
  display: "flex",
  flexDirection: "column"
}));

const Span = styled('div')(({ theme }) => ({
  flexGrow: 1
}));

function InputPanel(props) {
  const {
    setSessionList
  } = props

  const [prompts, setPrompts] = React.useState("");
  const [savedPrompts, setSavedPrompts] = React.useState("");
  const [promptsDisabled, setPromptsDisabled] = React.useState(false);
  const [sendButtonLoading, setSendButtonLoading] = React.useState(false);
  const handleClickSend = React.useCallback(() => {
    setSendButtonLoading(true);
    setPromptsDisabled(true);

    setPrompts((prompts) => {
      setSavedPrompts(prompts);
      return "";
    })
  }, [])

  React.useEffect(() => {
    if (savedPrompts.length === 0) {
      return;
    }

    setSessionList((sessionList) => [
      ...sessionList,
      {
        type: "Bubble",
        fromUser: true,
        content: savedPrompts
      }
    ])
    sendPrompts(savedPrompts)
      .then((res) => {
        setSendButtonLoading(false);
        setPromptsDisabled(false);
        setSessionList((sessionList) => {
          return [
            ...sessionList,
            {
              type: "Bubble",
              fromUser: false,
              content: res.message,
              actions: res.actions.map((item, index) => ({
                name: item,
                index: index + 1
              })),
            }
          ];
        });
      })
      .catch((err) => {
        // TODO: show error info
        console.error(err);
      })
      .finally(() => {
        setSavedPrompts("");
      })
  // WARNING: savedPrompts ONLY changed in handleClickSend()
  // eslint-disable-next-line
  }, [savedPrompts]);

  return (
    <Division>
      <Textarea
        color="neutral"
        minRows={4}
        maxRows={4}
        placeholder={promptsDisabled ? "" : "Send a message"}
        size="md"
        variant="soft"
        disabled={promptsDisabled}
        value={prompts}
        onChange={(event) => setPrompts(event.target.value)}
        endDecorator={
          <Box
            sx={{
              display: 'flex',
              gap: 'var(--Textarea-paddingBlock)',
              pt: 'var(--Textarea-paddingBlock)',
              borderTop: '1px solid',
              borderColor: 'divider',
              flex: 'auto',
            }}
          >
            <IconButton variant="soft">
              <DeleteOutlineIcon
                onClick={() => { setSessionList([]) }}
              />
            </IconButton>
            <Span />
            <Button
              disabled={prompts.length === 0}
              loading={sendButtonLoading}
              loadingPosition="end"
              endDecorator={<SendIcon />}
              variant="solid"
              children="SEND"
              onClick={handleClickSend}
            />
          </Box>
        }
      />
    </Division>
  );
}

export default InputPanel;
