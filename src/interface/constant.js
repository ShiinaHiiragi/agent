import axios from "axios";

const backendPort = 9000;
const isWebview = window.require === undefined;
const isDevMode = window.location.port === "3000";

const post = (route, request) => new Promise((resolve, reject) => {
  axios.post(
    `http://localhost:${backendPort}${route}`,
    request
  )
    .then((res) => resolve(res.data))
    .catch((err) => reject(err.message))
});

export default post;
export {
  isWebview,
  isDevMode
}
