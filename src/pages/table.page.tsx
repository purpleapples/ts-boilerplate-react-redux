import { Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { object, string, TypeOf } from 'zod';

import React from 'react';
import { LoadingButton as _LoadingButton } from '@mui/lab';
import React from 'react';


const LoadingButton = styled(_LoadingButton)`
  padding: 0.6rem 0;
  background-color: #f9d13e;
  color: #2363eb;
  font-weight: 500;
  &:hover {
    background-color: #ebc22c;
    transform: translateY(-2px);
  }
`;

const loginSchema = object({
  email: string()
    .min(1, 'Email address is required')
    .email('Email Address is invalid'),
  password: string()
    .min(1, 'Password is required')
    .min(8, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),
});

export type LoginInput = TypeOf<typeof loginSchema>;

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
        }}
      >        
      <table>
        <thead>
          <tr>
            <th>col1</th>
            <th>col2</th>
          </tr>          
        </thead>
        <tbody>
          <tr>
            <td>td1</td>
            <td>td2</td>
          </tr>
        </tbody>
      </table>
        
      </Box>
    </Container>
  );
};

export default TablePage;