import React from "react";
import { Text, StyleSheet } from "react-native";
import estilo from "./estilo"

export default function Comp() {
    return <Text style={estilo.estilo}>Comp #Oficial</Text>;
}

function Comp1() {
    return <Text style={estilo.estilo}>Comp #01</Text>;
}

function Comp2() {
    return <Text style={estilo.estilo}>Comp #02</Text>;
}

export { Comp1, Comp2 };

