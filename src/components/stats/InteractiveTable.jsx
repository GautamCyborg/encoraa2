import React from 'react';

const CountryTable = ({ data }) => {
  // Function to calculate totals
  const calculateTotals = (data) => {
    let totalPlants = 0;
    let totalOther = 0;
    let totalUploads = 0;
    data.forEach(row => {
      totalPlants += row.plants;
      totalOther += row.other;
      totalUploads += row.uploads;
    });
    return { country: 'Total', plants: totalPlants, other: totalOther, uploads: totalUploads };
  };

  // Add the total row to the data
  const totalRow = calculateTotals(data);
  const dataWithTotal = [...data, totalRow];

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
    <div>
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
                    href="#"
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

export default CountryTable;
