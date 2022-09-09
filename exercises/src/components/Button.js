import React from "react"
import { Button } from 'react-native'

export default props => {
    function run() {
        console.warn("running #01!!!")
    }
    return (
        <>
            <Button 
                title="Run #01!" 
                onPress={ run }
            />
            <Button 
                title="Run #02!" 
                onPress={ function() {
                    console.warn( "running #02!!!")
                }}  
            />
            <Button 
                title="Run #03!" 
                onPress={ () => console.warn( "running #03!!!")}
            />
        </>
    )
}