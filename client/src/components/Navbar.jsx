import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
    FaBars,
    FaTh,
    FaBell,
    FaExpand,
    FaArrowLeft,
    FaCalendarAlt,
    FaClipboardList,
    FaUserCircle,
    FaSignOutAlt,
    FaFileInvoiceDollar,
    FaChartBar,
    FaBell as FaBellIcon
} from "react-icons/fa";

import logo from "../assets/images/logo.png";
import background from "../assets/images/School.png";

const Navbar = ({ isSidebarOpen, setIsSidebarOpen, bgColor }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const navigate = useNavigate();

    const storedUser = JSON.parse(localStorage.getItem("googleUser"));
    const profilePic = storedUser?.picture || background;

    const handleSignOut = () => {
        localStorage.removeItem("googleUser");
        if (window.google?.accounts?.id) {
            window.google.accounts.id.disableAutoSelect();
        }
        navigate("/");
    };

    // Outside click handling with exception for FaTh button
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                !event.target.closest(".menu-toggle")
            ) {
                setMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const menuItems = [
        { label: "Notifications", icon: <FaBellIcon className="text-2xl" /> },
        { label: "DateSheet", icon: <FaCalendarAlt className="text-2xl" /> },
        // { label: "Attendance", icon: <FaClipboardCheck className="text-2xl" /> },
        { label: "Time Table", icon: <FaClipboardList className="text-2xl" /> },
        { label: "Invoices", icon: <FaFileInvoiceDollar className="text-2xl" /> },
        { label: "Results", icon: <FaChartBar className="text-2xl" /> },
    ];

    return (
        <header
            style={{ backgroundColor: bgColor }}
            className="text-white flex justify-between items-center px-6 py-0 fixed top-0 left-0 w-full z-50"
        >
            <div className="flex items-center space-x-4 relative">
                {isSidebarOpen ? (
                    <FaArrowLeft className="text-xl cursor-pointer" onClick={() => setIsSidebarOpen(false)} />
                ) : (
                    <FaBars className="text-xl cursor-pointer" onClick={() => setIsSidebarOpen(true)} />
                )}
                <FaTh
                    className="text-xl cursor-pointer menu-toggle"
                    onClick={() => setMenuOpen(prev => !prev)}
                />

                <img src={logo} alt="UCP Logo" className="h-14" />
                <div>
                    <h1 className="text-lg font-semibold">Workers Welfare School</h1>
                    <p className="text-xs text-gray-200">Learn & Serve</p>
                </div>

                {/* Floating Menu Modal */}
                {menuOpen && (
                    <div
                        ref={menuRef}
                        className="absolute top-16 left-10 w-[600px] bg-white text-black shadow-lg rounded-md p-6 z-50 animate-slide-down"
                    >
                        <div className="grid grid-cols-3 gap-6 text-center">
                            {menuItems.map((item) => (
                                <div
                                    key={item.label}
                                    className="flex flex-col items-center hover:text-blue-700 cursor-pointer"
                                >
                                    {item.icon}
                                    <span className="text-sm mt-1">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <div className="relative flex items-center space-x-4">
            <FaExpand className="text-xl cursor-pointer" />
            <FaBell className="text-xl cursor-pointer" />
                <div className="cursor-pointer" onClick={() => setDropdownOpen(!dropdownOpen)}>
                    <img
                        src={profilePic}
                        alt="Profile"
                        className="w-9 h-9 rounded-full object-cover border-2 border-[#6E4D91]"
                    />
                </div>

                {dropdownOpen && (
                    <div className="absolute top-12 right-2 bg-white text-black shadow-2xl rounded-md w-44 z-50 py-2 animate-fade-in">
                    <button
                            onClick={() => navigate("/profile")}
                            className="flex items-center gap-2 px-4 py-2 w-full text-left text-sm hover:bg-gray-200"
                        >
                            <FaUserCircle className="text-lg" />
                            My Profile
                        </button>
                        <button
                            onClick={handleSignOut}
                            className="flex items-center gap-2 px-4 py-2 w-full text-left text-sm hover:bg-gray-200 "
                        >
                            <FaSignOutAlt className="text-lg" />
                            Log out
                        </button>
                    </div>
                )}
            </div>

        </header>
    );
};

export default Navbar;
