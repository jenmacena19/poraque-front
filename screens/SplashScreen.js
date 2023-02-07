import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { LogoImage, TuristsImage, MapImage, IconBrilho, IconUser, IconMala } from '../assets';
import * as Animatable from 'react-native-animatable';

const SplashScreen = () => {

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <SafeAreaView className="bg-white flex-1 relative">
      {/* Images */}
      <View className="flex-3 relative items-end justify-end">
        <Animatable.Image
          animation={"fadeInDown"}
          easing="ease-in-out"
          delay={150}
          source={MapImage}
          className="h-40 object-fill mt-24 -mb-24"
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("TabNavigation")}
      >
        <View className="flex-2 relative items-center justify-center">
          <Animatable.Image
            animation={"fadeInDown"}
            easing="ease-in-out"
            source={LogoImage}
            className="h-40 object-fill mt-10"
          />
        </View>
      </TouchableOpacity>
      <View className="flex-1 relative items-center justify-center">
        <Animatable.Image
          animation={"fadeInUp"}
          easing="ease-in-out"
          source={TuristsImage}
          className="h-72 object-fill -mb-40"
        />
      </View>
    </SafeAreaView>
  )
}

export default SplashScreen;