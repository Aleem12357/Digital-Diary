import React, { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import Cards from "../../components/Cards.jsx";
import background from "../../assets/images/logo.png";


const bgColor = "#1F3F6A";

const Home = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [inviteEmail, setInviteEmail] = useState("");
    const [inviteMessage, setInviteMessage] = useState("");
    const storedUser = JSON.parse(localStorage.getItem("googleUser"));

    const profilePic = storedUser?.picture || background;

    const student = {
        name: storedUser ? storedUser.name : "Aleem",
        rollNo: "21",
        class: 10,
        percentage: 89,
        
    };

    const class5Cards = [
        { title: "Maths", text: "Aslam Ranja", path: "/Maths" },
        { title: "English", text: "Mahnoor", path: "/English" },
        { title: "Urdu", text: "Nusrat jabeen", path: "/Urdu" },
    ];

    const class10Cards = [
        { title: "Pak Studies", text: "Ahmed iftikhar", path: "/Pak-Studies" },
        { title: "English", text: "Zahra Nawaz", path: "/English" },
        { title: "Urdu", text: "Nusrat jabeen", path: "/Urdu" },
        { title: "Maths", text: "Aslam Ranja", path: "/Maths" },
        { title: "Physics", text: "Sarah Jawed", path: "/Physics" },
        { title: "Chemistry", text: "Muhammad Azeem", path: "/Chemistry" },
        { title: "Biology", text: "Kinza", path: "/Biology" },
        { title: "Computer Science", text: "Maryam", path: "/Computer-Science" },
        { title: "Islamiyat", text: "Mahnoor", path: "/Islamiyat" },
    ];


    let displayedCards = [];
    if (student.class === 5 && student.creditHours >= 90) {
        displayedCards = class5Cards;
    } else if (student.class === 10) {
        displayedCards = class10Cards;
    }

    return (
      
        <div className={`flex-1 transition-all duration-300 ease-in-out pt-4 ${isSidebarOpen ? "ml-64" : "ml-0"}`}>
            <div className="mt-10 bg-white/70 backdrop-blur-md  pb-1 shadow-2xl border border-gray-300">
                <Breadcrumb exclude={["student"]} bgColor={bgColor} />
            </div>
            <div className="bg-white/70 backdrop-blur-md m-4 pb-4 rounded-2xl shadow-2xl border border-gray-300 ">

            <div className="pt-4 ps-6 justify-evenly ">
                        <p className="text-gray-800 font-semibold text-lg">Academics</p>
                       
            </div>
            <div className="flex flex-col md:flex-row mt-4  items-center">
                <div className="flex items-center">

                    <img
                        src={profilePic}
                        alt="Profile"
                        className="w-25 h-25 rounded-full object-cover mr-4 ml-4"
                    />
                </div>
                    <div className="pt-0  justify-evenly text-center md:text-left">
                        <p className="text-gray-800 font-semibold">Name: {student.name}</p>
                        <p className="text-gray-600">Roll No: {student.rollNo}</p>
                        <p className="text-gray-600">Class: {student.class}</p>
                    </div>

                <div className="mt-4 md:mt-0 md:ml-16  flex flex-grow justify-evenly">
                    <div className="text-gray-700 ">
                        <h2 className="font-semibold">Previous Results</h2>
                        <p className="text-gray-600">Percentage%: {student.percentage}</p>
                    </div>
              
                </div>
            </div>


            <div className="px-4">
                <Cards bgColor={bgColor} cardData={displayedCards} />
            </div>
            </div>
        </div>
    );
};

export default Home;
