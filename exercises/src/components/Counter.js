import React, { useState } from "react"
import { Text, Button } from "react-native"
import Style from "./style"

export default ({ initial = 0, step = 1 }) => {
    // let number = props.initial
    const [number, setNumber] = useState(initial)

    const increase = () => setNumber(number + step)
    const decrease = () => setNumber(number - step)

    return (
        <>
            <Text style={Style.fontB}>{ number }</Text>
            <Button title="+" onPress={increase}/>
            <Button title="-"onPress={decrease}/>
        </>
    )
}