import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import LeftNavMenuItem from "./LeftNavMenuItem";
import { categories } from "../utils/constants";
import { Context } from "../context/contextApi";

const LeftNav = () => {
  const { selectCategory, setSelectCategory, mobileMenu } =
    useContext(Context);
  const navigate = useNavigate();

  const regexp = /android|iphone|kindle|ipad/i;
  const isMobileView = regexp.test(navigator.userAgent)

  const clickHandler = (name, type) => {
    switch (type) {
      case "category":
        return setSelectCategory(name);
      case "home":
        return setSelectCategory(name);
      case "menu":
        return false;
      default:
        break;
    }
  };

  return (
    <div
      className={`md:block w-[240px] overflow-y-auto h-full py-3 bg-black left-0 absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all ${mobileMenu ? "translate-x-0" : ""} ${!isMobileView && mobileMenu && "w-[76px]"}`}
    >
      <div className="flex px-5 flex-col">
        {categories.map((item) => {
          return (
            <React.Fragment key={item.name}>
              <LeftNavMenuItem
                text={item.type === "home" ? "Home" : item.name}
                icon={item.icon}
                action={() => {
                  clickHandler(item.name, item.type);
                  navigate("/");
                }}
                className={`${selectCategory === item.name
                    ? "bg-white/[0.15] p-1 rounded-md"
                    : ""
                  }`}
              />
              {item.divider && (
                <hr className="my-4 border-white/[0.2]" />
              )}
            </React.Fragment>
          );
        })}
        <hr className="my-5 border-white/[0.2]" />
        <div className="text-white/[0.5] text-[12px]">
          Created by: Debasish Das
          <div>(Have a wesome day ahead!)</div>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;