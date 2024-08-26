import React from "react";
import { createRoot } from "react-dom/client";
import "../assets/tailwind.css";

const popup = (
  <div>
    <h1 className="text-green-500 text-5xl font-bold ">weather</h1>
    <img src="weather.png" alt="icon-weather"></img>
  </div>
);

const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);
root.render(popup);
