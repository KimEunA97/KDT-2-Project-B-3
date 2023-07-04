import React from "react";

import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
let deferredPrompt : any

window.addEventListener('beforeinstallprompt', event => {
    event.preventDefault()
    deferredPrompt = event
})

const installApp = () => {
    if (!deferredPrompt) {
        alert('이미 앱이 설치되어 있거나 앱을 설치할 수 없는 환경입니다')
        return
    }

    deferredPrompt.prompt()
}
export default installApp;
