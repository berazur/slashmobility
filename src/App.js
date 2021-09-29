import React, { Fragment, useState } from 'react';
import Cabecera from './componentes/Cabecera'
import Formulario from './componentes/Formulario';
import Grid from '@mui/material/Grid';
import Mapa from './componentes/Mapa';


function App() {

  // State del formulario
  const [perfil, guardarPerfil] = useState({
    username: '',
    email: '',
    gender:'male',
    bio:''
});

  return (
    <Fragment>
      <Cabecera />
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}  style={{ background: '#f1f1f1'}} >
      <Grid item xs={6} marginTop={3} marginBottom={30} padding={5} display= "flex" justifyContent="center">
      <Formulario 
              perfil={perfil}
              guardarPerfil={guardarPerfil}
            />
      </Grid>
      <Grid item xs={6} marginTop={3} padding={5} display= "flex" justifyContent="center">
        <Mapa />
      </Grid>
    </Grid>
    </Fragment>
  );
}

export default App;
