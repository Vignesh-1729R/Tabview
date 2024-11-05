import React, { useState, useEffect } from "react";
import "../saas/tableview.scss";

const TableView = ({ data }) => {
  const [activeTab, setActiveTab] = useState("student");
  const [tableData, setTableData] = useState([]);
  // const [searchQuery, setsearchQuery] = useState();

  useEffect(() => {
    if (data) {
      setTableData(data);
    }
  }, [data]);

  const filterDataByRole = (role) => {
    return tableData.filter((item) => item.role === role);
  };
  console.log("tableData", tableData);
  return (
    <div className="table-view">
      <h2>Table View</h2>
      <div className="tabs">
        <button
          className={activeTab === "student" ? "active" : ""}
          onClick={() => setActiveTab("student")}
        >
          Student
        </button>
        <button
          className={activeTab === "staff" ? "active" : ""}
          onClick={() => setActiveTab("staff")}
        >
          Staff
        </button>
        <button
          className={activeTab === "hod" ? "active" : ""}
          onClick={() => setActiveTab("hod")}
        >
          Admin
        </button>
      </div> 
      <div>
        <table>
          <thead>
            <tr>
              <th>Avatar</th>
              <th>ID</th>
              <th>Name</th>
              <th>Role</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {filterDataByRole(activeTab).map((item) => (
              <tr key={item.id}>
                <td>
                  <img
                    src={item.avatar}
                    alt={`${item.name}'s avatar`}
                    className="avatar"
                  />
                </td>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.role}</td>
                <td>{item.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// TableView.propTypes = {
//   data: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     role: PropTypes.string.isRequired,
//     location: PropTypes.string.isRequired,
//     avatar: PropTypes.string.isRequired
//   })).isRequired
// };

export default TableView;
