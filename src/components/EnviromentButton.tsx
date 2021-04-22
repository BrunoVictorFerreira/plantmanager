import React from "react"
import { StyleSheet, Text } from "react-native";
import {RectButton, RectButtonProps} from "react-native-gesture-handler"

import Colors from "../styles/colors"
import Fonts from "../styles/fonts"

interface EnviromentButtonProps extends RectButtonProps{
    title: string;
    active?: boolean;
}

export function EnviromentButton({title, active = false, ...rest} : EnviromentButtonProps){
    return (
        <RectButton style={[styles.container, active && styles.containerActive]} {...rest}>
            <Text style={[styles.text, active && styles.textActive]}>
                {title}
            </Text>
        </RectButton>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.shape,
        height: 40,
        width: 76,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12,
        marginHorizontal: 5
    },
    containerActive: {
        backgroundColor: Colors.green_light
    },
    text: {
        color: Colors.heading,
        fontFamily: Fonts.text
    },
    textActive: {
        fontFamily: Fonts.heading,
        color: Colors.green_dark,
    }
})