import React from 'react';
import TableFilter from './TableFilter';
// table funciton list
// 1. ordering
// 2. paging
// 3. overflow-x
// 4. check row
// 5. input row
// 6. update function
// initial setting : pk, visible attributes, hidden attributes setting


const CustomTable = (tableInitData, TableFilter) => {
    // prerequisite
    // visiableAttributes index
    // pk     
    // columnsInfo
    // page
    
    const {columnsInfo, visiableAttributes, hiddenAttributes, pk, page, isInput} =  tableInitData;    

    return
    <>
        <table>
            <TableFilter />
            <tbody>     
                for (let i=0; i<tableInitData.length; i++){
                    <td></td>
                }
                
            </tbody>
        </table>
    </>
}