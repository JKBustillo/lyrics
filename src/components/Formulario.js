import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Formulario = ({ setBusquedaLetra }) => {
    const [busqueda, setBusqueda] = useState({
        artista: '',
        cancion: ''
    });
    const [error, setError] = useState(false);

    const { artista, cancion} = busqueda;

    const handleChange = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value});
    };

    const handleSubmit = e => {
        e.preventDefault();

        // Validacion
        if (artista.trim() === '' || cancion.trim() === '') {
            setError(true);
            return;
        }

        setError(false);

        // busqueda to App
        setBusquedaLetra(busqueda)
    };

    return (
        <div className="bg-info">
            { error ? <p className="alert alert-danger text-center p-2">Todos los campos son obligatorios</p> : null }
            <div className="container">
                <div className="row">
                    <form
                        onSubmit={handleSubmit}
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                    >
                        <fieldset>
                            <legend className="text-center">Buscador de letras de canciones</legend>
                            
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artista</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="artista"
                                            placeholder="Nombre del artista"
                                            onChange={handleChange}
                                            value={artista}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Canción</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="cancion"
                                            placeholder="Nombre de la canción"
                                            onChange={handleChange}
                                            value={cancion}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary float-right"
                            >Buscar</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
}

Formulario.propTypes = {
    setBusquedaLetra: PropTypes.func.isRequired,
};

export default Formulario;