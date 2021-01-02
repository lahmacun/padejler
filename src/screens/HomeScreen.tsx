import React from 'react';
import {Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {connect} from "react-redux";
import {StatusBar} from "expo-status-bar";
import Header from "../components/common/Header";
import StyleGuide from "../constants/StyleGuide";

function Padesh(props) {
    const { textColor, boxBg, mainBg, label, question, number, onPress } = props;

    return (
        <TouchableOpacity
            style={{
                padding: 24,
                backgroundColor: mainBg,
                borderRadius: 25,
                marginVertical: 10,
                flexDirection: 'row',
                alignItems: 'center',
            }}
            onPress={onPress}
        >
            <Text style={{
                width: 57,
                height: 57,
                borderRadius: 12,
                backgroundColor: boxBg,
                ...StyleGuide.typography.sectionTitle,
                textAlign: 'center',
                fontSize: 36,
                lineHeight: 57,
                marginRight: 17,
            }}>
                {number}
            </Text>
            <View>
                <Text style={{
                    ...StyleGuide.typography.sectionTitle,
                    fontSize: 14,
                    color: textColor,
                }}>{label}</Text>
                <Text style={{
                    ...StyleGuide.typography.tinyText,
                    color: textColor,
                    opacity: .5,
                }}>{question}</Text>
            </View>
        </TouchableOpacity>
    );
}

function HomeScreen(props) {
    const padeshes = [
        {
            bgColor: '#286053',
            primaryColor: '#3DD598',
            label: 'именительный падеж',
            question: 'Кто?  Что?',
            number: 1,
        },
        {
            bgColor: '#625B39',
            primaryColor: '#FFC542',
            label: 'Родительный Падеж',
            question: 'Кого? Чего?',
            number: 2,
        },
        {
            bgColor: '#623A42',
            primaryColor: '#FF565E',
            label: 'Дательный Падеж',
            question: 'Кому? Чему?',
            number: 3,
        },
        {
            bgColor: '#285660',
            primaryColor: '#3DA7D5',
            label: 'Винительный Падеж',
            question: 'Кого? Что?',
            number: 4,
        },
        {
            bgColor: '#553962',
            primaryColor: '#E542FF',
            label: 'творительный падеж',
            question: 'Кем? Чем?',
            number: 5,
        },
        {
            bgColor: '#55623A',
            primaryColor: '#BCEE52',
            label: 'предложный падеж',
            question: 'О ком? О чём?',
            number: 6,
        },
    ];

    return (
        <>
            <StatusBar />
            <Header text={"Padejler"} />
            <ScrollView style={styles.container}>
                {/* wod: Word Of Day */}
                <ImageBackground source={require('../res/images/home/word-bg.jpg')} style={styles.wodContainer}>
                    <Image source={require('../res/images/home/star.png')} style={{width: 15, height: 15,}} />
                    <Text style={styles.wodTitle}>Senin için bir kelime</Text>
                    <Text style={styles.wodWord}>любви</Text>
                    <Text style={styles.wodMeaning}>Aşk</Text>
                </ImageBackground>
                {/* Padeshes Container */}
                <View style={{
                    paddingBottom: 34,
                }}>
                    {padeshes.map(padesh => {
                        return (
                            <Padesh
                                id={padesh.number}
                                textColor={padesh.primaryColor}
                                boxBg={padesh.primaryColor}
                                mainBg={padesh.bgColor}
                                label={padesh.label}
                                question={padesh.question}
                                number={padesh.number}
                                onPress={() => {
                                    props.navigation.navigate('Padesh', {
                                        number: padesh.number,
                                    });
                                }}
                            />
                        );
                    })}
                </View>
            </ScrollView>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

const styles = StyleSheet.create<Object[Object]>({
    container: {
        flex: 1,
        backgroundColor: '#22343C',
        padding: StyleGuide.containerPadding,
        paddingTop: 14,
    },
    wodContainer: {
        padding: 20,
        borderRadius: 25,
        marginBottom: 24,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    wodTitle: {
        ...StyleGuide.typography.sectionTitle,
        marginVertical: 10,
    },
    wodWord: StyleGuide.typography.sectionTitle,
    wodMeaning: {
        ...StyleGuide.typography.sectionTitle,
        fontWeight: '400',
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
