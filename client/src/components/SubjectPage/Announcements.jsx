import React from "react";
const Announcements = ({ subjectName="Subject",tabLabel  }) => {
  // You can later replace this with dynamic data
  const files = [
    {
      SrNo: 1,
      WorkType: "quiz 1",
      Date: "2025-04-6",
      description: "Quiz 1 will be taken on 12th April 2025",
    },
    {
      SrNo: 2,
      WorkType: "Quiz 2",
      Date: "2025-05-02",
      description: "Lab Report deadline is 6th May 2025",
    },
    {
      SrNo: 3,
      WorkType: "Quiz 3",
      Date: "2025-06-03",
      description: "Project deadline is 28th June 2025",
    },
  ];

  return (
    <div className="shadow-md rounded-md border p-4">
      <h2 className="text-md font-semibold mb-4">{subjectName}-{tabLabel }</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border-t border-gray-300">
          <thead>
            <tr className="bg-purple-500 text-white text-left text-sm ">
              <th className="p-y ps-2">Sr No.</th>
              <th className="p-2">WorkType</th>
              <th className="p-2">Date</th>
              <th className="p-2">Description</th>
              <th className="p-2">Attachment</th>
            </tr>
          </thead>
          <tbody>
            {files.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center text-gray-500 py-4">
                  No File Yet Uploaded
                </td>
              </tr>
            ) : (
              files.map((file, index) => (
                <tr key={index} className="border-t">
                  <td className="p-2">{file.SrNo}</td>
                  <td className="p-2">{file.WorkType}</td>
                  <td className="p-2">{file.Date}</td>
                  <td className="p-2">{file.description}</td>
                  <td className="p-2">{file.upload}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Announcements;
