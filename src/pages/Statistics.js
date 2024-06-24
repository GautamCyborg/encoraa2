import React from 'react'
import { Outlet, useNavigate } from "react-router-dom"


const Statistics = () => {
  let navigate = useNavigate()
  return (
    <div>
        <h2 style={{textAlign: "center",margin:"20px"}}>Statistics</h2>

    <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
        <button  onClick={() => navigate("./route")} style={{margin: '10px 10px 0px 10px',padding: '5px 10px',border: 'solid 1px',borderRadius: '20px',textTransform: 'uppercase',fontWeight: "bold"}}>Default</button>
        <button onClick={() => navigate("./country")} style={{margin: '10px 10px 0px 10px',padding: '5px 10px',border: 'solid 1px',borderRadius: '20px',textTransform: 'uppercase',fontWeight: "bold"}}>Geographic</button>
        <button onClick={() => navigate("./users")} style={{margin: '10px 10px 0px 10px',padding: '5px 10px',border: 'solid 1px',borderRadius: '20px',textTransform: 'uppercase',fontWeight: "bold"}}>Top 50 Users</button>
    </div>
        
        <Outlet/>
    </div>
  )
}

export default Statistics