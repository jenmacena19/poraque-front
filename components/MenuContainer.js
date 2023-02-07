import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const MenuContainer = ({title, imageSrc, type, setType}) => {

    const handlePress = () => {
        setType(title.toLowerCase())
    }

  return (
    <TouchableOpacity
        className={`px-4 flex-row items-center rounded-2xl ${type === title.toLowerCase() ? "bg-[#22508F]" : "bg-gray-100"}`}
        onPress={handlePress}
    >
      <View className={`w-4 h-4`}>
        <Image
            source={imageSrc}
            className="w-full h-full object-cover"
        />
      </View>
      <Text
        className={`my-1 ml-2 font-semibold ${type === title.toLowerCase() ? "text-white" : "text-black"}`}
      >{title}</Text>
    </TouchableOpacity>
  )
}

export default MenuContainer;