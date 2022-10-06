/**
 * Ejemplo props
 
function Hola(props) {
    return <h1>Hola, {props.nombre}</h1>
}
const e = <Hola nombre="Keneth"/>



class HolaClass extends React.Component{
    render() {
        return <h1>Hola, {this.props.nombre}</h1>
    }
}
const ec = <HolaClass nombre="Keneth" />

 */
import React, { useState } from 'react';
import SecurityContext from './SecurityContext';

const SecurityProvider = (props) => {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <SecurityContext.Provider value={
            {
                login: (username, password) => {
                    // Llamar API de Autenticación
                    if (username === 'fred' && password === 'pwd') {
                        setLoggedIn(true);
                    }
                },
                logout: () => setLoggedIn(false), loggedIn
            }
        } >
            {props.children}
        </SecurityContext.Provider>
    )
}

export default SecurityProvider;

