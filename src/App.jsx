import React, { useEffect, useState } from "react";

function App() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data")
      .then((res) => res.json())
      .then((data) => {
        // Sort in ascending order of NRR
        const sortedData = [...data].sort(
          (a, b) => Number(a.NRR) - Number(b.NRR)
        );
        setTeams(sortedData);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>IPL Season 2022 Points Table</h1>

      <table
        border="1"
        cellPadding="10"
        style={{
          margin: "20px auto",
          borderCollapse: "collapse",
          width: "80%"
        }}
      >
        <thead>
          <tr>
            <th>Position</th>
            <th>Team</th>
            <th>Matches</th>
            <th>Won</th>
            <th>Lost</th>
            <th>NRR</th>
            <th>Points</th>
          </tr>
        </thead>

        <tbody>
          {teams.map((team, index) => (
            <tr key={team.id}>
              <td>{index + 1}</td>
              <td>{team.Team}</td>
              <td>{team.Matches}</td>
              <td>{team.Won}</td>
              <td>{team.Lost}</td>
              <td>{team.NRR}</td>
              <td>{team.Points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;