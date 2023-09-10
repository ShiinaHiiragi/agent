import React from "react";
import { styled } from "@mui/joy/styles";
import { sendAction } from "../interface/api";
import Bubble from "../interface/Bubble";
import ScrollToBottom from "react-scroll-to-bottom";

const Division = styled(ScrollToBottom)(({ theme }) => ({
  overflow: "auto",
  paddingBottom: theme.spacing(1),
  flexGrow: 1,
  "& >div": {
    display: "flex",
    flexDirection: "column",
    "& > :first-of-type": {
      marginTop: "auto",
      paddingTop: theme.spacing(2)
    }
  }
}));

function Session(props) {
  const {
    sessionList,
    setSessionList
  } = props

  const handleActionClick = React.useCallback((name, remains) => {
    setSessionList((sessionList) => [
      ...sessionList,
      {
        type: "Bubble",
        fromUser: true,
        content: `<code class="dialogue-user">${name}</code>`
      }
    ])
    sendAction(name)
      .then((data) => {
        setSessionList((sessionList) => {
          return [
            ...sessionList,
            {
              type: "Bubble",
              fromUser: false,
              content: data.message,
              actions: remains,
            }
          ];
        });
      });
  }, [setSessionList]);

  return (
    <Division>
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
