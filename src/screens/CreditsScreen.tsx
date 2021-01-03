import React from 'react';
import {
    Linking,
    ScrollView,
    StyleSheet,
    Text, TouchableOpacity,
    View
} from "react-native";
import BackButton from "../components/common/BackButton";
import StyleGuide from "../constants/StyleGuide";
import Colors from "../constants/Colors";
import PH from "../components/padeshscreen/PrimaryHighlight";
import SH from "../components/padeshscreen/SecondaryHighlight";

const CreditsScreen = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <BackButton />
                <Text style={styles.headerText}>Teşekkürler</Text>
            </View>
            <ScrollView style={styles.rulesContainer}>
                <View style={{
                    paddingVertical: 30,
                    paddingHorizontal: 20,
                    backgroundColor: Colors.darkBg,
                    marginBottom: 20,
                    borderRadius: 25,
                }}>
                    <Text style={StyleGuide.typography.sectionTitle}>Design</Text>
                    <Text style={{...StyleGuide.typography.tinyText, marginTop: 10,}}>
                        This app's design is made by using <PH>Toma Li</PH>'s <SH>Marvie IOS UI Kit</SH> on Figma Community.
                    </Text>
                    <TouchableOpacity
                        onPress={() => {
                            Linking.openURL('https://www.figma.com/community/file/827876058453173134');
                        }}
                        style={{marginTop: 10,}}
                    >
                        <SH style={{textDecorationLine: 'underline'}}>Check out the design!</SH>
                    </TouchableOpacity>
                </View>
                <View style={{
                    paddingVertical: 30,
                    paddingHorizontal: 20,
                    backgroundColor: Colors.darkBg,
                    marginBottom: 20,
                    borderRadius: 25,
                }}>
                    <Text style={StyleGuide.typography.sectionTitle}>Örnekler</Text>
                    <Text style={{...StyleGuide.typography.tinyText, marginTop: 10,}}>
                        Her bir padej için verilen kelime örnekleri <SH>ruscaonline.com</SH> adresinden alınmıştır.
                    </Text>
                    <TouchableOpacity
                        onPress={() => {
                            Linking.openURL('https://ruscaonline.com/rusca-ismin-halleri-rusca-padej-tablosu.html');
                        }}
                        style={{marginTop: 10,}}
                    >
                        <SH style={{textDecorationLine: 'underline'}}>İlgili makaleyi ziyaret et!</SH>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

export default CreditsScreen;

const styles = StyleSheet.create<Object[Object]>({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: Colors.mainBg,
        justifyContent: 'flex-start',
    },
    rulesContainer: {
        marginTop: 20,
        width: 100 + '%',
        paddingHorizontal: StyleGuide.containerPadding,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 100 + '%',
        paddingVertical: 20,
        paddingHorizontal: StyleGuide.containerPadding,
    },
    headerText: {
        ...StyleGuide.typography.sectionTitle,
        paddingHorizontal: 10,
    },
});
