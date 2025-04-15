import React, { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import Cards from "../../components/Cards.jsx";
import background from "../../assets/images/School.png";


const bgColor = "#1F3F6A";

const Home = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [inviteEmail, setInviteEmail] = useState("");
    const [inviteMessage, setInviteMessage] = useState("");
    const storedUser = JSON.parse(localStorage.getItem("googleUser"));

    const profilePic = storedUser?.picture || background;

    const student = {
        name: storedUser ? storedUser.name : "Aleem",
        rollNo: "21F-1234",
        faculty: "Computer Science",
        semester: 6,
        creditHours: 92,
        gpa: 3.5,
        cgpa: 3.6,
    };

    const semester6Cards = [
        { title: "Maths", text: "Brainstorm and finalize your project idea.", path: "/student/idea-selection" },
        { title: "English", text: "Form your project group and collaborate.", path: "/student/group-formation" },
        { title: "Urdu", text: "Manage project documentation with your advisor.", path: "/student/advisor" },
    ];

    const semester7Cards = [
        { title: "Pak Studies", text: "Submit your project proposal for approval.", path: "/proposal-submission" },
        { title: "English", text: "Conduct research and collect data for your project.", path: "/research-work" },
    ];

    

    let displayedCards = [];
    if (student.semester === 6 && student.creditHours >= 90) {
        displayedCards = semester6Cards;
    } else if (student.semester === 7) {
        displayedCards = semester7Cards;
    }
    const handleSendInvite = () => {
        if (!inviteEmail.includes("@")) {
            setInviteMessage(" Please enter a valid email.");
            return;
        }

        setTimeout(() => {
            setInviteMessage(` Invite sent to ${inviteEmail}`);
            setInviteEmail("");
        }, 1000);
    };

    return (
        // <div className="font-sans flex flex-col min-h-screen">
        //     <Navbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} bgColor={bgColor} />

        //     <div className="flex mt-10 transition-all duration-300 ease-in-out">
        //         <Sidebar isSidebarOpen={isSidebarOpen} bgColor={bgColor} />

        <div className={`flex-1 transition-all duration-300 ease-in-out pt-4 ${isSidebarOpen ? "ml-64" : "ml-0"}`}>
            <div className="mt-10">
                <Breadcrumb exclude={["student"]} bgColor={bgColor} />
            </div>

            <div className="flex flex-col md:flex-row items-start mt-4">
                <div className="flex items-center">

                    <img
                        src={profilePic}
                        alt="Profile"
                        className="w-16 h-16 rounded-full object-cover mr-4 ml-4"
                    />
                    <div>
                        <p className="text-gray-800 font-semibold">{student.name}</p>
                        <p className="text-gray-600">Roll No: {student.rollNo}</p>
                        <p className="text-gray-600">Faculty: {student.faculty}</p>
                    </div>
                </div>

                <div className="mt-4 md:mt-0 md:ml-16 flex flex-grow justify-evenly">
                    <div className="text-gray-700">
                        <h2 className="font-semibold">Project Standings</h2>
                        <p className="text-sm text-gray-500">Project Completion %</p>
                    </div>
                    <div className="text-gray-700">
                        <h2 className="font-semibold">Earned Credit Hours</h2>
                        <p className="text-sm text-gray-500">Total: {student.creditHours}</p>
                    </div>
                    <div className="text-gray-700">
                        <h2 className="font-semibold">Academic Standings</h2>
                        <p className="text-sm text-gray-500">GPA: {student.gpa}</p>
                        <p className="text-sm text-gray-500">CGPA: {student.cgpa}</p>
                    </div>
                </div>
            </div>


            <div className="px-4">
                <Cards bgColor={bgColor} cardData={displayedCards} />
            </div>
        </div>
    );
};

export default Home;
