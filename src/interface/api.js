import post from "./constant";
import shuntSpawner from "./shunt"

const sendPrompts = shuntSpawner(
  (prompts) => new Promise((resolve, reject) => {
    // post("/ask", prompts).then(resolve).catch(reject);
    setTimeout(resolve, 750, {
      "message": "Sure! I can help you set up your working environment. Here are a few options:\n\n1. Would you like me to turn on dark mode to create a focused and distraction-free environment? If so, I can use the command <action>turn_on_dark_mode()</action>.\n\n2. If you prefer to have some background music while working, I can play study music for you. Just let me know if you'd like me to do that by using the command <action>play_study_music()</action>.\n\n3. If you have any upcoming meetings, I can show them to you by using the command <action>show_upcoming_meetings()</action>. This will open your Calendar and display your upcoming meetings.\n\n4. Lastly, if you'd like to organize your app layout for better productivity, I can help you with that too. Just let me know and I'll use the command <action>organize_app_layout()</action> to reorganize your desktop layout.\n\nPlease let me know which options you'd like to proceed with.",
      "actions": [
        "turn_on_dark_mode()",
        "play_study_music()",
        "show_upcoming_meetings()",
        "organize_app_layout()"
      ]}
    );
  }),
  (prompts) => new Promise((resolve, reject) => {
    post("/ask", prompts).then(resolve).catch(reject);
  })
);

const sendAction = shuntSpawner(
  (prompts) => new Promise((resolve, reject) => {
    post("/act", prompts).then(resolve).catch(reject);
  }),
  (prompts) => new Promise((resolve, reject) => {
    post("/act", prompts).then(resolve).catch(reject);
  })
);

export default sendPrompts;
export {
  sendPrompts,
  sendAction,
};
