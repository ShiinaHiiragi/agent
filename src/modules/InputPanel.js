import { styled } from "@mui/joy/styles";
import Textarea from "@mui/joy/Textarea";
import Button from '@mui/joy/Button';
import SendIcon from "@mui/icons-material/Send";

const Division = styled('div')(({ theme }) => ({
  padding: theme.spacing(1, 2, 2, 2),
  display: "flex",
  flexDirection: "column",
}));

const ButtonsField = styled('div')(({ theme }) => ({
  display: "flex",
  marginTop: theme.spacing(2)
}));

function InputPanel() {
  return (
    <Division>
      <Textarea
        color="neutral"
        minRows={4}
        maxRows={4}
        placeholder="Input prompts here..."
        size="md"
        variant="soft"
      />
      <ButtonsField>
        <Button
          loading={false}
          loadingPosition="end"
          endDecorator={<SendIcon />}
          variant="solid"
          children="Send"
        />
      </ButtonsField>
    </Division>
  );
}

export default InputPanel;
