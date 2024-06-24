import React from 'react'
import Chart from '../components/stats/Chart';
import InteractiveTable from '../components/stats/InteractiveTable';
import Globe from '../components/stats/Globe';

const data = [
  { country: 'India', plants: 181370, other: 2, uploads: 181372 },
  { country: 'South Africa', plants: 1602, other: 0, uploads: 1602 },
  { country: 'Location not updated by users', plants: 1594, other: 1, uploads: 1595 },
  { country: 'United Kingdom', plants: 1415, other: 0, uploads: 1415 },
  { country: 'Malaysia', plants: 999, other: 0, uploads: 999 },
  { country: 'Sri Lanka', plants: 146, other: 0, uploads: 146 },
  { country: 'United States of America', plants: 123, other: 0, uploads: 123 },
  { country: 'Indonesia', plants: 19, other: 0, uploads: 19 },
  { country: 'Oman', plants: 14, other: 0, uploads: 14 },
  { country: 'Spain', plants: 13, other: 0, uploads: 13 },
  { country: 'Australia', plants: 12, other: 0, uploads: 12 },
  { country: 'Egypt', plants: 11, other: 0, uploads: 11 },
  { country: 'Nepal', plants: 8, other: 0, uploads: 8 },
  { country: 'Bhutan', plants: 8, other: 0, uploads: 8 },
  { country: 'Taiwan', plants: 8, other: 0, uploads: 8 },
];


const Statistics = () => {
  return (
    <div>
        <h2 style={{textAlign: "center",margin:"20px"}}>Statistics</h2>

    <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
        <button style={{margin: '10px 10px 0px 10px',padding: '5px 10px',border: 'solid 1px',borderRadius: '20px',textTransform: 'uppercase',fontWeight: "bold"}}>Default</button>
        <button style={{margin: '10px 10px 0px 10px',padding: '5px 10px',border: 'solid 1px',borderRadius: '20px',textTransform: 'uppercase',fontWeight: "bold"}}>Geographic</button>
        <button style={{margin: '10px 10px 0px 10px',padding: '5px 10px',border: 'solid 1px',borderRadius: '20px',textTransform: 'uppercase',fontWeight: "bold"}}>Top 50 Users</button>
    </div>
        <div style={{padding:"50px 100px 50px 100px",alignContent:"center"}}><InteractiveTable data={data}/></div>
    </div>
  )
}

export default Statistics