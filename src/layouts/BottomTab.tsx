import Home from "@pages/Home";
import React, { ReactNode, useCallback } from "react";
import {
  AiOutlineHome,
  AiOutlineShoppingCart,
  AiOutlineNotification,
  AiOutlineUser,
} from "react-icons/ai";
import { BiCategoryAlt } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";
import classnames from "classnames";
import Categories from "@pages/Categories";
import Cart from "@pages/Cart";
import Notification from "@pages/Notification";
import Profile from "@pages/Profile";

const BottomTab = () => {
  const pathname = useLocation().pathname;
  const navigate = useNavigate()


  return (
    <div className={`flex w-full h-[52px] shrink-0 border-t-[2px] border-solid border-app`}>
      {bottomTabData.map((item, i) => (
        <div
        onClick={() => navigate(item.path)}
          key={i}
          className={classnames(
            " w-full flex flex-col items-center justify-center",
            item.path === pathname && `font-bold text-app`
          )}
        >
          <div className="text-[20px]">{item.icon}</div>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default React.memo(BottomTab);

export const bottomTabData = [
  {
    element: <Home />,
    title: "Home",
    path: "/home",
    icon: <AiOutlineHome />,
  },
  {
    element: <Categories/>,
    title: "Categories",
    path: "/catergories",
    icon: <BiCategoryAlt />,
  },
  {
    element: <Cart/>,
    title: "cart",
    path: "/cart",
    icon: <AiOutlineShoppingCart />,
  },
  {
    element: <Notification/>,
    title: "Notification",
    path: "/notification",
    icon: <AiOutlineNotification />,
  },
  {
    element: <Profile/>,
    title: "Profile",
    path: "/profile",
    icon: <AiOutlineUser />,
  },
];
