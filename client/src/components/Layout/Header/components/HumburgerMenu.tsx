import React, { MouseEventHandler } from "react";
import { navItems } from "../../../../config/constants";
import { linkTypes } from "../../../../config/types";

type Props = {
  handleSideNav: MouseEventHandler<HTMLButtonElement>;
  setShowSideNav: (showSideNav: boolean) => void;
  showSideNav: boolean;
};

const MobileHumburgerMenu = ({ handleSideNav, setShowSideNav }: Props) => {
  // const router = useRouter();
  // const [orderCurrentTab, setOrderCurrentTab] = useAtom(orderPageTab);

  return (
    <>
      <div className="navbar-backdrop block lg:!hidden fixed inset-0 bg-gray-800 opacity-25"></div>

      <div className="fixed top-0 left-0 bottom-0 w-full bg-[rgba(0,0,0,0.3)] flex justify-end md:justify-start ">
        <nav className="flex flex-col md:w-full w-[285px] h-full py-[40px] bg-white overflow-y-auto relative ">
          <div className="md:mt-[60px] mt-[30px]">
            <ul>
              {navItems.map((item: linkTypes, index: number) => (<>p</>
                // <MobileNavItem
                //   key={index}
                //   item={item}
                //   setShowSideNav={setShowSideNav}
                // />
              ))}
            </ul>
          </div>
        </nav>

        {/* Mobile Close Button */}
        <div
          className="md:hidden block absolute right-3 top-[10px] cursor-pointer"
          onClick={() => setShowSideNav(false)}
        >
          {/* <MobileCloseBtn /> */}
          x
        </div>
      </div>
    </>
  );
};

export default MobileHumburgerMenu;
