import React, { useEffect, useState } from "react"
import {
    View,
    StyleSheet,
    Text,
    FlatList,
    ActivityIndicator
} from "react-native"
import Colors from "../styles/colors"
import Fonts from "../styles/fonts"
import { Header } from "../components/Header"
import { EnviromentButton } from "../components/EnviromentButton"
import { PlantCardPrimary } from "../components/PlantCardPrimary"
import {Load} from "../components/Load"
import api from "../services/Api"

interface EnvironmentProps {
    key: string;
    title: string;
}

interface PlantProps {
    id: string;
    name: string;
    about: string;
    water_tips: string;
    photo: string;
    environments: [string];
    frequency: {
        times: number;
        repeat_every: string;
    }
}

export function PlantSelect() {

    const [environment, setEnvironment] = useState<EnvironmentProps[]>()
    const [plants, setPlants] = useState<PlantProps[]>()
    const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>()
    const [enviromentSelected, setEnviromentSelected] = useState("all")
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [loadingMore, setLoadingMore] = useState(false)
    const [loadedAll, setLoadedAll] = useState(false)

    function handleEnviromentSelected(environment: string){
        setEnviromentSelected(environment)

        if(environment == "all")
            return setFilteredPlants(plants)

        const filtered = plants.filter(plant => 
            plant.environments.includes(environment)
        )

        setFilteredPlants(filtered)
        
    }

    async function fetchPlants() {
        const { data } = await api.get(`plants?_sort=name&_order=asc&_page=${page}&_limit=8`)
        
        if(!data) return setLoading(true)
        if(page> 1) {
            setPlants(oldValue => [...oldValue, ...data])
            setFilteredPlants(oldValue => [...oldValue, ...data])
        }else{
            setPlants(data)
            setFilteredPlants(data)
        }

        setLoading(false)
        setLoadingMore(false)
    }

    useEffect(() => {
        async function fetchEnviroment() {
            const { data } = await api
            .get("plants_environments?_sort=title&_order=asc")


            setEnvironment([{
                key: "all",
                title: "Todos"
            },
            ...data])
        }
        fetchEnviroment()
    }, [])

    useEffect(() => {
        fetchPlants()
    }, [])

    function handleFetchMore(distance: number){
        if(distance < 1) return
        setLoadingMore(true)
        setPage(oldValue => oldValue + 1)
        fetchPlants()
    } 

    if(loading)
        return <Load />
    return (
        <View style={styles.container}>
            <View style={styles.header}>


                <Header />
                <Text style={styles.title}>Em qual ambiente</Text>
                <Text style={styles.subtitle}>Você quer colocar sua planta?</Text>
            </View>

            <View>
                <FlatList
                    data={environment}
                    renderItem={({ item }) => (
                        <EnviromentButton
                            title={item.title} 
                            active={item.key == enviromentSelected}
                            onPress={() => handleEnviromentSelected(item.key)}
                        />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.enviromentList}
                >

                </FlatList>
            </View>
            <View style={styles.plants}>
                <FlatList
                    data={filteredPlants}
                    renderItem={({ item }) => (
                        <PlantCardPrimary data={item} />
                    )}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    onEndReachedThreshold={0.1}
                    onEndReached={({distanceFromEnd}) => handleFetchMore(distanceFromEnd)}
                    listFooterComponent={
                        loadingMore ?
                        <ActivityIndicator color={Colors.green} /> : <></>
                    }
                >

                </FlatList>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background
    },
    header: {
        paddingHorizontal: 30
    },
    title: {
        fontSize: 17,
        color: Colors.heading,
        fontFamily: Fonts.heading,
        lineHeight: 20,
        marginTop: 15
    },
    subtitle: {
        fontFamily: Fonts.text,
        fontSize: 17,
        lineHeight: 20,
        color: Colors.heading
    },
    enviromentList: {
        height: 40,
        justifyContent: "center",
        paddingBottom: 5,
        marginLeft: 32,
        marginVertical: 32
    },
    plants: {
        flex: 1,
        paddingHorizontal: 32,
        justifyContent: "center"
    },

})