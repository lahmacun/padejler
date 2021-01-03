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
                        ☐ ➜ ☐ + ом{'\n'}
                        й ➜ ем{'\n'}
                        ь ➜ ем
                    </Text>
                </View>
                <View style={{width: 10,}} />
                <View>
                    <Text style={{...StyleGuide.typography.tinyText, marginTop: 10,}}>
                        брат ➜ братом{'\n'}
                        стол ➜ столом{'\n'}
                        герой ➜ героем{'\n'}
                        учитель ➜ учителем
                    </Text>
                </View>
            </View>
        </>
    );
}

export default Padesh2Male;
