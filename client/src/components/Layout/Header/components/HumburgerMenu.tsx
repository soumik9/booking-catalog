import React, { MouseEventHandler } from "react";
import { currentPlanUrl, navItems, wishlistUrl } from "../../../../config/constants";
import { linkTypes } from "../../../../config/types";
import MobileNavItem from "./MobileNavItem";
import { useAppSelector } from "../../../../config/helpers";
import { AiOutlineClose, AiOutlineUser } from "react-icons/ai";
import { MdOutlineNextPlan } from "react-icons/md";
import { GiSelfLove } from "react-icons/gi";
import { Link } from "react-router-dom";

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

            {auth.isAuthenticated && <div className="px-[40px]">
              <Link to={currentPlanUrl} className='flex gap-1 items-center text-primary'>
                Current Plan
                <MdOutlineNextPlan className='relative top-[1px]' />
                ({auth?.user?.currentPlans?.filter((item) => item.isFinished === false).length})
              </Link>

              <Link to={wishlistUrl} className='flex gap-1 items-center text-primary mt-5 mb-2'>
                Wishlist
                <GiSelfLove className='relative top-[1px]' />
                ({auth?.user?.wishlists?.length})
              </Link></div>}

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
              {auth.isAuthenticated && <div className="mx-[40px]">

                <p className="flex gap-2 items-center mb-4">
                  <AiOutlineUser />
                  {auth?.user?.name}
                </p>

                <button
                  type='button'
                  onClick={handleLogout}
                  className='text-white  bg-primary-700 px-5 py-2 rounded-md'
                >
                  Logout
                </button>
              </div>}

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
