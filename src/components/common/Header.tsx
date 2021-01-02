import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import MenuButton from "./MenuButton";
import StyleGuide from "../../constants/StyleGuide";
import Colors from "../../constants/Colors";
import {navigate} from "../../RootNavigation";

function Header(props) {
    return (
        <View style={styles.header}>
            <Text style={styles.heading}>{props.text}</Text>
            <MenuButton onPress={() => {
                navigate('Menu');
            }} />
        </View>
    );
}

export default Header;

const styles = StyleSheet.create<Object[Object]>({
    header: {
        padding: StyleGuide.containerPadding,
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.mainBg,
    },
    heading: {
        ...StyleGuide.typography.hugeTitle,
        fontWeight: '400',
    },
});
