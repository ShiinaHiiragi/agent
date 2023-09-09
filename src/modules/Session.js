import React from "react";
import { styled } from "@mui/joy/styles";
import Bubble from "../interface/Bubble";

const Division = styled('div')(({ theme }) => ({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(2, 2, 1, 2),
  overflow: "auto",
  "& > :first-of-type": {
    marginTop: "auto"
  }
}));

function Session(props) {
  const {
    sessionRef,
    sessionList,
    setSessionList
  } = props

  const handleActionClick = React.useCallback((name, index) => {
    setSessionList((sessionList) => [
      ...sessionList,
      {
        type: "Bubble",
        fromUser: true,
        content: `<code class="dialogue-user">${name}</code>`
      }
    ])
  }, [setSessionList]);

  return (
    <Division ref={sessionRef}>
      {sessionList.map((item, index) =>
        item.type === "Bubble"
          ? <Bubble
            key={index}
            fromUser={item.fromUser}
            content={item.content.replaceAll(
              /<action>(.+?)<\/action>/g,
              "<code class='dialogue-cpu'>$1</code>"
            )}
            actions={item.actions}
            actionsValid={index === sessionList.length - 1}
            handleActionClick={handleActionClick}
          /> : null
      )}
    </Division>
  );
}

export default Session;
