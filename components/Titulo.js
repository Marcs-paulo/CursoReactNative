import React from 'react'
import { Text } from 'react-native'
import estilo from './estilo'


export default props => (
    <>
        <Text style={estilo.estilo}>{props.principal}</Text>
        <Text>{props.secundaria}</Text>
    </>
)