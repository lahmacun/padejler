import React from 'react';
import {Text, View} from "react-native";
import StyleGuide from "../../../constants/StyleGuide";

const Padesh4Female = () => {
    return (
        <>
            <Text style={StyleGuide.typography.sectionTitle}>Kadın</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                    <Text style={{...StyleGuide.typography.tinyText, marginTop: 10,}}>
                        а ➜ у{'\n'}
                        я ➜ ю{'\n'}
                        ь ➜ я
                    </Text>
                </View>
                <View style={{width: 10,}} />
                <View>
                    <Text style={{...StyleGuide.typography.tinyText, marginTop: 10,}}>
                        книга ➜ книгу{'\n'}
                        неделя ➜ неделю{'\n'}
                        дверь ➜ дверь
                    </Text>
                </View>
            </View>
        </>
    );
}

export default Padesh4Female;
