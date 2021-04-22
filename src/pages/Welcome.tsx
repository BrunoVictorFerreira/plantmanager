import React from "react"
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions
} from "react-native"
import Fonts from "../styles/fonts"
import Icon from "react-native-vector-icons/Feather"
import wateringImg from "../assets/watering.png"
import Colors from "../styles/colors"
import {useNavigation} from "@react-navigation/core"

export function Welcome() {
    const navigation = useNavigation()

    function handleStart(){
        navigation.navigate("UserIdentification")
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>


                <Text style={styles.title}>
                    Gerencie{'\n'}
                suas plantas de {'\n'}
                forma fácil
            </Text>

                <Image
                    source={wateringImg}
                    style={styles.image}
                    resizeMode="contain"
                />


                <Text style={styles.subtitle}>
                    Não esqueça mais de regar ruas plantas.
                    Nós cuidamos de lembrar você sempre que precisar.
            </Text>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.button}
                    onPress={handleStart}
                >
                    <Icon name="chevron-right" style={styles.buttonIcon} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    wrapper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 32,
        textAlign: "center",
        color: Colors.heading,
        marginTop: 38,
        fontFamily: Fonts.heading,
        lineHeight: 34
    },
    subtitle: {
        textAlign: "center",
        fontSize: 18,
        paddingHorizontal: 20,
        color: Colors.heading,
        fontFamily: Fonts.text
    },
    image: {
        height: Dimensions.get("window").width * 0.7
    },
    button: {
        backgroundColor: Colors.green,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56,
    },
    buttonIcon: {
        fontSize: 32,
        color: Colors.white
    },
})