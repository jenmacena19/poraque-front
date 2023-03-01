import * as React from 'react';
import { Image, TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Inter_600SemiBold, Inter_500Medium, Inter_400Regular } from '@expo-google-fonts/inter';
import { useFonts } from 'expo-font';

const DetailsTourScreen = () => {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  const clickHandler = () => {
    alert('Botão Clicado');
  };
  
  return (
    <View>
      
      
      <Image style={styles.image} source={
        require('../assets/local_images/card-anavilhanas.png')
      } />
      <Text style={styles.title}>Teatro Amazonas</Text>
      <Text style={styles.adress}>
        Endereço: Largo de São Sebastião.
        {'\n'}
        Funcionamento: terça a sábado das 9h às 14h.
      </Text>
      <Text style={styles.know}>Conhecendo mais...</Text>
      <Text style={styles.text}>
        Inaugurado em 1896, o Teatro Amazonas representa o ápice do ciclo econômico da borracha.
        Sua grandiosidade reflete a riqueza que passou pela cidade, sendo que a maioria do material usado na
        decoração foi trazida da Europa, ou seja, materiais caros e sofisticados. O Teatro Amazonas é o
        maior patrimônio cultural e histórico da cidade.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Inter_500Medium',
    fontSize: 20,
    marginBottom: 10,
    marginTop: 30,
    marginLeft: 20,
    color: '#393F4E'
  },
  image: {
    height: 450,
    width: 400,
    borderBottomLeftRadius: 45,
    borderBottomRightRadius: 45,
    overflow: "hidden"
  },
  text: {
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'justify',
    fontSize: 14,
    fontFamily: 'Inter_400Regular'
  },
  know: {
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
    fontFamily: 'Inter_500Medium',
    color: '#393F4E'
  },
  adress: {
    fontSize: 15,
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'left'
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 70,
    height: 70,
  },
  touchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    left: 25,
    bottom: 120
  },
})


export default DetailsTourScreen;