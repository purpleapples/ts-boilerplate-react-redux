import React from 'react'
// 1. filtering - creating datalist from database
// 2. hiding column
// 3. fixing thead
// columnInfo
// - upper rows<list:object> : index, col size
// - filter rows<list:object> : 
//   - name, create datalist url, column data type, index, col width

const TableFilter = ({columnsInfo}) => {


    return (
        <>
        <thead><tr><th>123</th></tr>
            {/* for (let i = 0; i < columnsInfo.length; i++){
                <tr key={0}>
                    <th></th>
                </tr>
            } */}
        </thead>
        </>
    )
}

export default TableFilter;
