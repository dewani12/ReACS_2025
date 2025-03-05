import React from "react";

const RegistrationTable = () => {
  return (
    <div className="overflow-x-auto p-4">
      <table className="w-full border-collapse border border-white">
        <thead>
          <tr className="bg-[#7292D1]">
            <th colSpan="6" className="text-lg border border-white p-2">
              ReACS 2025, IIITM Gwalior (with GST)
            </th>
          </tr>
          <tr className="bg-[#9CC2D8]">
            <th colSpan="6" className="border border-white p-2">
              Indian Delegates (INR)
            </th>
          </tr>
          <tr className="bg-[#7BCFB3]">
            <th rowSpan="2" className="border border-white p-2">Category</th>
            <th colSpan="2" className="border border-white p-2">Early Bird Registration</th>
            <th colSpan="2" className="border border-white p-2">Registration</th>
          </tr>
        </thead>
        <thead>
          <tr className="bg-[#9CC2D8]">
            <th colSpan="6" className="border border-white p-2">
              Foreign Delegates (US $)
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default RegistrationTable;
