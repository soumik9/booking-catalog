import React, { MouseEventHandler } from "react";
import { navItems } from "../../../../config/constants";
import { linkTypes } from "../../../../config/types";
import MobileNavItem from "./MobileNavItem";
import { useAppSelector } from "../../../../config/helpers";
import { AiOutlineClose } from "react-icons/ai";

type Props = {
  handleSideNav: MouseEventHandler<HTMLButtonElement>;
  setShowSideNav: (showSideNav: boolean) => void;
  showSideNav: boolean;
  handleLogout: any;
};

const MobileHumburgerMenu = ({ handleSideNav, setShowSideNav, handleLogout }: Props) => {

  // globals
  const auth = useAppSelector((state) => state.auth);

  return (
    <>
      <div className="navbar-backdrop block lg:!hidden fixed inset-0 bg-gray-800 opacity-25"></div>

      <div className="fixed top-0 left-0 bottom-0 w-full bg-[rgba(0,0,0,0.3)] flex justify-end md:justify-start ">
        <nav className="flex flex-col md:w-full w-[285px] h-full py-[40px] bg-white overflow-y-auto relative ">
          <div className="md:mt-[60px] mt-[30px]">
            <ul>
              {auth.isAuthenticated ? navItems.slice(0, 1).map((item: linkTypes) => (
                <MobileNavItem
                  key={item._id}
                  item={item}
                  setShowSideNav={setShowSideNav}
                />
              )) : navItems.map((item: linkTypes) => (
                <MobileNavItem
                  key={item._id}
                  item={item}
                  setShowSideNav={setShowSideNav}
                />
              ))}
              {auth.isAuthenticated && <button
                type='button'
                onClick={handleLogout}
                className='text-white mx-[40px] bg-primary-700 px-5 py-2 rounded-md'
              >
                Logout
              </button>}

            </ul>
          </div>
        </nav>

        {/* Mobile Close Button */}
        <div
          className="md:hidden block absolute right-3 top-[10px] cursor-pointer"
          onClick={() => setShowSideNav(false)}
        >
          <AiOutlineClose className="text-primary text-[18px]" />
        </div>
      </div>
    </>
  );
};

export default MobileHumburgerMenu;
