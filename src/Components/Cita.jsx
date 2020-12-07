import React, {Fragment} from 'react';

const Cita = ({ cita }) => {
    return(
        <Fragment>
            <h1>{cita.author}</h1>
            <p>-{cita.quote}</p>
        </Fragment>
    );
}

export default Cita;