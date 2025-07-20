import { useContext, useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { VscClose } from "react-icons/vsc";
import { CiSearch } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";
import userLogo from '../assets/image.png'





//motion

import {
    useMotionTemplate,
    useMotionValue,
    motion,
    animate,
} from "framer-motion";
import { cn } from "../lib/utils";
import Overlay from "../ui/Overlay";
import useMobile from "../lib/ForMobile";
import { AuthContext } from "../provider/AuthProvider";

const COLORS_TOP = ["#29C48BFF", "#DF1767FF", "#184B9BFF", "#AC0BC5FF", "#949823FF", "#335F56FF"];
//end



function Header() {
    const { user, Logout } = useContext(AuthContext)

    const navItems = [
        { label: "Home", link: "/" },
        { label: "All-Reviews", link: "/allreviews" },
        ...(user
            ? [
                { label: "Add-Reviews", link: "/addreviews" },
                { label: "My-Reviews", link: "/myreviwe" },
                { label: "Game Watch List", link: "/gamewatchlist" },
            ]
            : []),
    ];

    //motion start
    const color = useMotionValue(COLORS_TOP[0]);

    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
        });
    }, []);

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #171302FF 50%, ${color})`;
    const border = useMotionTemplate`1px solid ${color}`;
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
    //motion end
    const isMobile = useMobile();
    const [isOpen, setIsOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const onOpen = () => {
        setIsOpen(true);
    };

    const onClose = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (

        <header
            
            style={{
                backgroundImage,

            }}
            className={cn(
                 
                "py-5 text-xs md:text-xs lg:text-xl px-5  text-white  z-20 transition-shadow duration-300",
                isSticky ? "fixed top-0 left-0 w-full bg-gradient-to-br from-black via-gray-900 to-gray-800 backdrop-blur-md shadow-md z-50" : "bg-gradient-to-br from-black via-gray-900 to-gray-800",
                isMobile ? "shadow-sm  px-5" : ""
            )}
        >

            <div className="width  items-center padding-x flex gap-10 justify-between">
                <div className="flex  gap-5 justify-center  justify-items-center">

                    <div className="font-semibold text-lg text-nowrap">Chill Gamer</div>



                </div>

                {isMobile ? (
                    <button className="cursor-pointer" onClick={onOpen}>
                        <RxHamburgerMenu className="text-xl" />
                    </button>
                ) : null}

                {isMobile ? (
                    <>
                        <Overlay isOpen={isOpen} onClose={onClose} />
                        <aside
                            className={cn(
                                "h-screen  fixed top-0 right-0 w-[18rem] shadow-sm bg-base-100 z-40 transition-all duration-300 p-10",
                                isOpen ? "translate-x-0" : "translate-x-full"
                            )}
                        >
                            <div className="flex items-center text-white justify-between">
                                <h1 className="font-semibold text-xl text-nowrap">
                                    Chill Gamer
                                </h1>

                                <button
                                    onClick={onClose}
                                    className="cursor-pointer size-7 bg-red-100 text-red-500 rounded-full flex items-center justify-center"
                                >
                                    <VscClose />
                                </button>
                            </div>

                            <ul className="flex flex-col  gap-5 mt-7">
                                {navItems.map((item, index) => (
                                    <NavLink
                                        key={index}
                                        to={item.link}
                                        className={({ isActive }) =>
                                            isActive ? "text-blue-200 font-bold border border-2xl p-1 rounded" : "text-white"
                                        }
                                    >
                                        {item.label}
                                    </NavLink>
                                ))}
                            </ul>
                        </aside>
                    </>
                ) : (
                    <nav className="">
                        <ul className="flex items-center  gap-7">
                            {navItems.map((item, index) => (
                                <NavLink
                                    key={index}
                                    to={item.link}
                                    className={({ isActive }) =>
                                        isActive ? "text-blue-200 font-bold border border-2xl p-1 rounded" : "text-white"
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            ))}
                        </ul>
                    </nav>
                )}

                <div className="flex items-center gap-2 md:gap-5">
                    {
                        user ? <img className="rounded-full h-10 w-10" src={user.photoURL} alt="" /> : <img className="rounded-full w-10" src={userLogo} ></img>
                    }
                    {
                        user && user?.email ? <Link to="/" onClick={Logout} className="text-blue-200 font-bold border border-2xl p-1 rounded">Log-Out</Link> :
                            <Link to='/login' className="text-blue-200 font-bold border border-2xl p-1 rounded">Log-In</Link>
                    }
                    <Link to='/register' className="text-blue-200 font-bold border border-2xl p-1 rounded">Register</Link>
                </div>
            </div>

        </header>


    );
}

export default Header;