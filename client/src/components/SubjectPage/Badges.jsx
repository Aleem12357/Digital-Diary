import React from "react";

import diamondImg from "../../assets/badges/diamond.png";
import goldImg from "../../assets/badges/gold.png";
import silverImg from "../../assets/badges/silver.png";
import bronzeImg from "../../assets/badges/bronze.png";

const students = [
  { name: "Ali", rollNo: "01", marksObtained: 92, totalMarks: 100 },
  { name: "Sara", rollNo: "02", marksObtained: 89, totalMarks: 100 },
  { name: "John", rollNo: "03", marksObtained: 88, totalMarks: 100 },
  { name: "Zara", rollNo: "04", marksObtained: 80, totalMarks: 100 },
  { name: "Ahmed", rollNo: "05", marksObtained: 77, totalMarks: 100 },
  { name: "Nina", rollNo: "06", marksObtained: 73, totalMarks: 100 },
  { name: "Bilal", rollNo: "07", marksObtained: 70, totalMarks: 100 },
  { name: "Ayesha", rollNo: "08", marksObtained: 69, totalMarks: 100 },
  { name: "Tom", rollNo: "09", marksObtained: 68, totalMarks: 100 },
  { name: "Lina", rollNo: "10", marksObtained: 65, totalMarks: 100 },
  { name: "Mike", rollNo: "11", marksObtained: 61, totalMarks: 100 },
  { name: "Omar", rollNo: "12", marksObtained: 49, totalMarks: 100 },
  { name: "Usman", rollNo: "13", marksObtained: 37, totalMarks: 100 },
  { name: "Ahmed", rollNo: "14", marksObtained: 29, totalMarks: 100 },
  { name: "Hassan", rollNo: "15", marksObtained: 87, totalMarks: 100 },
];

const getBadgeLabel = (index, percentage) => {
  if (index === 0) return { label: "Diamond", img: diamondImg };
  if (index === 1 || index === 2) return { label: "Gold", img: goldImg };
  if (index >= 3 && index <= 9) return { label: "Silver", img: silverImg };
  if (percentage > 50) return { label: "Bronze", img: bronzeImg };
  return null;
};

const Badges = ({ subjectName, tabLabel }) => {
  const sortedStudents = [...students].sort((a, b) => b.marksObtained - a.marksObtained);

  const badgeData = sortedStudents.map((student, index) => {
    const percentage = (student.marksObtained / student.totalMarks) * 100;
    return {
      ...student,
      badge: getBadgeLabel(index, percentage),
    };
  });

  return (
    <div className="shadow-md rounded-md border p-4">
      <h2 className="text-md font-semibold mb-4">
        {subjectName} - {tabLabel}
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border-t border-gray-300">
          <thead>
            <tr className="bg-purple-500 text-white text-left text-sm">
              <th className="p-2">Badge</th>
              <th className="p-2">Name</th>
              <th className="p-2">Roll No</th>
              <th className="p-2">Marks Obtained</th>
              <th className="p-2">Total Marks</th>
            </tr>
          </thead>
          <tbody>
            {badgeData.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center text-gray-500 py-4">
                  No badges awarded yet.
                </td>
              </tr>
            ) : (
              badgeData.map((item, index) => (
                <tr
  key={index}
  className={`border-t hover:bg-gray-100 transition ${
    item.badge?.label === "Diamond"
    //animate-shine ( this is also for animation)
      ? "animate-pulseDiamond bg-gradient-to-r from-purple-300 via-white to-purple-300 bg-[length:200%_100%] "
      : item.badge?.label === "Gold"
      ? "animate-shimmerGold bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-500"
      : ""
  }`}
>
  <td className="p-2 sm:p-3 font-medium">
    {item.badge ? (
      <div className="flex items-center gap-2 flex-wrap">
        <img
          src={item.badge.img}
          alt={item.badge.label}
          className="w-6 h-6 max-w-full"
        />
        <span className="text-xs sm:text-sm">{item.badge.label}</span>
      </div>
    ) : (
      "—"
    )}
  </td>
  <td className="p-2 sm:p-3">{item.name}</td>
  <td className="p-2 sm:p-3">{item.rollNo}</td>
  <td className="p-2 sm:p-3">{item.marksObtained}</td>
  <td className="p-2 sm:p-3">{item.totalMarks}</td>
</tr>

              
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Badges;
