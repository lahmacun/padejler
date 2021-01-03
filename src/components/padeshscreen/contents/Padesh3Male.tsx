import React from 'react';
import {Text, View} from "react-native";
import StyleGuide from "../../../constants/StyleGuide";

const Padesh3Male = () => {
    return (
        <>
            <Text style={StyleGuide.typography.sectionTitle}>Erkek</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                    <Text style={{...StyleGuide.typography.tinyText, marginTop: 10,}}>
                        ☐ ➜ ☐ + у{'\n'}
                        й ➜ ю{'\n'}
                        ь ➜ ю
                    </Text>
                </View>
                <View style={{width: 10,}} />
                <View>
                    <Text style={{...StyleGuide.typography.tinyText, marginTop: 10,}}>
                        брат ➜ брату{'\n'}
                        стол ➜ столу{'\n'}
                        герой ➜ герою{'\n'}
                        учитель ➜ учителю
                    </Text>
                </View>
            </View>
        </>
    );
}

export default Padesh3Male;
