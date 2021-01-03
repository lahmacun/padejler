import React from 'react';
import {Text, View} from "react-native";
import StyleGuide from "../../../constants/StyleGuide";
import SH from "../SecondaryHighlight";
import PH from "../PrimaryHighlight";

const Padesh2Female = () => {
    return (
        <>
            <Text style={StyleGuide.typography.sectionTitle}>Kadın</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                    <Text style={{...StyleGuide.typography.tinyText, marginTop: 10,}}>
                        а ➜ ой{'\n'}
                        я ➜ ей{'\n'}
                        ия ➜ ией{'\n'}
                        ь ➜ ь + ю
                    </Text>
                </View>
                <View style={{width: 10,}} />
                <View>
                    <Text style={{...StyleGuide.typography.tinyText, marginTop: 10,}}>
                        сестр<SH>а</SH> ➜ сестр<PH>ой</PH>{'\n'}
                        недел<SH>я</SH> ➜ редел<PH>ей</PH>{'\n'}
                        мар<SH>ия</SH> ➜ мари<PH>ей</PH>{'\n'}
                        двер<SH>ь</SH> ➜ двер<PH>ью</PH>
                    </Text>
                </View>
            </View>
        </>
    );
}

export default Padesh2Female;
