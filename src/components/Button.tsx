import React from "react"
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    TouchableOpacityProps
} from "react-native"
import Colors from "../styles/colors"
import Fonts from "../styles/fonts"

interface ButtonProps extends TouchableOpacityProps{
    title: string;
}

export function Button({title, ...rest} : ButtonProps){
    return (
        <TouchableOpacity 
            style={styles.container}
            {...rest}
        >
            <Text style={styles.text}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.green,
        height: 56,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 16,
        color: Colors.white,
        fontFamily: Fonts.heading
    }
})