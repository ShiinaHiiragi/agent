import shuntSpawner from "./shunt"

const sendPrompts = shuntSpawner(
  (prompts) => new Promise((resolve) => {
    setTimeout(resolve, 2000, `Re: ${prompts}`)
  }),
  (prompts) => new Promise((resolve) => {
    resolve(`Re: ${prompts}`);
  })
);

export default sendPrompts;
export {
  sendPrompts
};
