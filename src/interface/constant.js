
const isWebview = window.require === undefined;
const isDevMode = window.location.port === "3000";

export default isWebview;
export {
    isWebview,
    isDevMode
}
