import React from "react";
import styled from "styled-components";

const TableContainer = styled.table`
  background: var(--secondary);
  color: #fff;
  border-radius: 0.4em;
  overflow: hidden;
  th,
  td {
    font-weight: bold;
    padding: 12px 16px;
  }
  th {
    text-align: left;
    color: var(--contrast);
  }
`;

function Table({ columns, rows, renderTableData = (td) => td }) {
  return (
    <TableContainer>
      <thead>
        <tr>
          {columns.map((column, index) => {
            return <th key={index}>{column.headerName}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => {
          return (
            <tr key={index}>
              {columns.map((column) => {
                const field = column.field;
                return (
                  <td key={field}>
                    {renderTableData(row[field], { field, currentRow: row })}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </TableContainer>
  );
}

export default Table;
