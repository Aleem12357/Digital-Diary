import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
    FaUser,
    FaCommentDots,
    FaCalendarCheck,
    FaTable,
    FaChartBar,
    FaTachometerAlt,
    FaClipboardList,
    FaFileInvoiceDollar,
    FaChalkboardTeacher,
} from "react-icons/fa";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen, bgColor }) => {
    const location = useLocation();
    const pathSegments = location.pathname.split("/").filter(Boolean);
    const userRole = pathSegments[0] || "student";

    const studentMenu = [
        { name: "Dashboard", icon: <FaTachometerAlt />, path: "dashboard" },
        { name: "Profile", icon: <FaUser />, path: "profile" },
        { name: "Career Insight", icon: <FaCommentDots />, path: "career-insight" },
        { name: "Result & Exams", icon: <FaChartBar />, path: "results-exams" },
        { name: "Time Table", icon: <FaCalendarCheck />, path: "time-table" },
        { name: "Invoices", icon: <FaFileInvoiceDollar />, path: "invoices" },
      ];
    
      const teacherMenu = [
        { name: "Dashboard", icon: <FaTachometerAlt />, path: "dashboard" },
        { name: "Mark Attendance", icon: <FaClipboardList />, path: "attendance" },
        { name: "Student Performance", icon: <FaChartBar />, path: "performance" },
        { name: "Time Table", icon: <FaTable />, path: "time-table" },
      ];
    
      const parentMenu = [
        { name: "Dashboard", icon: <FaTachometerAlt />, path: "dashboard" },
        { name: "Student Info", icon: <FaUser />, path: "student-info" },
        { name: "Progress Report", icon: <FaChartBar />, path: "progress" },
        { name: "Meet Teachers", icon: <FaChalkboardTeacher />, path: "meet-teachers" },
        { label: "Invoices", icon: <FaFileInvoiceDollar />, path: "invoices" },
      ];
    
      const adminMenu = [
        { name: "Dashboard", icon: <FaTachometerAlt />, path: "dashboard" },
        { name: "Manage Users", icon: <FaUser />, path: "manage-users" },
        { name: "Timetables", icon: <FaTable />, path: "timetables" },
        { name: "Reports", icon: <FaChartBar />, path: "reports" },        
      ];
    
      let menuItems = studentMenu;
      if (userRole === "teacher") menuItems = teacherMenu;
      else if (userRole === "parent") menuItems = parentMenu;
      else if (userRole === "admin") menuItems = adminMenu;
    
    return (
        <div
            className={`fixed top-10 left-0 h-full w-64 bg-white shadow-md transition-transform duration-300 ease-in-out z-40
            ${isSidebarOpen ? "translate-x-0" : "-translate-x-64"}`}
        >
            <div className="text-white bg-[#6E4D91] p-4 flex flex-col items-center">
                <div className="w-20 h-20 bg-gray-300 rounded-full mt-4"></div>
                <p className="mt-2 text-lg capitalize">{userRole} Panel</p>
            </div>

            <ul className="mt-4">
            {menuItems.map((item, index) => {
  const isActive = location.pathname.includes(`/${userRole}/${item.path}`);
  return (
    <li
      key={index}
      className={`flex items-center space-x-3 p-3 cursor-pointer hover:bg-gray-100 ${
        isActive ? "bg-gray-100 font-semibold" : ""
      }`}
    >
      <Link
        to={`/${userRole}/${item.path}`}
        className="flex items-center space-x-3 w-full"
        onClick={() => setIsSidebarOpen(false)}
      >
        <span className="text-lg" style={{ color: isActive ? "red" : bgColor }}>
          {item.icon}
        </span>
        <span style={{ color: isActive ? "red" : "#4B5563" /* gray-700 */ }}>
          {item.name}
        </span>
      </Link>
    </li>
  );
})}

            </ul>
        </div>
    );
};


export default Sidebar;
