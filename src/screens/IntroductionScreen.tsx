import React from 'react';
import {Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, View} from "react-native";
import StyleGuide from "../constants/StyleGuide";
import ContinueButton from "../components/introductionscreen/ContinueButton";
import Colors from "../constants/Colors";

function IntroductionScreen(props) {

    const skipIntro = () => {
        global.setStoreData('@skipIntroduction', "true").then(() => {
            props.navigation.navigate('Home');
        }).catch(err => {
            console.log('Error occured while setting @skipIntroduction data.', err);
        });
    }

    return (
        <ImageBackground
            source={require('../res/images/introduction/bg.jpg')}
            style={styles.backgroundImage}
        >
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.heading}>Hoş{'\n'}geldin!</Text>
                    <Text style={styles.welcome}>здравствуйте!</Text>
                    <Text style={styles.description}>
                        Padejler uygulaması sayesinde hangi padejlerde kelime sonundaki hangi harflerin hangi harflere dönüşeceğini sadece birkaç tık ile kolayca öğrenebilirsin.
                        {'\n'}{'\n'}
                        Kim bilir, belki ileride bunları düzenli çalışabileceğin bir uygulamaya dönüşür.
                    </Text>
                    <View style={styles.continue}>
                        <ContinueButton onPress={skipIntro} />
                        <Text style={styles.continueText}>Devam Et</Text>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    );
}

export default IntroductionScreen;

const styles = StyleSheet.create<Object[Object]>({
    backgroundImage: {
        flex: 1,
        width: 100 + '%',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        height: 100 + '%',
        backgroundColor: '#FF575F',
    },
    container: {
        padding: StyleGuide.containerPadding,
        paddingTop: Dimensions.get('window').height * .2,
        width: 100 + '%',
    },
    heading: StyleGuide.typography.hugeTitle,
    welcome: {
        ...StyleGuide.typography.mediumText,
        fontSize: 24,
        marginTop: 5,
    },
    description: {
        ...StyleGuide.typography.mediumText,
        marginTop: 23,
    },
    continue: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 34,
    },
    continueText: {
        ...StyleGuide.typography.tinyText,
        marginLeft: 13,
        color: Colors.lighterText,
        fontWeight: '700',
    },
});
