import { View, ActivityIndicator, Text, ScrollView, StyleSheet, FlatList, SafeAreaView, Image, TextInput, TouchableOpacity, Button } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { LogoUser, IconFilter, IconBrilho, IconUser, IconMala, Local1 } from '../assets';
import MenuContainer from '../components/MenuContainer';
import ItemCardContainer from '../components/ItemCardContainer';
//import { getData } from '../api';
import DetailsTourScreen from "../screens/DetailsTourScreen";

const HomeScreen = () => {

    const navigation = useNavigation();

    const data1 = ['1', '2', '3', '4', '5', '6'];

    const [type, setType] = useState("sujestão");
    const [isLoading, setIsLoading] = useState(false);
    const [bool, setBool] = useState(true);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);


    return bool ? <DetailsTourScreen /> : (
        <SafeAreaView className=" bg-white flex-1">
            <View className=" flex-row items-center justify-center mt-10 mb-2">
                <Image
                    source={LogoUser}
                    className="w-6 h-6 object-cover"
                />
                <TextInput
                    className="
                    w-60
                    flex-row items-center
                    bg-[#EEEFF0] mx-4
                    rounded-xl py-1
                    px4 shadow-lg"
                />
                <Image
                    source={IconFilter}
                    className="w-4 h-4 object-cover"
                />
            </View>

            {/* Menu container */}
            {isLoading ?
                <View className="flex-1 items-center justify-center">
                    <ActivityIndicator size="large" color="#406d87" />
                </View>
                : (
                    <ScrollView>
                        <View className="flex-row items-center justify-around mt-4">
                            <MenuContainer
                                key={"sujestao"}
                                title="Sujestão"
                                imageSrc={IconBrilho}
                                type={type}
                                setType={setType}
                            />
                            <MenuContainer
                                key={"popular"}
                                title="Popular"
                                imageSrc={IconUser}
                                type={type}
                                setType={setType}
                            />
                            <MenuContainer
                                key={"agencias"}
                                title="Agências"
                                imageSrc={IconMala}
                                type={type}
                                setType={setType}
                            />
                        </View>

                        {/* -------------------- Pontos Turísticos ------------------------- */}
                        <View className="mt-6">
                            <View className="flex-row justify-between mx-4">
                                <Text
                                    className="text-[#393F4E] font-semibold text-lg"
                                >Pontos Turísticos</Text>
                                <TouchableOpacity>
                                    <Text
                                        className="text-[#277AFF]"
                                    >{'Ver mais'}</Text>
                                </TouchableOpacity>
                            </View>
                            <FlatList
                                className="-mx-4"
                                data={data1}
                                keyExtractor={(item) => String(item)}
                                showsHorizontalScrollIndicator={false}
                                horizontal
                                renderItem={({ item }) => {
                                    return <View
                                        style={styles.shadow}>
                                        <ItemCardContainer
                                            onPressItem={(item) => navigation.navigate('DetailsTourScreen', { item })}
                                            key={item} id={item} imageSrc={Local1} title="Testeeee" stars="4,5" location="Av. Pres. Gentúlio Vargas Novo Airão" />
                                    </View>
                                }}
                            >
                            </FlatList>

                        </View>

                        {/* -------------------- Hotéis ------------------------- */}
                        <View className="mt-6">
                            <View className="flex-row justify-between mx-4">
                                <Text
                                    className="text-[#393F4E] font-semibold text-lg"
                                >Hotéis</Text>
                                <TouchableOpacity>
                                    <Text
                                        className="text-[#277AFF]"
                                    >{'Ver main >'}</Text>
                                </TouchableOpacity>
                            </View>
                            <View
                                className="px-4 mt-4 flex-row items-center justify-evenly flex-wrap"
                            >
                                <FlatList
                                    className="-mx-4"
                                    data={data1}
                                    keyExtractor={(item) => String(item)}
                                    showsHorizontalScrollIndicator={false}
                                    horizontal
                                    renderItem={({ item }) => {
                                        return <View
                                            style={styles.shadow}>
                                            <ItemCardContainer
                                                key={item} imageSrc={Local1} title="Anavilhanas Jungle Lodge" stars="4,5" location="Av. Pres. Gentúlio Vargas Novo Airão" />
                                        </View>
                                    }}
                                >
                                </FlatList>
                            </View>
                        </View>

                        {/* -------------------- Festivais ------------------------- */}
                        <View className="mt-6">
                            <View className="flex-row justify-between mx-4">
                                <Text
                                    className="text-[#393F4E] font-semibold text-lg"
                                >Festivais</Text>
                                <TouchableOpacity>
                                    <Text
                                        className="text-[#277AFF]"
                                    >{'Ver main >'}</Text>
                                </TouchableOpacity>
                            </View>
                            <View
                                className="px-4 mt-4 flex-row items-center justify-evenly flex-wrap"
                            >
                                <FlatList
                                    className="-mx-4"
                                    data={data1}
                                    keyExtractor={(item) => String(item)}
                                    showsHorizontalScrollIndicator={false}
                                    horizontal
                                    renderItem={({ item }) => {
                                        return <View
                                            style={styles.shadow}>
                                            <ItemCardContainer
                                                key={item} imageSrc={Local1} title="Anavilhanas Jungle Lodge" stars="4,5" location="Av. Pres. Gentúlio Vargas Novo Airão" />
                                        </View>
                                    }}
                                >
                                </FlatList>
                            </View>
                        </View>

                        {/* -------------------- Feiras ------------------------- */}
                        <View className="mt-6">
                            <View className="flex-row justify-between mx-4">
                                <Text
                                    className="text-[#393F4E] font-semibold text-lg"
                                >Feiras</Text>
                                <TouchableOpacity>
                                    <Text
                                        className="text-[#277AFF]"
                                    >{'Ver main >'}</Text>
                                </TouchableOpacity>
                            </View>
                            <View
                                className="px-4 mt-4 flex-row items-center justify-evenly flex-wrap"
                            >
                                <FlatList
                                    className="-mx-4"
                                    data={data1}
                                    keyExtractor={(item) => String(item)}
                                    showsHorizontalScrollIndicator={false}
                                    horizontal
                                    renderItem={({ item }) => {
                                        return <View
                                            style={styles.shadow}>
                                            <ItemCardContainer
                                                onPress={(item) => navigation.navigate('DetailsTourScreen', { item })}
                                                key={item} imageSrc={Local1} title="Anavilhanas Jungle Lodge" stars="4,5" location="Av. Pres. Gentúlio Vargas Novo Airão" />
                                        </View>
                                    }}
                                >
                                </FlatList>
                            </View>
                        </View>
                    </ScrollView>
                )
            }

        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    }
})

export default HomeScreen;