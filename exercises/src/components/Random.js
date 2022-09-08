import React from "react"
import { Text } from "react-native"
import Style from "./style"

export default ({min, max}) => {
    //const { min, max } = values
    const delta = max - min + 1
    const random = parseInt(Math.random() * delta) + min
    return (
        <Text style={Style.fontB}>
            The past values were {min} and {max}.
            The random value is: { random }
        </Text>
    )
}