import { styled } from "@mui/joy/styles";
import Textarea from "@mui/joy/Textarea";

const Division = styled('div')(({ theme }) => ({
  padding: theme.spacing(1, 2, 2, 2)
}));

function InputPanel() {
  return (
    <Division>
      <Textarea
        color="neutral"
        minRows={4}
        maxRows={4}
        placeholder="Input prompts..."
        size="md"
        variant="soft"
      />
    </Division>
  );
}

export default InputPanel;
