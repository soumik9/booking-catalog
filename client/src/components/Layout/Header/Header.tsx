import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react'
import { currentPlanUrl, homeUrl, navItems, wishlistUrl } from '../../../config/constants';
import { linkTypes } from '../../../config/types';
import NavItem from './components/NavItem';
import MobileHumburgerMenu from './components/HumburgerMenu';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../config/helpers';
import { toast } from 'react-hot-toast';
import { profileLog, userLoggedOut } from '../../../redux/features/auth/authSlice';
import { BsBookHalf, BsChevronDown } from 'react-icons/bs';
import NavRight from './components/NavRight';
import { GiSelfLove } from 'react-icons/gi'
import { MdOutlineNextPlan } from 'react-icons/md'
import { BiLogOut } from 'react-icons/bi'
import { useGetProfileQuery } from '../../../redux/features/auth/authApi';
import useAuthCheck from '../../../config/useAuthCheck';

const Header = () => {

    // global
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const authChecked = useAuthCheck();
    const auth = useAppSelector((state) => state.auth);
    const { data: profile, isLoading } = useGetProfileQuery(undefined);

    // states
    const dropdownRef = useRef(null);
    const [showSideNav, setShowSideNav] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    // if authenticate then intiaing data
    useEffect(() => {
        if (authChecked) {
            dispatch(profileLog(profile?.data))
        }
    }, [authChecked, dispatch, profile?.data])

    // dropdown close
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // handlers
    const toggleDropdown = () => setIsOpen(!isOpen);
    const handleSideNav = (): void => setShowSideNav(!showSideNav);

    const handleClickOutside = (event: any) => {
        // @ts-ignore
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    // logout functionlity
    const handleLogout = (e: any) => {
        e.preventDefault();
        navigate(homeUrl);
        dispatch(userLoggedOut());
        setIsOpen(false);
        toast.success('Logout Success!')
    }

    // loading
    // if (isLoading) return <div className='text-center'>Loading...</div>;

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

                            {auth.isAuthenticated && <><Link to={currentPlanUrl} className='flex gap-1 items-center text-primary-100 hover:text-white trans'>
                                Current Plan
                                <MdOutlineNextPlan className='relative top-[1px]' />
                                ({auth?.user?.currentPlans?.filter((item) => item.isFinished === false).length})
                            </Link>

                                <Link to={wishlistUrl} className='flex gap-1 items-center text-primary-100 hover:text-white trans'>
                                    Wishlist
                                    <GiSelfLove className='relative top-[1px]' />
                                    ({auth?.user?.wishlists?.length})
                                </Link></>}

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

                            {auth.isAuthenticated && <div className="inline-block relative cursor-pointer" ref={dropdownRef}>
                                <div className="text-primary-100 hover:text-white trans flex items-center gap-2" onClick={toggleDropdown}>
                                    {auth?.user?.name} <BsChevronDown className='relative top-[1px]' />
                                </div>
                                {isOpen && (
                                    <div className="absolute top-[28px] left-[-30px] w-[120px] max-h-40 overflow-y-auto border border-primary-200 bg-white border-t-0 rounded-md py-3">

                                        <button
                                            type='button'
                                            onClick={handleLogout}
                                            className='text-primary-700 w-full trans flex items-center gap-2 hover:bg-primary-400 hover:text-white py-1 px-2'
                                        >
                                            <BiLogOut className='relative top-[1px]' /> Logout
                                        </button>

                                    </div>
                                )}
                            </div>}
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