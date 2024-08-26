import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "../assets/tailwind.css";

const ContentScript = () => {
    const [isActive, setIsActive] = useState(true);
    useEffect(()=>{
    },[isActive])
  return (
    <>
      <div onClick={() => setIsActive(!isActive)}>
        <img src="weather.png" alt="icon-weather"></img>
      </div>
      {isActive && (
        <>
          <select name="select">
            <option value="value1">Значение 1</option>
            <option value="value2" selected>
              Значение 2
            </option>
            <option value="value3">Значение 3</option>
          </select>
        </>
      )}
    </>
  );
};

export default ContentScript;
