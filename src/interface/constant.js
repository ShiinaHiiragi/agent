import axios from "axios";

const backendPort = 9000;
const isWebview = window.require === undefined;
const isDevMode = window.location.port === "3000";

const post = (route, request) => axios.post(
    `http://localhost:${backendPort}${route}`,
    request
);

export default post;
export {
    isWebview,
    isDevMode
}
