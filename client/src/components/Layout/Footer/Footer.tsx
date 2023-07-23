import { BsBookHalf, BsTelephoneForward } from 'react-icons/bs';
import { CiLocationArrow1 } from 'react-icons/ci';
import { AiOutlineMail } from 'react-icons/ai';
import LinkGrid from './components/LinkGrid';
import { footerLinks, homeUrl } from '../../../config/constants';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-primary-200 text-center text-primary-700 lg:text-left mt-10">
            <div className='container'>

                <div className="mx-6 pb-0 md:pb-10 py-10 text-center md:text-left">

                    <div className="grid-1 grid gap-8 md:grid-cols-2 xll:grid-cols-4">

                        <div className="">
                            <h6 className="mb-4 flex gap-1 items-center justify-center font-semibold uppercase md:justify-start">
                                <BsBookHalf className='relative top-[1px]' />
                                Book Depository
                            </h6>
                            <p className='text-primary-900'>
                                The platform allows customers to pre-order upcoming book releases, ensuring they receive the latest titles as soon as they become available.
                            </p>
                        </div>

                        {/* Products section */}
                        <LinkGrid title='Go to view' links={footerLinks.slice(0, 3)} />
                        <LinkGrid title='Useful links' links={footerLinks.slice(3, 6)} />

                        {/* Contact section */}
                        <div className=''>
                            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                                Contact
                            </h6>
                            <p className="mb-4 flex items-center justify-center md:justify-start gap-1 text-primary-900">
                                <CiLocationArrow1 />
                                Rajshahi, Dhaka, Bangladesh
                            </p>
                            <p className="mb-4 flex items-center justify-center md:justify-start gap-1 text-primary-900">
                                <AiOutlineMail />
                                bookdepository@example.com
                            </p>
                            <p className="mb-4 flex items-center justify-center md:justify-start gap-1 text-primary-900">
                                <BsTelephoneForward />
                                + 01 234 567 88
                            </p>
                        </div>
                    </div>
                </div>

                {/* Copyright section */}
                <div className="p-6 text-center">
                    <span>
                        © 2023 Copyright:{' '}
                        <Link
                            className="font-semibold text-primary"
                            to={homeUrl}
                        >
                            Book Depository
                        </Link>
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;