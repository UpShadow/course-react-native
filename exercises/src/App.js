import React from 'react'
import { View } from 'react-native'

import CompStandard, { Comp1, Comp2 } from './components/Multi'
import First from './components/First'

export default () => (
    <View>
        <CompStandard />
        <Comp1 />
        <Comp2 />
        <First />
    </View>
)

