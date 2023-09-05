import shuntSpawner from "./shunt"

const sendPrompts = shuntSpawner(
  () => new Promise((resolve) => {
    setTimeout(resolve, 500)
  }),
  (prompts) => new Promise((resolve) => {
    resolve(prompts);
  })
);

export default sendPrompts;
export {
  sendPrompts
};
