import { ContactSupportOutlined } from '@mui/icons-material';
import React from 'react';
import { ItableData } from '../types/types';
import TableFilter from './TableFilter';
// table funciton list
// 1. ordering
// 2. paging
// 3. overflow-x
// 4. check row
// 5. input row
// 6. update function
// initial setting : pk, visible attributes, hidden attributes setting


// priority
// 1. tbody tr
// 2. tr function
// 3. tr delete
// 4. thead filter
// 5. modal(delete, select, detail, popup)
// 6. link button 

const CustomTable = ({tableInitData, TableFilter}) => {
    // prerequisite
    // visiableAttributes index
    // pk     
    // columnsInfo
    // page
    // filter: useRef
    
    const {columnsInfo, visiableAttributes, hiddenAttributes, page, isInput} =  tableInitData;    
    let trList = new Array();
    if (visiableAttributes != null){
        for (let i=0; i<visiableAttributes.length; i++){
            trList.push(<tr key={i}><td>x</td></tr>);                                
        }                    
        // console.log(trList);
        // console.log(trList[0]);
        // trList[0].appendChild(<input type="hidden" name="pk" value={visiableAttributes[0].pk}/>)
    }
    
    return(
        <>
        <table>
            <TableFilter columnsInfo={columnsInfo}/>
            <tbody>                            
                <tr><td>x</td></tr>     
                {/* {trList.map((tr, index) => tr)} */}
            </tbody>
        </table>
        </>
    )
    
}

export default CustomTable;