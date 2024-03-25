import React from "react"
import { SafeAreaView, StyleSheet } from "react-native"

import ParImpar from "./components/ParImpar"
// import Diferenciar from "./components/Diferenciar"
// import ContadorV2 from "./components/Contador/ContadorV2"
// import Pai from "./components/indireta/Pai"
// import Pai from "./components/direta/Pai"
// import Contador from "./components/Contador"
// import Botao from "./components/Botao"
// import Titulo from "./components/Titulo"
// import Aleatorio from './comp,onents/Aleatorio'
// import MinMax from './components/MinMax'
// import ComPadrao, { Comp1, Comp2 } from './components/Multi'
// import Primeiro from './components/Primeiro'

export default () => 
    <SafeAreaView style={style.App}>
        <ParImpar num= {4} />
        {/* <Aleatorio min={10} max={30}></Aleatorio>
        <Diferenciar />
        <ContadorV2/>
        <Pai />
        <Pai />
        <Contador inicial={100} passo = {13}/>
        <Contador/>
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
    </SafeAreaView>

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
