import React from "react"
import { View, Text } from "react-native"
import Style from "./style"

export default ({min, max}) => {
    //const { min, max } = values
    const delta = max - min + 1
    const random = parseInt(Math.random() * delta) + min
    return (
        <View>
        <Text style={Style.fontB}>
            The past values were {min} and {max}.
        </Text>
        <Text style={Style.fontB}>
            The random value is: { random }
        </Text>
        </View>
    )
}