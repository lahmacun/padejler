import React from 'react';
import {TouchableOpacity, View} from "react-native";
import Colors from "../../constants/Colors";

function MenuButton(props) {
    return (
        <TouchableOpacity
            style={{
                width: 40,
                height: 25,
                alignItems: 'flex-end',
                justifyContent: 'space-between',
            }}
            onPress={props.onPress}
        >
            <View style={{width: 40, height: 3, borderRadius: 4, backgroundColor: Colors.lighterText}} />
            <View style={{width: 35, height: 3, borderRadius: 4, backgroundColor: Colors.lighterText}} />
            <View style={{width: 30, height: 3, borderRadius: 4, backgroundColor: Colors.lighterText}} />
        </TouchableOpacity>
    );
}

export default MenuButton;
