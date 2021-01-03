import React from 'react';
import {Text, View} from "react-native";
import StyleGuide from "../../../constants/StyleGuide";

const Padesh2Male = () => {
    return (
        <>
            <Text style={StyleGuide.typography.sectionTitle}>Erkek</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                    <Text style={{...StyleGuide.typography.tinyText, marginTop: 10,}}>
                        ☐ ➜ ☐ + а{'\n'}
                        й ➜ я{'\n'}
                        ь ➜ я
                    </Text>
                </View>
                <View style={{width: 20,}} />
                <View>
                    <Text style={{...StyleGuide.typography.tinyText, marginTop: 10,}}>
                        брат ➜ брата{'\n'}
                        стол ➜ стола{'\n'}
                        герой ➜ героя{'\n'}
                        учитель ➜ учителя
                    </Text>
                </View>
            </View>
        </>
    );
}

export default Padesh2Male;
