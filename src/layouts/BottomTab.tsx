import Home from "@pages/Home";
import React, { ReactNode, useCallback } from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";
import classnames from "classnames";
import Categories from "@pages/Categories";
import Cart from "@pages/Cart";
import Notification from "@pages/Notification";
import Profile from "@pages/Profile";
import classNames from "classnames";
import Txt from "@components/atoms/Text/Txt";

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
            item.path === pathname && `font-bold text-main`
          )}
        >
          <i className={classNames(item.icon, 'text-20')}/>
          <Txt
          size={12}
          text={item.title}
          />
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
    icon: 'icon-home',
  },
  {
    element: <Categories/>,
    title: "Categories",
    path: "/catergories",
    icon: 'icon-cate',
  },
  {
    element: <Cart/>,
    title: "cart",
    path: "/cart",
    icon: 'icon-cart',
  },
  {
    element: <Notification/>,
    title: "Notification",
    path: "/notification",
    icon: 'icon-bell',
  },
  {
    element: <Profile/>,
    title: "Profile",
    path: "/profile",
    icon: 'icon-user',
  },
];
