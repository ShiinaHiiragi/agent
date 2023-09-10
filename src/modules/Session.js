import React from "react";
import { styled } from "@mui/joy/styles";
import { sendAction } from "../interface/api";
import Bubble from "../interface/Bubble";
import ScrollToBottom, { useScrollToBottom } from "react-scroll-to-bottom";

const Division = styled(ScrollToBottom)(({ theme }) => ({
  overflow: "auto",
  padding: theme.spacing(2, 1, 1, 2),
  flexGrow: 1,
  "& >div": {
    overflow: "visible",
    display: "flex",
    flexDirection: "column",
    "& > :first-of-type": {
      marginTop: "auto"
    }
  }
}));

function Session(props) {
  const {
    sessionList,
    setSessionList
  } = props

  const scrollToBottom = useScrollToBottom();
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
