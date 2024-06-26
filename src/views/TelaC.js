import React from 'react';
import TextoCentral from '../components/TextoCentral';

export default props => {

    const route = props.route && props.route.params && props.route.params.numero ?
    props.route.params.numero : {params: {numero: 0}}

    return (
    <TextoCentral corFundo="#9932cd">
        Tela C - {route.params.numero}
    </TextoCentral> 
    )
    
}