import React from "react"
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View
} from "react-native"
import Colors from "../styles/colors"
import Fonts from "../styles/fonts"
import { Button } from "../components/Button"

export function Confirmation() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.emoji}>
                    😄
                </Text>
                <Text style={styles.title}>
                    Prontinho
                </Text>
                <Text style={styles.subTitle}>
                    Vamos começar a cuidar das suas plantinhas com muito cuidado.
                </Text>
                <View style={styles.footer}>
                    <Button title="Começar"/>
                </View>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around"
    },
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: 30
    },
    title: {
        fontSize: 22,
        fontFamily: Fonts.heading,
        textAlign: "center",
        color: Colors.heading,
        lineHeight: 38,
        marginTop: 15
    },
    subTitle: {
        fontFamily: Fonts.text,
        textAlign: "center",
        fontSize: 17,
        paddingVertical: 10,
        color: Colors.heading,
        
    },
    emoji: {
        fontSize: 78,
    },
    footer: {
        width: "100%",
        paddingHorizontal: 50,
        marginTop: 20
    }
})