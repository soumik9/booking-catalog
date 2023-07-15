import classNames from 'classnames';
import React, { useState } from 'react'
import { homeUrl, navItems } from '../../../config/constants';
import { linkTypes } from '../../../config/types';
import NavItem from './components/NavItem';
import MobileHumburgerMenu from './components/HumburgerMenu';
import { Link } from 'react-router-dom';

const Header = () => {

    // states
    const [showSideNav, setShowSideNav] = useState(false);
    // handlers
    const handleSideNav = (): void => setShowSideNav(!showSideNav);

    return (
        <>
            <div className="h-[56px]"></div>
            <div
                className={classNames(
                    " py-4 w-full z-[999]  bg-primary shadow-[15px_-1px_10px_rgba(166,166,166,0.25)] fixed top-0 left-0"
                )}
            >
                <div className="container">
                    <div className="flex justify-between items-center">

                        <Link to={homeUrl} className='text-white'>Book Depository</Link>

                        {/* desktop menu */}
                        <ul className="hidden lg:flex items-center lg:gap-x-[25px]">
                            {navItems.map((item: linkTypes, index: number) => (
                                <NavItem
                                    key={item._id}
                                    item={item}
                                />
                            ))}
                        </ul>

                        {/* <div className="lg:hidden flex gap-[30px]">
                            <NavRight
                                handleSideNav={handleSideNav}
                                showHumburgerMenu={true}
                                showCloseBtn={false}
                                setShowSideNav={setShowSideNav}
                                showSideNav={showSideNav}
                            />
                        </div>

                        <div className="lg:block hidden ">
                            <NavRight
                                handleSideNav={handleSideNav}
                                showHumburgerMenu={true}
                                showCloseBtn={false}
                                setShowSideNav={setShowSideNav}
                            />
                        </div> */}
                    </div>
                </div>
            </div>

            {/* mobile navbar menu */}
            <div className={`navbar-menu relative md:z-[99] z-[999] lg:hidden ${showSideNav ? "block" : "hidden"}`} >
                {/* <MobileHumburgerMenu
                    handleSideNav={handleSideNav}
                    setShowSideNav={setShowSideNav}
                    showSideNav={showSideNav}
                /> */}
            </div>
        </>
    )
}

export default Header