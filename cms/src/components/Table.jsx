"use client";

const Table = ({ data }) => {
  let users = data || null;
  const headers = Object.keys(data[0]).filter((header) => header !== "id");

  return (
    <div>
      {users ? (
        <table className="table">
          <thead>
            <tr>
              <th>No</th>
              {headers.map((header, index) => (
                <th key={index}>
                  {header.charAt(0).toUpperCase() + header.slice(1)}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.map((item, rowIndex) => (
              <tr key={rowIndex}>
                <td>{rowIndex + 1}</td>
                {headers.map((header, colIndex) => (
                  <td key={colIndex}>{item[header]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
    </div>
  );
};

export default Table;
