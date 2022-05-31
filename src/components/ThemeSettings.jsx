import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { BsCheck } from "react-icons/bs";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { themeColors } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

function ThemeSettings() {
  const { setColor, setMode, currentMode, currentColor, setThemeSettings } =
    useStateContext();

  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div className="float-right h-screen p-4 ml-4 dark:text-gray-200 bg-white w-400 dark:[#484B52]">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-xl">Settrings</p>
          <button
            type="button"
            style={{ color: "rgb(153,171,180)", borderRadius: "50%" }}
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
            onClick={() => setThemeSettings(false)}
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className="flex-col mt-5 pt-5 border-t-1 border-color ">
          <p className="text-lg">Theme Options</p>
          <div className="mt-4">
            <input
              type="radio"
              id="dark"
              name="theme"
              value="Dark"
              className="cursor-pointer"
              onChange={setMode}
              checked={currentMode === "Dark"}
            />
            <label htmlFor="dark" className="ml-2 text-base cursor-pointer">
              Dark
            </label>
          </div>
          <div className="mt-4">
            <input
              type="radio"
              id="light"
              name="theme"
              value="Light"
              className="cursor-pointer"
              onChange={setMode}
              checked={currentMode === "Light"}
            />
            <label htmlFor="light" className="ml-2 text-base cursor-pointer">
              Light
            </label>
          </div>
        </div>
        <div className="flex-col mt-5 pt-5 border-t-1 border-color ">
          <p className="text-lg">Theme Colors</p>
          <div className="flex gap-3 mt-3">
            {themeColors.map((item, index) => (
              <TooltipComponent
                content={item.name}
                position="BottomCenter"
                key={index}
              >
                <button
                  type="button"
                  className="h-10 w-10 rounded-full cursor-pointer"
                  style={{ backgroundColor: item.color }}
                  onClick={() => setColor(item.color)}
                >
                  <BsCheck
                    className={`ml-2 text-2xl text-white ${
                      item.color === currentColor ? "block" : "hidden"
                    }`}
                  />
                </button>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThemeSettings;
