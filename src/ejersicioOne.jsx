import React, { useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';


const EjersicioOne = () => {

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const [age, setAge] = useState('');
  const [name, setName] = useState('');
  const [box, setBox] = useState('');

  const declareAge = (e) => {
    setAge(e.target.value);
  }

  const declareName = (e) => {
    setName(e.target.value);
  }

  const declareBox = (e) => {
    setBox(e.target.value);
  }

  const guardarDate = () => {
    console.log('Guardad datos');
    console.log(age);
    console.log(name);
    console.log(box)
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

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
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
          {...label} defaultChecked 
          onChange={declareBox}
      />

      <Button 
        variant="outlined"
        onClick={guardarDate}
      >
          Keep
      </Button>
    </Box>

  )
}

export default EjersicioOne