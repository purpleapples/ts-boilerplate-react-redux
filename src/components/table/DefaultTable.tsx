import React, {useMemo} from "react";
import style from './table.module.css';
import {useTable, useFilters, TableInstance, UsePaginationInstanceProps, UseSortByInstanceProps, UsePaginationState} from 'react-table';
import {matchSorterFn} from  '../../func/etc';

  export type TableInstanceWithHooks<T extends object> = TableInstance<T> &
        UsePaginationInstanceProps<T> &
        UseSortByInstanceProps<T> & {
          state: UsePaginationState<T>;
      };
  const DefaultTable = ({columns, data}) => {
    const filterTypes = useMemo(
      () => ({
        rankedMatchSorter: matchSorterFn
      }),
      []
    );
    const tabledData = useMemo(()=> data, [data]);
    const tableColumns = useMemo(()=> columns, [columns]);    


const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });    
    
    return (
        <table {...getTableProps()} className={style.defaultTable}>
        <thead >
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              { headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  {column.render("Header")}
                  {/* Render the columns filter UI */}
                  {/* <div>{column.canFilter ? column.render("Filter") : null}</div> */}
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