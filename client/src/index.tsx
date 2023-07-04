import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </>
);
// let deferredPrompt: any;
window.addEventListener('load', () => {
  navigator.serviceWorker
    .register('/service-worker.js') // Service Worker 파일 경로
    .then(registration => {
      console.log('Service Worker registered:', registration);
    })
    .catch(error => {
      console.log('Service Worker registration failed:', error);
    });
});
// window.addEventListener("beforeinstallprompt", (event) => {
//   event.preventDefault();
//   deferredPrompt = event;
// });

// const installApp = () => {
//   if (!deferredPrompt) {
//     alert("이미 앱이 설치되어 있거나 앱을 설치할 수 없는 환경입니다");
//     return;
//   }

//   deferredPrompt.prompt();
// };



// export default installApp;
