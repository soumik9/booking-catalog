
import classNames from "classnames";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { linkTypes } from "../../../../config/types";


type Props = {
    item: linkTypes;
    setShowSideNav: (showSideNav: boolean) => void;
};

const MobileNavItem = ({ item, setShowSideNav }: Props) => {

    // global
    const location = useLocation();

    // states
    const [open, setOpen] = useState<boolean>(false);

    return (
        <li
            onClick={() => setOpen(!open)}
            className={classNames(
                "mb-1 relative",
            )}
        >
            <Link to={item.url} className={classNames(
                "block py-[15px] paragraph-primary-strong px-[40px]",
                location.pathname === item.url && "!text-primary bg-primary-50",
            )}
                onClick={() => setShowSideNav(false)}
            >
                {item.title}
            </Link>
        </li>
    );
};

export default MobileNavItem;