import React, { useState } from 'react'
import { Box } from '@mui/material'
import ReportUse from './reportUse'
import TextUse from './TextUse'

const BindUse = () => {

  const [rows, setRows] = useState([]);

  const handleAddData = (newData) => {
    setRows([
      ...rows,
      { id: rows.length + 1, ...newData },
    ]);
  };


  return (
    <Box padding={4}>
        <TextUse onAddData={handleAddData}  />
        <Box marginTop={4} />
          < ReportUse rows={rows} />
        <Box />

    </Box>
  );
};

export default BindUse