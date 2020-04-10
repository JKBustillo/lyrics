import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import Formulario from './components/Formulario';
import Cancion from './components/Cancion';
import Info from './components/Info';

function App() {
  const [busquedaLetra, setBusquedaLetra] = useState({});
  const [letra, setLetra] = useState('');
  const [info, setInfo] = useState({});

  useEffect(() => {
    if (Object.keys(busquedaLetra).length === 0) return;
    const consultarAPILetra = async () => {
      const { artista, cancion } = busquedaLetra;
      const url= `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

      const [letra, informacion] = await Promise.all([
        axios(url),
        axios(url2)
      ]);

      setInfo(informacion.data.artists[0]);
      setLetra(letra.data.lyrics);
    };
    consultarAPILetra();
  }, [busquedaLetra, info]);
  return (
    <Fragment>
      <Formulario
        setBusquedaLetra={setBusquedaLetra}
      />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            { Object.keys(info).length ? <Info info={info} /> :null }
          </div>
          <div className="col-md-6">
            { letra ? <Cancion letra={letra}/> : null }
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
