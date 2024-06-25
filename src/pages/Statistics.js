import React from 'react';
import { Outlet, useNavigate, useLocation } from "react-router-dom";

const Statistics = () => {
  let navigate = useNavigate();
  let location = useLocation();

  const getButtonStyle = (path) => ({
    margin: '10px 10px 0px 10px',
    padding: '5px 10px',
    border: 'solid 1px',
    borderRadius: '20px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    backgroundColor: location.pathname.includes(path) ? '#4CAF50' : '#f0f0f0',
    color: location.pathname.includes(path) ? 'white' : 'black',
    cursor: 'pointer'
  });

  const hoverStyle = {
    filter: 'brightness(85%)'
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", margin: "20px" }}>Statistics</h2>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <button 
          onClick={() => navigate("./chart")} 
          style={getButtonStyle("chart")}
          onMouseEnter={(e) => e.currentTarget.style.filter = hoverStyle.filter}
          onMouseLeave={(e) => e.currentTarget.style.filter = 'none'}
        >
          Default
        </button>
        <button 
          onClick={() => navigate("./geographic")} 
          style={getButtonStyle("country")}
          onMouseEnter={(e) => e.currentTarget.style.filter = hoverStyle.filter}
          onMouseLeave={(e) => e.currentTarget.style.filter = 'none'}
        >
          Geographic
        </button>
        <button 
          onClick={() => navigate("./top50users")} 
          style={getButtonStyle("users")}
          onMouseEnter={(e) => e.currentTarget.style.filter = hoverStyle.filter}
          onMouseLeave={(e) => e.currentTarget.style.filter = 'none'}
        >
          Top 50 Users
        </button>
      </div>

      <Outlet />
    </div>
  );
}

export default Statistics;
