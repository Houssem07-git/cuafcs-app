import React from 'react'
import { TextField, InputAdornment, Grid, IconButton } from '@material-ui/core'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import './style.css'

function Input({half, name, handleChange, type, label, value, autoFocus, handleShowPassword}) {
  return (
    <div className='Input'>
        <Grid item xs={12} sm={half? 6 : 12}>
            <TextField
                name={name}
                onChange={handleChange}
                variant='outlined'
                value={value}
                required
                fullWidth
                label={label}
                autoFocus={autoFocus}
                type={type}
                InputProps={name === 'password' && {
                    endAdornment: (
                        <InputAdornment position='end'>
                            <IconButton onClick={handleShowPassword}>
                                {type === 'password' ? <VisibilityIcon/> : <VisibilityOffIcon/>}
                            </IconButton>
                        </InputAdornment>
                    )
                }}
            />
        </Grid>
    </div>
  )
}

export default Input