import React from 'react';
import {Text, View} from "react-native";
import StyleGuide from "../../../constants/StyleGuide";

const Padesh6Notr = () => {
    return (
        <>
            <Text style={StyleGuide.typography.sectionTitle}>Nötr</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                    <Text style={{...StyleGuide.typography.tinyText, marginTop: 10,}}>
                        о ➜ е{'\n'}
                        е ➜ е{'\n'}
                        ие ➜ ии{'\n'}
                        мя ➜ мени
                    </Text>
                </View>
                <View style={{width: 10,}} />
                <View>
                    <Text style={{...StyleGuide.typography.tinyText, marginTop: 10,}}>
                        лицо ➜ лице{'\n'}
                        море ➜ море{'\n'}
                        здание ➜ здании{'\n'}
                        время ➜ времени
                    </Text>
                </View>
            </View>
        </>
    );
}

export default Padesh6Notr;
