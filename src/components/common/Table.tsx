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
    <div className="w-full flex justify-center">
      <div className="container">
        <table className="min-w-full divide-y divide-pr rounded-lg overflow-hidden">
          <thead className="text-xs md:text-xl bg-slatee text-white/80">
            <tr>
              <th className="px-6 py-4 text-center font-medium  uppercase tracking-wider ">
                Username
              </th>
              <th className="px-6 py-4 text-center  font-medium  uppercase tracking-wider">
                Scores
              </th>
              <th className="px-6 py-4 text-center  font-medium  uppercase tracking-wider">
                Tests Taken
              </th>
            </tr>
          </thead>
          <tbody className="bg-se divide-y divide-pr lg:text-xl">
            {userData.map((user, i) => (
              <tr key={i} className="hover:bg-pr duration-200 text-white/70 ">
                <td className="text-center px-6 py-4 whitespace-nowrap">
                  {user.userName}
                </td>
                <td className="text-center text-purple-500 px-6 py-4 pr-10 whitespace-nowrap">
                  {user.scores}
                </td>
                <td className="text-center px-6 py-4 whitespace-nowrap">
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
