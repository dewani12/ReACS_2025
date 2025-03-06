import { IndianRupee, DollarSign } from 'lucide-react';

const RegistrationTable = () => {
  return (
    <div className="overflow-x-auto py-3">
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

// function Table() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-gray-900 mb-4">
//             ReACS 2025, IIITM Gwalior
//           </h1>
//           <p className="text-xl text-gray-600">Registration Fees Details (with GST)</p>
//         </div>

//         {/* Indian Delegates Section */}
//         <div className="bg-white shadow-lg overflow-hidden mb-8">
//           <div className="bg-blue-600 py-4">
//             <h2 className="text-xl font-semibold text-white text-center flex items-center justify-center gap-2">
//               <IndianRupee size={24} />
//               Indian Delegates (INR)
//             </h2>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead>
//                 <tr className="bg-gray-50">
//                   <th className="px-4 py-4 text-left text-sm font-semibold text-gray-600">Category</th>
//                   <th className="px-4 py-4 text-center text-sm font-semibold text-gray-600" colSpan={4}>Early Bird Registration</th>
//                   <th className="px-4 py-4 text-center text-sm font-semibold text-gray-600" colSpan={4}>Registration</th>
//                 </tr>
//                 <tr className="bg-gray-50">
//                   <th className="px-4 py-3 text-left text-sm font-medium text-gray-500"></th>
//                   <th className="px-4 py-3 text-center text-sm font-medium text-gray-500" colSpan={2}>Academia/Professionals</th>
//                   <th className="px-4 py-3 text-center text-sm font-medium text-gray-500" colSpan={2}>Students (10% Deduction)</th>
//                   <th className="px-4 py-3 text-center text-sm font-medium text-gray-500" colSpan={2}>Academia/Professionals</th>
//                   <th className="px-4 py-3 text-center text-sm font-medium text-gray-500" colSpan={2}>Students (10% Deduction)</th>
//                 </tr>
//                 <tr className="bg-gray-50 border-b">
//                   <th className="px-4 py-3"></th>
//                   <th className="px-4 py-3 text-center text-xs font-medium text-gray-500">IAPR/IEEE-SPS</th>
//                   <th className="px-4 py-3 text-center text-xs font-medium text-gray-500">Non IAPR/IEEE-SPS</th>
//                   <th className="px-4 py-3 text-center text-xs font-medium text-gray-500">IAPR/IEEE-SPS</th>
//                   <th className="px-4 py-3 text-center text-xs font-medium text-gray-500">Non IAPR/IEEE-SPS</th>
//                   <th className="px-4 py-3 text-center text-xs font-medium text-gray-500">IAPR/IEEE-SPS</th>
//                   <th className="px-4 py-3 text-center text-xs font-medium text-gray-500">Non IAPR/IEEE-SPS</th>
//                   <th className="px-4 py-3 text-center text-xs font-medium text-gray-500">IAPR/IEEE-SPS</th>
//                   <th className="px-4 py-3 text-center text-xs font-medium text-gray-500">Non IAPR/IEEE-SPS</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200">
//                 <tr className="hover:bg-blue-50">
//                   <td className="px-4 py-4 text-sm font-medium text-gray-900">Presenter</td>
//                   <td className="px-4 py-4 text-sm text-center text-gray-500">8,260</td>
//                   <td className="px-4 py-4 text-sm text-center text-gray-500">9,440</td>
//                   <td className="px-4 py-4 text-sm text-center text-gray-500">7,434</td>
//                   <td className="px-4 py-4 text-sm text-center text-gray-500">8,496</td>
//                   <td className="px-4 py-4 text-sm text-center text-gray-500">9,440</td>
//                   <td className="px-4 py-4 text-sm text-center text-gray-500">10,620</td>
//                   <td className="px-4 py-4 text-sm text-center text-gray-500">8,496</td>
//                   <td className="px-4 py-4 text-sm text-center text-gray-500">9,558</td>
//                 </tr>
//                 <tr className="hover:bg-blue-50">
//                   <td className="px-4 py-4 text-sm font-medium text-gray-900">Listener</td>
//                   <td className="px-4 py-4 text-sm text-center text-gray-500">2,950</td>
//                   <td className="px-4 py-4 text-sm text-center text-gray-500">4,130</td>
//                   <td className="px-4 py-4 text-sm text-center text-gray-500">2,655</td>
//                   <td className="px-4 py-4 text-sm text-center text-gray-500">3,717</td>
//                   <td className="px-4 py-4 text-sm text-center text-gray-500">4,130</td>
//                   <td className="px-4 py-4 text-sm text-center text-gray-500">5,310</td>
//                   <td className="px-4 py-4 text-sm text-center text-gray-500">3,717</td>
//                   <td className="px-4 py-4 text-sm text-center text-gray-500">4,779</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Foreign Delegates Section */}
//         <div className="bg-white shadow-lg overflow-hidden">
//           <div className="bg-green-600 py-4">
//             <h2 className="text-xl font-semibold text-white text-center flex items-center justify-center gap-2">
//               <DollarSign size={24} />
//               Foreign Delegates (USD)
//             </h2>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead>
//                 <tr className="bg-gray-50">
//                   <th className="px-4 py-4 text-left text-sm font-semibold text-gray-600">Category</th>
//                   <th className="px-4 py-4 text-center text-sm font-semibold text-gray-600" colSpan={4}>Early Bird Registration</th>
//                   <th className="px-4 py-4 text-center text-sm font-semibold text-gray-600" colSpan={4}>Registration</th>
//                 </tr>
//                 <tr className="bg-gray-50">
//                   <th className="px-4 py-3 text-left text-sm font-medium text-gray-500"></th>
//                   <th className="px-4 py-3 text-center text-sm font-medium text-gray-500" colSpan={2}>Academia/Professionals</th>
//                   <th className="px-4 py-3 text-center text-sm font-medium text-gray-500" colSpan={2}>Students (10% Deduction)</th>
//                   <th className="px-4 py-3 text-center text-sm font-medium text-gray-500" colSpan={2}>Academia/Professionals</th>
//                   <th className="px-4 py-3 text-center text-sm font-medium text-gray-500" colSpan={2}>Students (10% Deduction)</th>
//                 </tr>
//                 <tr className="bg-gray-50 border-b">
//                   <th className="px-4 py-3"></th>
//                   <th className="px-4 py-3 text-center text-xs font-medium text-gray-500">IAPR/IEEE-SPS</th>
//                   <th className="px-4 py-3 text-center text-xs font-medium text-gray-500">Non IAPR/IEEE-SPS</th>
//                   <th className="px-4 py-3 text-center text-xs font-medium text-gray-500">IAPR/IEEE-SPS</th>
//                   <th className="px-4 py-3 text-center text-xs font-medium text-gray-500">Non IAPR/IEEE-SPS</th>
//                   <th className="px-4 py-3 text-center text-xs font-medium text-gray-500">IAPR/IEEE-SPS</th>
//                   <th className="px-4 py-3 text-center text-xs font-medium text-gray-500">Non IAPR/IEEE-SPS</th>
//                   <th className="px-4 py-3 text-center text-xs font-medium text-gray-500">IAPR/IEEE-SPS</th>
//                   <th className="px-4 py-3 text-center text-xs font-medium text-gray-500">Non IAPR/IEEE-SPS</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200">
//                 <tr className="hover:bg-green-50">
//                   <td className="px-4 py-4 text-sm font-medium text-gray-900">Presenter</td>
//                   <td className="px-4 py-4 text-sm text-center text-gray-500">236</td>
//                   <td className="px-4 py-4 text-sm text-center text-gray-500">295</td>
//                   <td className="px-4 py-4 text-sm text-center text-gray-500">177</td>
//                   <td className="px-4 py-4 text-sm text-center text-gray-500">206.5</td>
//                   <td className="px-4 py-4 text-sm text-center text-gray-500">295</td>
//                   <td className="px-4 py-4 text-sm text-center text-gray-500">354</td>
//                   <td className="px-4 py-4 text-sm text-center text-gray-500">236</td>
//                   <td className="px-4 py-4 text-sm text-center text-gray-500">295</td>
//                 </tr>
//                 <tr className="hover:bg-green-50">
//                   <td className="px-4 py-4 text-sm font-medium text-gray-900">Listener</td>
//                   <td className="px-4 py-4 text-sm text-center text-gray-500">118</td>
//                   <td className="px-4 py-4 text-sm text-center text-gray-500">177</td>
//                   <td className="px-4 py-4 text-sm text-center text-gray-500">88.5</td>
//                   <td className="px-4 py-4 text-sm text-center text-gray-500">118</td>
//                   <td className="px-4 py-4 text-sm text-center text-gray-500">118</td>
//                   <td className="px-4 py-4 text-sm text-center text-gray-500">177</td>
//                   <td className="px-4 py-4 text-sm text-center text-gray-500">88.5</td>
//                   <td className="px-4 py-4 text-sm text-center text-gray-500">118</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Table;
