import { Box, Container } from '@mui/material';
import React from 'react';
import { LoadingButton as _LoadingButton } from '@mui/lab';
import CustomTable from '../components/CustomTable';
import { ItableData, ItableRowstatus } from '../types/types';


let data = new Array<object>();
let columnsInfo = new Array<object>();
let visiableAttributes= new Array<ItableRowstatus>();
let hiddenAttributes = new Array<object>();
let page = 1;
let isInput = false;
const tableInitData:ItableData = {
  data: data,
  columnsInfo: columnsInfo,
  visiableAttributes: visiableAttributes,
  hiddenAttributes: hiddenAttributes,
  page: page,
  isInput: isInput,
}
const TablePage = () => {
  
  return (
    <Container
      maxWidth={false}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        
        
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          background:'yellow',
        }}
      >
      <CustomTable tableInitData={tableInitData} TableFilter={null} />
        
      </Box>
    </Container>
  );
};

export default TablePage;