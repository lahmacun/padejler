import React from 'react';
import {StyleSheet, TouchableOpacity, View} from "react-native";

function ContinueButton(props) {
    const {onPress} = props;
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.outerCircle}>
                <View style={styles.innerCircle}>
                    <View style={styles.triangle} />
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create<Object[Object]>({
    outerCircle: {
        width: 60,
        height: 60,
        borderRadius: 60,
        backgroundColor: 'rgba(255, 255, 255, .355)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerCircle: {
        width: 48,
        height: 48,
        borderRadius: 48,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderBottomWidth: 14,
        transform: [{
            rotate: '90deg',
        }],
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: "red",
    },
});

export default ContinueButton;
