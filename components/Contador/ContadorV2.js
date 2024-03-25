import React, {  useState } from 'react';
import { Text } from 'react-native'
import estilo  from '../estilo'
import ContadorDisplay from './ContadorDisplay';
import ContadorBotões from './ContadorBotões';

export default props => {
    const [num, setNum] = useState(0)

    const inc = () => setNum(num  + 1)
    const dec = () => setNum(num  - 1)

    return (
        <>
        <Text style={estilo.estilo}>Contador</Text>
        <ContadorDisplay num={num} />
        <ContadorBotões inc= {inc} dec={dec}/>
        </>
    )
}