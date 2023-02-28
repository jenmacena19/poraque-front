import { SafeAreaView } from 'react-native'
import React, {useLayoutEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AgenciesList from './AgenciesList';
import AgencyDetails from './AgencyDetails';

const Stack = createNativeStackNavigator();

const Agencies = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
        headerShown: false,
        });
    }, []);

    return (
        <NavigationContainer independent={true}>
          <Stack.Navigator>
            <Stack.Screen name="AgenciesList" component={AgenciesList} />
            <Stack.Screen name="AgencyDetails" component={AgencyDetails} />
          </Stack.Navigator>
        </NavigationContainer>
      );
  
}

export default Agencies;