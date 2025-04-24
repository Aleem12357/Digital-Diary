import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Announcements from "../../components/SubjectPage/Announcements";
import Badges from "../../components/SubjectPage/Badges";
import Breadcrumbs  from "../../components/Breadcrumb";
const tabs = [
  { label: "Announcements", key: "Announcements", color: "bg-green-500"  },
  { label: "Badges", key: "Badges" },
  { label: "Course Outline", key: "CourseOutline" },
  { label: "Course Material", key: "CourseMaterial" },
  { label: "Diary", key: "diary" },
  { label: "Behaviour Tracker", key: "BehaviourTracker" },
  { label: "Grade Book", key: "GradeBook" }
];

const SubjectPage = () => {
  const [activeTab, setActiveTab] = useState("Announcements");
  const location = useLocation();
  const subjectName = location.state?.cardName || "Subject";

  return (
    <div className="pt-4 ">
  <div className="mt-10 sm:mt-10 bg-white/70 backdrop-blur-md pb-1 mb-3 shadow-2xl border border-gray-300">
  <Breadcrumbs exclude={["subject"]} />
        </div>
      

      {/* Tabs */}
      <div className="flex flex-wrap gap-4 mb-6 m-4">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 rounded text-white font-semibold hover:shadow-md hover:shadow-purple-700 ${
              activeTab === tab.key ? tab.color || "bg-green-500" : "bg-purple-500"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white/70 backdrop-blur-md m-4 pb-4 rounded-2xl shadow-2xl border border-gray-300 ">
      {activeTab === "Announcements" && <Announcements subjectName={subjectName} tabLabel={activeTab}/>}
      {activeTab === "Badges" && <Badges subjectName={subjectName} tabLabel={activeTab}/>} 
      {activeTab !== "Announcements" && activeTab !== "Badges" && (
          <div className="text-center text-gray-500 mt-10">
            {tabs.find((t) => t.key === activeTab)?.label} content goes here.
          </div>
        )}
      </div>
    </div>
  );
};

export default SubjectPage;
