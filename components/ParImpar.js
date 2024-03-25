import React from 'react'
import { View, Text, InputAccessoryView, TextInput } from 'react-native'
import estilo  from './estilo'

export default ({num = 0}) => {

    return (
        <View>
            <Text style={estilo.estilo}>O resultado é: </Text>
            {num % 2 === 0
                 ? <Text style={estilo.estilo}>Par</Text>
                 : <Text style={estilo.estilo}>Ímpar</Text>
            }
        </View>
    )
}