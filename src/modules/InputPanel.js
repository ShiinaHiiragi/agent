import React from "react";
import { styled } from "@mui/joy/styles";
import Textarea from "@mui/joy/Textarea";
import Box from '@mui/joy/Box';
import Button from "@mui/joy/Button";
import IconButton from "@mui/joy/IconButton";
import SendIcon from "@mui/icons-material/Send";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ask from "../interface/api";

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
    handleAppendBubbles
  } = props

  const [prompts, setPrompts] = React.useState("");
  const [promptsDisabled, setPromptsDisabled] = React.useState(false);
  const [sendButtonLoading, setSendButtonLoading] = React.useState(false);
  const sendAsk = React.useCallback(() => {
    let savedPrompts = "";
    setSendButtonLoading(true);
    setPromptsDisabled(true);

    ask(savedPrompts).then((response) => {
      setSendButtonLoading(false);
      setPromptsDisabled(false);
      handleAppendBubbles(true, prompts);
      handleAppendBubbles(false, response);
      setPrompts("");
    });
  }, [prompts, handleAppendBubbles])

  return (
    <Division>
      <Textarea
        color="neutral"
        minRows={4}
        maxRows={4}
        placeholder="Input prompts here..."
        size="md"
        variant="soft"
        disabled={promptsDisabled}
        text={prompts}
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
              <DeleteOutlineIcon />
            </IconButton>
            <Span />
            <Button
              loading={sendButtonLoading}
              loadingPosition="end"
              endDecorator={<SendIcon />}
              variant="solid"
              children="SEND"
              onClick={sendAsk}
            />
          </Box>
        }
      />
    </Division>
  );
}

export default InputPanel;
