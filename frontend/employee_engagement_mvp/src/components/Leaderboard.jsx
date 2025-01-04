import  { useState, useEffect } from "react";
import axios from "axios";

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await axios.get("http://localhost:8080/leaderboard");
        const sortedData = response.data.sort((a, b) => b.totalReceived - a.totalReceived); 
        setLeaderboard(sortedData);
      } catch (err) {
        console.error("Error fetching leaderboard", err);
      }
    };
    fetchLeaderboard();
  }, []);

  return (
    <div className="container mt-4">
      <div className="card shadow-lg">
        <div className="card-body">
          <h2 className="card-title text-center">Leaderboard</h2>
          <div className="table-responsive">
            <table className="table table-striped table-bordered">
              <thead className="table-dark">
                <tr>
                  <th>Position</th>
                  <th>Name</th>
                  <th>Total Received</th>
                  <th>ID</th>
                  <th>Award</th>
                </tr>
              </thead>
              <tbody>
                {leaderboard.map((employee, index) => (
                  <tr key={employee._id}>
                    <td>{index + 1}</td>
                    <td>{employee.name}</td>
                    <td>{employee.totalReceived}</td>
                    <td>{employee._id}</td>
                    <td>
                      {index === 0 ? (
                        <>
                          🏅 <span className="badge bg-success">Winner Voucher</span>
                        </>
                      ) : (
                        "—"
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
