import { MouseEventHandler } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

type Props = {
    handleSideNav: MouseEventHandler<HTMLButtonElement>;
    showHumburgerMenu: boolean;
    showCloseBtn: boolean;
    setShowSideNav: (showSideNav: boolean) => void;
    showSideNav?: boolean;
};

const NavRight = ({
    handleSideNav,
    showSideNav,
}: Props) => {

    return (
        <>
            <div className={`lg:hidden f-center ${showSideNav && "ml-[7px]"}`} >
                <button className="outline-none" onClick={handleSideNav}>
                    {showSideNav ?
                        <AiOutlineClose className="text-white text-[18px]" /> :
                        <AiOutlineMenu className="text-white text-[18px]" />}
                </button>
            </div>
        </>
    );
};

export default NavRight;