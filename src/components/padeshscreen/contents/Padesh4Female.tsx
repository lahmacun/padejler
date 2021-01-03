import React from 'react';
import {Text, View} from "react-native";
import StyleGuide from "../../../constants/StyleGuide";
import SH from "../SecondaryHighlight";
import PH from "../PrimaryHighlight";

const Padesh4Female = () => {
    return (
        <>
            <Text style={StyleGuide.typography.sectionTitle}>Kadın</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                    <Text style={{...StyleGuide.typography.tinyText, marginTop: 10,}}>
                        а ➜ у{'\n'}
                        я ➜ ю{'\n'}
                        ь ➜ ь
                    </Text>
                </View>
                <View style={{width: 10,}} />
                <View>
                    <Text style={{...StyleGuide.typography.tinyText, marginTop: 10,}}>
                        книг<SH>а</SH> ➜ книг<PH>у</PH>{'\n'}
                        недел<SH>я</SH> ➜ недел<PH>ю</PH>{'\n'}
                        двер<SH>ь</SH> ➜ двер<PH>ь</PH>
                    </Text>
                </View>
            </View>
        </>
    );
}

export default Padesh4Female;
