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
                        а ➜ ой{'\n'}
                        я ➜ ей{'\n'}
                        ия ➜ ией{'\n'}
                        ь ➜ ь + ю
                    </Text>
                </View>
                <View style={{width: 10,}} />
                <View>
                    <Text style={{...StyleGuide.typography.tinyText, marginTop: 10,}}>
                        сестра ➜ сестрой{'\n'}
                        неделя ➜ ределей{'\n'}
                        мария ➜ марией{'\n'}
                        дверь ➜ дверью
                    </Text>
                </View>
            </View>
        </>
    );
}

export default Padesh2Female;
