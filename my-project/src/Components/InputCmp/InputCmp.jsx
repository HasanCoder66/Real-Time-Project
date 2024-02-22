import  React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function InputCmp({type , label}) {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div className='bg-[#34afa9]'>
        <TextField
          id="outlined-password-input"
          label={label}
        //   label=""
          type={type}
          autoComplete="current-password"
        />
        
      </div>
    </Box>
  );
}