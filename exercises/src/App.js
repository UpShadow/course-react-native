import React from 'react'
import { View, StyleSheet } from 'react-native'

import Dad from './components/direct/Dad'
// import Counter from './components/Counter'
//import Button from './components/Button'
//import Title from './components/Title'
//import Random from './components/Random'
//import MinMax from './components/MinMax'
// import CompStandard, { Comp1, Comp2 } from './components/Multi'
// import First from './components/First'

//passed parameters in {} is a number and in "" is a string
export default () => (
    <View style={style.App}>
        <Dad />
        {/*
        <Counter initial={100} step={13}/>
        <Counter/>
        <Button />
        <Random min={1} max={10}/>
        <Title main="Registration Product" secondary="Product Registration Screen"/>
        <MinMax min={3} max={20}/>
        <MinMax min={1} max={94}/>
        <CompStandard />
        <Comp1 />
        <Comp2 />
        <First /> */}
    </View>
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    }
})