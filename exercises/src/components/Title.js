import React from "react"
import { Text } from "react-native"
import Style from "./style"

export default props => (
    <>
        <Text style={Style.fontB}>{props.main}</Text>
        <Text>{props.secondary}</Text>
    </>
)

