import React from "react"
import { View, StyleSheet } from "react-native"

import Contador from "./components/Contador"
// import Botao from "./components/Botao"
// import Titulo from "./components/Titulo"
// import Aleatorio from './comp,onents/Aleatorio'
// import MinMax from './components/MinMax'
// import ComPadrao, { Comp1, Comp2 } from './components/Multi'
// import Primeiro from './components/Primeiro'

export default () => 
    <View style={style.App}>
        <Contador inicial={100} passo = {13}/>
        <Contador/>
        {/* <Aleatorio min={10} max={30}></Aleatorio>
        <Botao/>
        <Titulo principal="Cadastro Porduto"
        secundaria="Tela de Cadastro do Produto"/>
        <Aleatorio min={10} max={30}></Aleatorio>
        <Aleatorio min={10} max={30}></Aleatorio>
        <Aleatorio min={10} max={30}></Aleatorio>
        <Aleatorio min={10} max={30}></Aleatorio>
        <Aleatorio min={10} max={30}></Aleatorio>
        <Aleatorio min={10} max={30}></Aleatorio>
        <Aleatorio min={10} max={30}></Aleatorio>
        <Aleatorio min={50} max={80}></Aleatorio>
        <Aleatorio min={50} max={80}></Aleatorio> */}
        {/* <MinMax min="3" max="20"></MinMax>
        <MinMax min="1" max="94"></MinMax> */

        /* <ComPadrao />
        <Comp1 />
        <Comp2 />
        <Primeiro /> */}
    </View>

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: 'center',
        color: '#ffffff',
        padding: 20,
    },
    text: {
        color: '#ffffff'
    }
})