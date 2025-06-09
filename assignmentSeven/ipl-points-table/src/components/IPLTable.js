import React, { useEffect, useState } from 'react';


const IPlTable = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/FreSauce/json-ipl/data')
      .then((res) => res.json())
      .then((data) => {
        const sorted = [...data].sort((a, b) => a.NRR - b.NRR);
        setTeams(sorted);
      })
      .catch((err) => console.error('Failed to fetch:', err));
  }, []);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-5xl shadow-md border border-gray-300 rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-6">IPL Season 2022 Points</h1>
        <table className="w-full border-collapse text-center">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">No</th>
              <th className="border p-2">Team</th>
              <th className="border p-2">Matches</th>
              <th className="border p-2">Won</th>
              <th className="border p-2">Lost</th>
              <th className="border p-2">Tied</th>
              <th className="border p-2">NRR</th>
              <th className="border p-2">Points</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="border p-2">{team.No}</td>
                <td className="border p-2 text-left pl-4">{team.Team}</td>
                <td className="border p-2">{team.Matches}</td>
                <td className="border p-2">{team.Won}</td>
                <td className="border p-2">{team.Lost}</td>
                <td className="border p-2">{team.Tied}</td>
                <td className="border p-2">{team.NRR}</td>
                <td className="border p-2">{team.Points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IPlTable;
