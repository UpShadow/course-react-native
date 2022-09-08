import React from 'react'
import { View, StyleSheet } from 'react-native'

import CompStandard, { Comp1, Comp2 } from './components/Multi'
import First from './components/First'

export default () => (
    <View style={style.App}>
        <CompStandard />
        <Comp1 />
        <Comp2 />
        <First />
    </View>
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})