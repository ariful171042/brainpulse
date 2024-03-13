import React from "react";

// Sample user data
const userData = [
  { userName: "User1", scores: 80, testsTaken: 3 },
  { userName: "User2", scores: 95, testsTaken: 2 },
  { userName: "User3", scores: 70, testsTaken: 4 },
  { userName: "User3", scores: 70, testsTaken: 4 },
  { userName: "User3", scores: 70, testsTaken: 4 },
];

const RankTable = () => {
  return (
    <div className="w-full flex justify-center ">
      <div className="container shadow-[7px_7px_10px_1px_rgba(0,0,25)]">
        <table className="min-w-full divide-y divide-pr  overflow-hidden">
          <thead className="text-xs md:text-xl bg-gray-700/20 text-white/80 font-semibold uppercase tracking-wider text-center">
            <tr>
              <th className="px-6 py-4 hover:text-purple-300  duration-200">
                Username
              </th>
              <th className="px-6 py-4 hover:text-purple-300  duration-200">
                Scores
              </th>
              <th className="px-6 py-4 hover:text-purple-300  duration-200">
                Tests Taken
              </th>
            </tr>
          </thead>
          <tbody className="bg-slate-950/30 divide-y divide-gray-700/30  lg:text-xl">
            {userData.map((user, i) => (
              <tr key={i} className="hover:bg-se duration-200 text-white/80">
                <td className="text-center px-6 py-4 whitespace-nowrap hover:text-purple-300">
                  {user.userName}
                </td>
                <td className="text-center text-purple-400 px-6 py-4 pr-10 whitespace-nowrap hover:text-white/80">
                  {user.scores}
                </td>
                <td className="text-center px-6 py-4 whitespace-nowrap hover:text-purple-300">
                  {user.testsTaken}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RankTable;
