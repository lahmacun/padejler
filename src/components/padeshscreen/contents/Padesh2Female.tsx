import React from 'react';
import {Text, View} from "react-native";
import StyleGuide from "../../../constants/StyleGuide";

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
                        вода ➜ воды{'\n'}
                        неделя ➜ недели{'\n'}
                        дверь ➜ двери
                    </Text>
                </View>
            </View>
        </>
    );
}

export default Padesh2Female;
