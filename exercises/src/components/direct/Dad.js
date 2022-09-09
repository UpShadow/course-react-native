import React from 'react'
import { Text } from 'react-native'
import Style from './style'

import Son from './Son'

export default props => {
    let x = 13
    let y = 100
    return (
        <>
            <Son a={x} b={y}/>
            <Son a={x + 100} b={y + 200}/>
        </>
    )
}