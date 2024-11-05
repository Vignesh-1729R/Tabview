import React, { useState } from 'react';
import '../saas/cardview.scss'

const CardView = ({ data }) => {
  const [activeTab, setActiveTab] = useState('student');

  const filterDataByRole = (role) => {
    return data.filter(item => item.role === role);
  };

  return (
    <div className="card-view">
      <div className="tabs">
        <button 
          className={activeTab === 'student' ? 'active' : ''}
          onClick={() => setActiveTab('student')}
        >
          Student
        </button>
        <button 
          className={activeTab === 'staff' ? 'active' : ''}
          onClick={() => setActiveTab('staff')}
        >
          Staff
        </button>
        <button 
          className={activeTab === 'hod' ? 'active' : ''}
          onClick={() => setActiveTab('hod')}
        >
          Admin
        </button>
      </div>
      <div className="card-container">
        {filterDataByRole(activeTab).map(item => (
          <div key={item.id} className="card">
            <img src={item.avatar} alt={`${item.name}'s avatar`} className="card-avatar" />
            <div className="card-content">
              <h3 className="card-name">{item.name}</h3>
              <p className="card-role">{item.role}</p>
              <p className="card-location">{item.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardView;
