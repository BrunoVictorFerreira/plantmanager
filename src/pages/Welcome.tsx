import React, {useState} from "react"
import {SafeAreaView, Text, StyleSheet, Image, TouchableOpacity} from "react-native"
import wateringImg from "../assets/watering.png"
import Colors from "../styles/colors"
import {Button} from "../components/Button"

export function Welcome (){
    const [visible, setVisible] = useState(false)
    function handleVisibility(){
        setVisible(!visible)
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Gerencie{'\n'} 
                suas plantas {'\n'} 
                de forma fácil
            </Text>
            {
                visible && <Image source={wateringImg} style={styles.image}/>

            }
            <Text style={styles.subtitle}>
                Não esqueça mais de regar ruas plantas.
                Nós cuidamos de lembrar você sempre que precisar.
            </Text>
            <Button title=">" />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between"
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        textAlign: "center",
        color: Colors.heading,
        marginTop: 38
    },
    subtitle: {
        textAlign: "center",
        fontSize: 18,
        paddingHorizontal: 20,
        color: Colors.heading
    },
    image: {
        width: 292,
        height: 284
    }
})