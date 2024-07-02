import React from 'react';

const InteractiveTable = () => {
  const TableData = [
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

  console.log(TableData)
  // Function to calculate totals
  const calculateTotals = (TableData) => {
    let totalPlants = 0;
    let totalOther = 0;
    let totalUploads = 0;
    TableData.forEach(row => {
      totalPlants += row.plants;
      totalOther += row.other;
      totalUploads += row.uploads;
    });
    return { country: 'Total', plants: totalPlants, other: totalOther, uploads: totalUploads };
  };

  // Add the total row to the TableData
  const totalRow = calculateTotals(TableData);
  const dataWithTotal = [...TableData, totalRow];

  // Inline styles
  const tableStyles = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  };

  const thStyles = {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
    backgroundColor: '#f2f2f2',
    fontWeight: 'bold',
  };

  const tdStyles = {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
  };

  const trStyles = {
    cursor: 'pointer',
  };

  const totalRowStyles = {
    fontWeight: 'bold',
  };

  const aStyles = {
    color: '#007bff',
    textDecoration: 'none',
  };

  const aHoverStyles = {
    textDecoration: 'underline',
  };

return (
    <div style={{padding:"50px 100px 50px 100px",alignContent:"center"}}>
      <h1 style={{textAlign:"center"}}>By Countries</h1>
      <p style={{textAlign:"center"}}>By clicking on the country's name, you can get state / region statistics.</p>
      <table style={tableStyles}>
        <thead>
          <tr>
            <th style={thStyles}>Country</th>
            <th style={thStyles}>Plants</th>
            <th style={thStyles}>Other</th>
            <th style={thStyles}>Uploads</th>
          </tr>
        </thead>
        <tbody>
          {dataWithTotal.map((row, index) => (
            <tr key={index} style={row.country !== 'Total' ? trStyles : totalRowStyles}>
              <td style={tdStyles}>
                {row.country === 'Total' ? (
                  <span style={{color:'black'}}>{row.country}</span>
                ) : (
                  <a
                    href="/"
                    style={aStyles}
                    onMouseOver={(e) => (e.target.style.textDecoration = aHoverStyles.textDecoration)}
                    onMouseOut={(e) => (e.target.style.textDecoration = aStyles.textDecoration)}
                    onClick={() => alert(`You clicked on ${row.country}`)}
                  >
                    {row.country}
                  </a>
                )}
              </td>
              <td style={tdStyles}>{row.plants}</td>
              <td style={tdStyles}>{row.other}</td>
              <td style={tdStyles}>{row.uploads}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InteractiveTable;

