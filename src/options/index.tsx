import React from "react";
import "../assets/tailwind.css";
import { createRoot } from "react-dom/client";
import Options from "./options";

function init() {
  const appContainer = document.createElement("div");

  console.log(appContainer)
  document.body.appendChild(appContainer);

  if (!appContainer) {
    throw new Error("Can not find AppContainer");
  }

  const root = createRoot(appContainer);
  console.log(appContainer);
  root.render(<Options />);
}

init();
