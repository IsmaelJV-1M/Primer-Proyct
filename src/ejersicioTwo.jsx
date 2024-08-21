import React, { useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';


const EjersicioTwo = () => {

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const [date, setDate] = useState ({
        nombre: '',
        apellido: '',
        age: '',
    })

    const archivar = (e) => {
        const name = e.target.name;
        const list = e.target.value;
        setDate({
            ...date,
            [name] : list 
        })
    }

    const guardarDate = () => {
        console.log(date);
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
        value={date.nombre}
        onChange={archivar}
        name='nombre'
      />

<TextField 
    id="outlined-basic" 
    label="Outlined" 
    variant="outlined" 
    value={date.apellido}
    onChange={archivar}
    name='apellido'
/>

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={date.age}
          label="Age"
          name='age'
          onChange={archivar}
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
          onChange={archivar}
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

export default EjersicioTwo