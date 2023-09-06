import isWebview from "./constant"

const shuntSpawner = (handleWebview, handleDesktop) => (...param) => isWebview
  ? handleWebview(...param)
  : handleDesktop(...param);

export default shuntSpawner;
