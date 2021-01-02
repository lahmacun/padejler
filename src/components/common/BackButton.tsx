import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from "react-native";
import StyleGuide from "../../constants/StyleGuide";
import {goBack} from "../../RootNavigation";

function BackButton() {
    return (
        <TouchableOpacity style={styles.container} onPress={() => {
            goBack();
        }}>
            <Image source={require('../../res/images/common/back-icon.png')} style={{marginRight: 10, width: 7, height: 11,}} />
            <Text style={styles.text}>Geri Dön</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create<Object[Object]>({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: StyleGuide.typography.sectionTitle,
});

export default BackButton;
