import React from "react";
import { classNames, navigation } from "../navConfig";
import { NavLink } from "react-router";

const SideNav: React.FC = () => {
  return (
    <ul role="list">
      {navigation.map((item) => (
        <li key={item.name}>
          <NavLink
            to={item.href}
            className={({ isActive }) =>
              classNames(
                isActive ? "text-[#232323]" : "text-[#B1B1B1]",
                "text-gray-400 hover:bg-gray-50 border-white",
                "group flex py-4 text-lg",
              )
            }
          >
            {({ isActive }) => (
              <>
                <span
                  className={
                    isActive
                      ? "w-[6px] bg-black -my-4 rounded-tr-lg rounded-br-lg"
                      : "w-[6px] bg-transparent rounded-tr-lg rounded-br-lg"
                  }
                />
                <item.icon
                  aria-hidden="true"
                  className={classNames(
                    isActive
                      ? "text-[#232323]"
                      : "text-[#B1B1B1] group-hover:text-[#232323]",
                    "mr-7 ml-10",
                  )}
                  fill={isActive ? "#232323" : "#B1B1B1"}
                />
                <span
                  className={classNames(
                    isActive ? "text-[#232323]" : "text-[#B1B1B1]",
                  )}
                >
                  {item.name}
                </span>
              </>
            )}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default SideNav;
