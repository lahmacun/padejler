import React, {useState} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import AsyncStorage from '@react-native-async-storage/async-storage';

// Screens
import IntroductionScreen from "./screens/IntroductionScreen";
import HomeScreen from "./screens/HomeScreen";
import {ActivityIndicator} from "react-native";
import Colors from "./constants/Colors";

const Stack = createStackNavigator();

const getStoreData = async (key:string) => {
    try  {
        return await AsyncStorage.getItem(key);
    } catch (err) {
        console.log('Error occured while fetching ' + key + ' data from async store', err);
        return null;
    }
}

const setStoreData = async (key, value) => {
    try  {
        return await AsyncStorage.setItem(key, value);
    } catch (err) {
        console.log('Error occured while adding ' + key + ' data to async store', err);
        return false;
    }
}

global.getStoreData = getStoreData;
global.setStoreData = setStoreData;

function AppWrapper() {
    const [skipIntro, setSkipIntro] = useState<boolean|null>(null);
    global.getStoreData('@skipIntroduction').then(data => {
        if (data === null) {
            setSkipIntro(false);
        } else {
            setSkipIntro(data);
        }
    }).catch(err => {
        console.log("Error occured while fetching @skipIntroduction data.", err);
    });

    if (skipIntro === null) {
        return (
            <ActivityIndicator size={'large'} color={Colors.primaryDark} />
        );
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={skipIntro ? "Home" : "Introduction"} screenOptions={{
                headerShown: false,
            }}>
                <Stack.Screen name={"Introduction"} component={IntroductionScreen} />
                <Stack.Screen name={"Home"} component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppWrapper;
