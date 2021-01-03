import React from 'react';
import {Image, Linking, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Colors from "../constants/Colors";
import BackButton from "../components/common/BackButton";
import StyleGuide from "../constants/StyleGuide";

function MenuItem(props) {
    return (
        <TouchableOpacity onPress={props.onPress} style={{
            width: 100 + '%',
            backgroundColor: Colors.darkBg,
            padding: StyleGuide.containerPadding,
            paddingVertical: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottomColor: 'rgba(184, 194, 192, .35)',
            borderBottomWidth: 1,
        }}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                {props.icon}
                <Text style={{...StyleGuide.typography.mediumText, marginLeft: 16,}}>{props.label}</Text>
            </View>
            <Image source={require('../res/images/common/arrow-right.png')} style={{width: 7, height: 11,}} />
        </TouchableOpacity>
    );
}

function MenuScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <BackButton />
            </View>
            {/* Menu */}
            <View style={{width: 100 + '%'}}>
                <MenuItem
                    icon={(<Image source={require('../res/images/common/icons/heart.png')} style={{width: 24, height: 24}} />)}
                    label={"Teşekkürler"}
                    onPress={() => {
                        props.navigation.navigate('Credits');
                    }}
                />
                <MenuItem
                    icon={(<Image source={require('../res/images/common/icons/bookmark.png')} style={{width: 24, height: 24}} />)}
                    label={"Geri Bildirimde Bulun"}
                    onPress={() => {
                        Linking.openURL("https://wa.me/905511107257");
                    }}
                />
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingTop: 16,
                paddingBottom: 5,
            }}>
                <Text style={StyleGuide.typography.tinyText}>Made With ❤️ by&nbsp;</Text>
                <TouchableOpacity onPress={() => {
                    Linking.openURL("https://github.com/lahmacun/padejler");
                }}>
                    <Text style={{...StyleGuide.typography.tinyText, color: Colors.primary}}>@lahmacun</Text>
                </TouchableOpacity>
            </View>
            <Text style={{...StyleGuide.typography.tinyText, fontSize: 10, color: '#BEC7C5'}}>v1.0.0</Text>
        </View>
    );
}

export default MenuScreen;

const styles = StyleSheet.create<Object[Object]>({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
        backgroundColor: Colors.mainBg,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: 100 + '%',
        paddingVertical: 20,
        paddingHorizontal: StyleGuide.containerPadding,
    },
});
