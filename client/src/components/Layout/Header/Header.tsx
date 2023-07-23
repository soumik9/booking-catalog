import classNames from 'classnames';
import { useState } from 'react'
import { homeUrl, navItems, wishlistUrl } from '../../../config/constants';
import { linkTypes } from '../../../config/types';
import NavItem from './components/NavItem';
import MobileHumburgerMenu from './components/HumburgerMenu';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../config/helpers';
import { toast } from 'react-hot-toast';
import { userLoggedOut } from '../../../redux/features/auth/authSlice';
import { BsBookHalf } from 'react-icons/bs';
import NavRight from './components/NavRight';
import { GiSelfLove } from 'react-icons/gi'

const Header = () => {

    // global
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const auth = useAppSelector((state) => state.auth);

    // states
    const [showSideNav, setShowSideNav] = useState(false);
    // handlers
    const handleSideNav = (): void => setShowSideNav(!showSideNav);

    // logout functionlity
    const handleLogout = (e: any) => {
        e.preventDefault();
        navigate(homeUrl);
        dispatch(userLoggedOut());
        toast.success('Logout Success!')
    }

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

                        <Link to={homeUrl} className='text-white flex gap-2 items-center'>
                            <BsBookHalf className='relative top-[1px]' />
                            Book Depository
                        </Link>

                        {/* desktop menu */}
                        <ul className="hidden lg:flex items-center lg:gap-x-[25px]">

                            <Link to={wishlistUrl} className='flex gap-1 items-center text-primary-100 hover:text-white trans'>
                                Wishlist
                                <GiSelfLove />
                            </Link>

                            {auth.isAuthenticated ? navItems.slice(0, 1).map((item: linkTypes) => (
                                <NavItem
                                    key={item._id}
                                    item={item}
                                />
                            )) : navItems.map((item: linkTypes) => (
                                <NavItem
                                    key={item._id}
                                    item={item}
                                />
                            ))}
                            {auth.isAuthenticated && <button
                                type='button'
                                onClick={handleLogout}
                                className='text-primary-100 hover:text-white trans'
                            >
                                Logout
                            </button>}
                        </ul>

                        <div className="lg:hidden flex">
                            <NavRight
                                handleSideNav={handleSideNav}
                                showHumburgerMenu={true}
                                showCloseBtn={false}
                                setShowSideNav={setShowSideNav}
                                showSideNav={showSideNav}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* mobile navbar menu */}
            <div className={`navbar-menu relative md:z-[99] z-[999] lg:hidden ${showSideNav ? "block" : "hidden"}`} >
                <MobileHumburgerMenu
                    handleSideNav={handleSideNav}
                    setShowSideNav={setShowSideNav}
                    showSideNav={showSideNav}
                    handleLogout={handleLogout}
                />
            </div>
        </>
    )
}

export default Header