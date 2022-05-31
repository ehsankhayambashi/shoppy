import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import avatar from "../data/avatar.jpg";
import { Cart, Chat, Notification, UserProfile } from ".";
import { useStateContext } from "../contexts/ContextProvider";
import useWindowSize from "../utils/windoSize";

function NavButton({ title, customFunc, icon, color, dotColor }) {
  return (
    <TooltipComponent position="BottomCenter" content={title}>
      <button
        style={{ color }}
        className="p-3 relative text-xl rounded-full"
        type="button"
        onClick={customFunc}
      >
        <span
          style={{ background: dotColor }}
          className="inline-flex absolute rounded-full h-2 w-2 right-2 top-2"
        />
        {icon}
      </button>
    </TooltipComponent>
  );
}

function Navbar() {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor,
  } = useStateContext();

  const { height, width } = useWindowSize();
  useEffect(() => {
    setScreenSize(width);
  });

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="flex justify-between p-2 relative md:mx-6">
      <NavButton
        customFunc={() => {
          setActiveMenu((prevState) => !prevState);
        }}
        color={currentColor}
        title="Menu"
        icon={<AiOutlineMenu />}
      />
      <div className="flex">
        <NavButton
          customFunc={() => handleClick("cart")}
          color={currentColor}
          title="Cart"
          icon={<FiShoppingCart />}
        />
        <NavButton
          customFunc={() => handleClick("chat")}
          dotColor="#03c9d7"
          color={currentColor}
          title="Chat"
          icon={<BsChatLeft />}
        />
        <NavButton
          customFunc={() => handleClick("notification")}
          dotColor="#03c9d7"
          color={currentColor}
          title="Notifications"
          icon={<RiNotification3Line />}
        />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick("userProfile")}
          >
            <img className="rounded-full w-8 h-8" src={avatar} />
            <span className="text-gray-400 text-14">Hi,</span>{" "}
            <span className="text-gray-400 text-14 ml-1 font-bold">Ehsan</span>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>
        {isClicked.chat && <Chat />}
        {isClicked.cart && <Cart />}
        {isClicked.userProfile && <UserProfile />}
        {isClicked.notification && <Notification />}
      </div>
    </div>
  );
}

export default Navbar;
