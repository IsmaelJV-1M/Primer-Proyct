import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';


const label = { inputProps:{ 'aria-label': 'Checkbox demo' },};


const EjersicioOne = () => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [lastName, setLast] = useState('');
    const [iseChecked, setIseChecked] = useState(false);

    const declareName = (e) => {
        setName(e.target.value);
  }

    const declareLast = (e) => {
      setLast(e.target.value);
  }

    const declareAge = (e) => {
        setAge(e.target.value);
  }

    const declareBox = (e) => {
        setIseChecked(e.target.checked);
  }

    const guardarData = () => {
      setName('');
      setLast('');
      setAge('');
  }

  return (
    <Box 
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <TextField
        id="standard-basic" 
        label="Standard" 
        variant="standard"
        value={name}
        onChange={declareName}
        name='name'
    />

    <TextField
        id="standard-basic" 
        label="Standard" 
        variant="standard"
        value={lastName}
        onChange={declareLast}
        name='Last name'
    />

    <FormControl fullWidth>
    <InputLabel id="demo-simple-select-label">Age</InputLabel>
    <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          name='age'
          onChange={declareAge}
    >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
          <MenuItem value={40}>Forty</MenuItem>
          <MenuItem value={50}>Fifty</MenuItem>
        </Select>
    </FormControl>

    <Checkbox
          {...label}
          checked={iseChecked}
          onChange={declareBox}
    />

    <Button 
        variant="outlined"
        onClick={guardarData}
    >
          Keep
    </Button>


    </Box>
  )
}

export default EjersicioOne