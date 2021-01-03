import React from 'react';
import {Text, View} from "react-native";
import StyleGuide from "../../../constants/StyleGuide";

const Padesh4Male = () => {
    return (
        <>
            <Text style={StyleGuide.typography.sectionTitle}>Erkek</Text>
            <Text style={{...StyleGuide.typography.tinyText, marginTop: 10,}}>Cansız varlıklarda bir değişiklik olmaz.</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                    <Text style={{...StyleGuide.typography.tinyText, marginTop: 10,}}>
                        ☐ ➜ ☐ + а{'\n'}
                        й ➜ я{'\n'}
                        ь ➜ я{'\n'}
                    </Text>
                </View>
                <View style={{width: 10,}} />
                <View>
                    <Text style={{...StyleGuide.typography.tinyText, marginTop: 10,}}>
                        брат ➜ брата{'\n'}
                        герой ➜ героя{'\n'}
                        учитель ➜ учителя{'\n'}
                        стол ➜ стол (cansız)
                    </Text>
                </View>
            </View>
        </>
    );
}

export default Padesh4Male;
