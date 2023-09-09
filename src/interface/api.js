import post from "./constant";
import shuntSpawner from "./shunt"

const sendPrompts = shuntSpawner(
  (prompts) => new Promise((resolve, reject) => {
    // setTimeout(resolve, 2000, `Re: ${prompts}`);
    post("/ask", prompts)
      .then(resolve)
      .catch(reject);
  }),
  (prompts) => new Promise((resolve) => {
    resolve(`Re: ${prompts}`);
  })
);

export default sendPrompts;
export {
  sendPrompts
};
