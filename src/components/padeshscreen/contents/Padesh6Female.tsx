import React from 'react';
import {Text, View} from "react-native";
import StyleGuide from "../../../constants/StyleGuide";

const Padesh6Female = () => {
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
                        сестра ➜ сестре{'\n'}
                        неделя ➜ неделе{'\n'}
                        мария ➜ марии{'\n'}
                        дверь ➜ двери
                    </Text>
                </View>
            </View>
        </>
    );
}

export default Padesh6Female;
