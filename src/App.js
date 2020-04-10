import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import Formulario from './components/Formulario';

function App() {
  const [busquedaLetra, setBusquedaLetra] = useState({});
  const [letra, setLetra] = useState('');

  useEffect(() => {
    if (Object.keys(busquedaLetra).length === 0) return;
    const consultarAPILetra = async () => {
      const { artista, cancion } = busquedaLetra;
      const url= `https://api.lyrics.ovh/v1/${artista}/${cancion}`;

      const resultado = await axios(url);

      setLetra(resultado.data.lyrics);
    };
    consultarAPILetra();
  }, [busquedaLetra]);
  return (
    <Fragment>
      <Formulario
        setBusquedaLetra={setBusquedaLetra}
      />
    </Fragment>
  );
}

export default App;
