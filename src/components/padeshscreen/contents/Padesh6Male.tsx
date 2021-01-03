import React from 'react';
import {Text, View} from "react-native";
import StyleGuide from "../../../constants/StyleGuide";

const Padesh6Male = () => {
    return (
        <>
            <Text style={StyleGuide.typography.sectionTitle}>Erkek</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                    <Text style={{...StyleGuide.typography.tinyText, marginTop: 10,}}>
                        ☐ ➜ ☐ + е{'\n'}
                        й ➜ е{'\n'}
                        ь ➜ е
                    </Text>
                </View>
                <View style={{width: 10,}} />
                <View>
                    <Text style={{...StyleGuide.typography.tinyText, marginTop: 10,}}>
                        брат ➜ брате{'\n'}
                        стол ➜ столе{'\n'}
                        герой ➜ герое{'\n'}
                        учитель ➜ учителе
                    </Text>
                </View>
            </View>
        </>
    );
}

export default Padesh6Male;
