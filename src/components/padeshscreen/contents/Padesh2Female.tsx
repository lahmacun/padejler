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
                        а ➜ ы{'\n'}
                        я ➜ и{'\n'}
                        ь ➜ и
                    </Text>
                </View>
                <View style={{width: 10,}} />
                <View>
                    <Text style={{...StyleGuide.typography.tinyText, marginTop: 10,}}>
                        вод<SH>а</SH> ➜ вод<PH>ы</PH>{'\n'}
                        недел<SH>я</SH> ➜ недел<PH>и</PH>{'\n'}
                        двер<SH>ь</SH> ➜ двер<PH>и</PH>
                    </Text>
                </View>
            </View>
        </>
    );
}

export default Padesh2Female;
