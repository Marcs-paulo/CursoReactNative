import React from 'react'
import { View, Button, StyleSheet } from 'react-native'


export default props => {
    return (
        <View style={styles.Botoes}>
            <Button title="+" onPress={props.inc}/>
            <Button title="-" onPress={props.dec}/>
        </View>
    )
}

const  styles = StyleSheet.create({
    Botoes: {
        flexDirection: "row",
        
    }
})