import isWebview from "./constant"

const shuntSpawner = (handleWebview, handleDesktop) => {
  return (...param) => isWebview ? handleWebview(...param) : handleDesktop(...param);
}

export default shuntSpawner;
