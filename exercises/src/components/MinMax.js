import React from "react"
import { Text } from "react-native"
import Style from "./style"

export default param => (
    <Text style={Style.fontB}>
        O valor {param.max} é maior que o valor {param.min}!
    </Text>
)