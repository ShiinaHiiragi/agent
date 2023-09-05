import shuntSpawner from "./shunt"

const getCPU = shuntSpawner(
    () => "CPU Info",
    () => window.require("os").cpus()
)

export default getCPU;
export {
    getCPU
};
