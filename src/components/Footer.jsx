import { FaFacebook, FaInstagram, FaTelegram, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer className='text-white bg-gradient-to-br from-black via-gray-900 to-gray-800  '>
            <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Company Info */}
                <div>
                    <h1 className="flex gap-2  items-center-center text-lg font-semibold mb-4">Chill Gamer</h1>
                    <p className="mt-2 text-sm">
                       Chill Gamer
                    </p>
                    <img className="w-25 mt-2" src='' alt="" />
                </div>

                {/* Help & Support */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Help & Support</h3>
                    <ul className="space-y-2 text-sm">
                        <li>

                            <Link to='/' className="hover:cursor-pointer">Home</Link>
                        </li>
                        <li>
                            <Link to='/allreviews' className="hover:cursor-pointer">All Reviews</Link>
                        </li>
                        <li>
                            <Link to='/addreviews' className="hover:cursor-pointer">Add Reviews</Link>
                        </li>

                    </ul>
                </div>


                {/*game review */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Details</h3>
                    <p className="text-sm">
                        Game Review
                    </p>

                </div>
                
                {/* Earning Programs */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                    <div className="text-xl flex gap-3">
                        <a href="#/" target="_blank"><FaFacebook /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer">    <FaInstagram /></a>

                    </div>
                   
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-400"></div>

            {/* Bottom Section */}


            {/* Copyright Section */}
            <p className="text-center   text-xs py-10"> Copyright © {new Date().getFullYear()} Chill Gamer || All Rights Reserved .</p>

        </footer>
    );
};

export default Footer;