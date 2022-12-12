import React from "react";
import {useTable, useFilters} from 'react-table';
import {matchSorterFn} from  '../func/etc';
const filterTypes = React.useMemo(
    () => ({
      rankedMatchSorter: matchSorterFn
    }),
    []
  );
const DefaultTable = ({columns, data}) => {
    const tabledData = React.useMemo(()=> data, [data]);
    const tableColumns = React.useMemo(()=> columns, [columns]);
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, getGlobalFilter } =
    useTable({ tableColumns, tabledData, filterTypes }, useFilters);

    return (
        <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  {column.render("Header")}
                  {/* Render the columns filter UI */}
                  <div>{column.canFilter ? column.render("Filter") : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      );
    }
export default DefaultTable;