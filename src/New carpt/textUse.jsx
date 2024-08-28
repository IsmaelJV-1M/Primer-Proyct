import React, { useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const TextUse = ({onAddData}) => {

    const reiniciarSelect = {
        name: '',
        apellido: '',
        age: '',
        checked: false
    }

    const [date, setDate] = useState(reiniciarSelect)


    const handleChange  = (e) => {
      const { name, value } = e.target;
      setDate({
        ...date,
        [name]: value,
      });
    };

    const handleCheckboxChange = (e) => {
      setDate({
        ...date,
        checked: e.target.checked,
      });
    };

    const handleSubmit = () => {
      console.log('Form Data:', date);
      onAddData(date);
      setDate({
        name: '',

        option: '',
        checked: false,
      });

      setDate(reiniciarSelect);
    };

    

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
        label="Standard" 
        variant="standard"
        value={date.name}
        onChange={handleChange}
        name='name'
        fullWidth
      />

      <TextField 
        label="Outlined" 
        variant="outlined" 
        value={date.apellido}
        onChange={handleChange}
        name='apellido'
        fullWidth
     />

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          value={date.age}
          name='age'
          onChange={handleChange}
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
          onChange={handleCheckboxChange}
      />

      <Button 
        variant="contained"
        onClick={handleSubmit}
      >
          Keep
      </Button>

    </Box>

  )
}

export default TextUse
