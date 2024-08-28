import React from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';




const ReportUse = ({rows}) => {

  const columns = [
    { field: 'id', headerName: 'ID', width: 90},
    { field: 'name', headerName: 'name', width: 150 },
    { field: 'apellido', headerName: 'lastName', width: 150 },
    { field: 'age', headerName: 'age', width: 150 },
    { field: 'checked', headerName: 'Accepted', width: 150, type: 'boolean' },
  ];


  return (

    <Box 
      sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />

    </Box>
  );
}



export default ReportUse