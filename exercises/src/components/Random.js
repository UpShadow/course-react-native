import React from "react"
import { Text } from "react-native"
import Style from "./style"

export default values => (
    console.warn(values),
    <Text style={Style.fontB}>
        The past values were {values.num1} and {values.num2}.
        Random value is: { Math.floor(Math.random() * values.num2) + values.num1 }
    </Text>
)