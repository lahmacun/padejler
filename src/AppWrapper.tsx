import React, {useState} from 'react';
import {ActivityIndicator} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {navigationRef} from "./RootNavigation";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Colors from "./constants/Colors";

// Screens
import IntroductionScreen from "./screens/IntroductionScreen";
import MenuScreen from "./screens/MenuScreen";
import HomeScreen from "./screens/HomeScreen";
import PadeshScreen from "./screens/PadeshScreen";
import CreditsScreen from "./screens/CreditsScreen";

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

const removeStoreData = async (key) => {
    try  {
        return await AsyncStorage.removeItem(key);
    } catch (err) {
        console.log('Error occured while adding ' + key + ' data to async store', err);
        return false;
    }
}

global.getStoreData = getStoreData;
global.setStoreData = setStoreData;
global.removeStoreData = removeStoreData;

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
        <NavigationContainer  ref={navigationRef}>
            <Stack.Navigator initialRouteName={skipIntro ? "Home" : "Introduction"} screenOptions={{
                headerShown: false,
            }}>
                <Stack.Screen name={"Introduction"} component={IntroductionScreen} />
                <Stack.Screen name={"Home"} component={HomeScreen} />
                <Stack.Screen name={"Menu"} component={MenuScreen} />
                <Stack.Screen name={"Padesh"} component={PadeshScreen} />
                <Stack.Screen name={"Credits"} component={CreditsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppWrapper;
