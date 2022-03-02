import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { scale } from 'react-native-size-matters'
import { appColors } from '../../utils/appColors'
import TouchableRipple from 'react-native-touch-ripple'
import Label from '../Label'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'; 
export default function index({label,style,onPress,labelStyle, iconProps}) {
    return (
        <TouchableRipple rippleColor={appColors.white} onPress={onPress} rippleDuration={800} style={[styles.container,style]}> 
           {iconProps? <MaterialIcons  {...iconProps}/>
           :
            <Label text={`${label}`.toUpperCase()} style={[styles.label,labelStyle]}/>}
        </TouchableRipple>
    )
}

const styles = StyleSheet.create({
    container:{
        height:scale(50),
        backgroundColor:appColors.btn,
        borderRadius:scale(5),
        justifyContent:"center",
        alignItems:"center",
        overflow:"hidden",
        //marginVertical:scale(10)
    },
    label:{
        fontSize:scale(12), 
        color:appColors.white
    }
})
