import React from "react";
import { Text } from "react-native"
import Style from "./style";

export default function Comp() {
    return <Text style={Style.fontB}>Comp #Official</Text>
}

export function Comp1() {
    return <Text style={Style.fontB}>Comp #01</Text>
}

export function Comp2() {
    return <Text style={Style.fontB}>Comp #02</Text>
}
