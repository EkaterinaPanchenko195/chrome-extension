import React from "react";
import "../assets/tailwind.css";
import { createRoot } from "react-dom/client";
import ContentScript from "./contentScript";

function init() {
  document.querySelectorAll(".slug-wrap").forEach((item) => {
    const container = document.createElement("div");

    item.after(container);

    const root = createRoot(container);
    root.render(<ContentScript />);
  });
}

init();

// window.onload = function () {
//     const container = document.createElement("div");
//   for (const el of document.querySelectorAll(".title")) {

//       el.appendChild(container);

//     const root = createRoot(container);
//     root.render(popup);
//   }
// };
