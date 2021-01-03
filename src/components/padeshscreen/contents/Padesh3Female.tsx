import React from 'react';
import {Text, View} from "react-native";
import StyleGuide from "../../../constants/StyleGuide";
import SH from "../SecondaryHighlight";
import PH from "../PrimaryHighlight";

const Padesh3Female = () => {
    return (
        <>
            <Text style={StyleGuide.typography.sectionTitle}>Kadın</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                    <Text style={{...StyleGuide.typography.tinyText, marginTop: 10,}}>
                        а ➜ е{'\n'}
                        я ➜ е{'\n'}
                        ия ➜ ии{'\n'}
                        ь ➜ и
                    </Text>
                </View>
                <View style={{width: 10,}} />
                <View>
                    <Text style={{...StyleGuide.typography.tinyText, marginTop: 10,}}>
                        вод<SH>а</SH> ➜ вод<PH>е</PH>{'\n'}
                        недел<SH>я</SH> ➜ недел<PH>е</PH>{'\n'}
                        мар<SH>ия</SH> ➜ мар<PH>ии</PH>{'\n'}
                        двер<SH>ь</SH> ➜ двер<PH>и</PH>
                    </Text>
                </View>
            </View>
        </>
    );
}

export default Padesh3Female;
