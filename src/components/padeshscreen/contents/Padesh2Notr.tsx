import React from 'react';
import {Text, View} from "react-native";
import StyleGuide from "../../../constants/StyleGuide";

const Padesh2Notr = () => {
    return (
        <>
            <Text style={StyleGuide.typography.sectionTitle}>Nötr</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                    <Text style={{...StyleGuide.typography.tinyText, marginTop: 10,}}>
                        о ➜ а{'\n'}
                        е ➜ я{'\n'}
                        мя ➜ мени
                    </Text>
                </View>
                <View style={{width: 20,}} />
                <View>
                    <Text style={{...StyleGuide.typography.tinyText, marginTop: 10,}}>
                        лицо ➜ лица{'\n'}
                        море ➜ моря{'\n'}
                        время ➜ времени
                    </Text>
                </View>
            </View>
        </>
    );
}

export default Padesh2Notr;
