import  { React, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import ImagenUsuario from './ImagenUsuario';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function Formulario({perfil, guardarPerfil}) {

    const [usernameError, setUsernameError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    // extraer perfil de usuario
    const { username, email, gender, bio} = perfil;

    //Función que coloca los elementos en el state
    const handleChange = e => {
        // actualizar el state
        guardarPerfil({
            ...perfil,
            [e.target.name] : e.target.value
        });
    }

    // Cuando el usuario da submit al form
    const handleSubmit = e => {
        e.preventDefault();

        // Validar los campos del formulario
        // Validar Email
        var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        var esValido =expReg.test(email)

        if (email.trim() === '' || !esValido ) {
            setEmailError(true)
        } else setEmailError(false)
    
        
        // Validar Username:
        if(username.trim() === '') {
          setUsernameError(true);
            return;
        } else setUsernameError(false);

       

    }
  return (
    <Card sx={{ maxWidth: 500, margin:'2rem', padding: '2rem'}} alignItems="center">
      <CardContent>
      <ImagenUsuario />

      <form
            onSubmit={handleSubmit}
        > 
        <Grid container spacing={2} >
        <Grid item xs={6} padding={2}>
            <TextField 
                fullWidth
                required
                error={usernameError}
                helperText={usernameError ? 'Username is required' : ''}
                name="username"
                id="username"
                value={username}
                onChange={handleChange}
                label="Username"
                variant="standard" />
        </Grid>
        <Grid item xs={6} padding={2}>
            <TextField 
                fullWidth
                required
                error={emailError}
                helperText={emailError ? 'Email format is incorrect' : ''}
                name="email"
                id="email"
                value={email}
                onChange={handleChange}
                label="Email"
                variant="standard" />
        </Grid>
        <Grid item xs={6} spacing={2}>
        <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                    row
                    aria-label="gender"
                    name="gender"
                    id="gender"
                    value={gender}
                    onChange={handleChange}
                 >
                <FormControlLabel 
                    control={
                    <Radio
                        value="female"
                    />} 
                    label="Female" 
                />
                <FormControlLabel 
                control={
                    <Radio
                        value="male"
                    />} 
                    label="Male" 
                />
                </RadioGroup>
            </FormControl>
            </Grid>
            <Grid item xs={12} padding={2}>
            <TextField 
                fullWidth
                name="bio"
                id="bio"
                value={bio}
                onChange={handleChange}
                label="Bio"
                variant="standard" />
        </Grid>
            </Grid>
    
    </form>
    
      </CardContent>
      <CardActions style={{display: 'flex', justifyContent: 'right'}}>
        <Button
          disableElevation
          type="submit"
          variant="contained"
          onClick={handleSubmit}
          >
            SAVE
          </Button>
      </CardActions>
    </Card>
  );
}