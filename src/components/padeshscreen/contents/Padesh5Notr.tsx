import React from 'react';
import {Text, View} from "react-native";
import StyleGuide from "../../../constants/StyleGuide";

const Padesh5Notr = () => {
    return (
        <>
            <Text style={StyleGuide.typography.sectionTitle}>Nötr</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                    <Text style={{...StyleGuide.typography.tinyText, marginTop: 10,}}>
                        о ➜ о + м{'\n'}
                        е ➜ е + м{'\n'}
                        мя ➜ менем
                    </Text>
                </View>
                <View style={{width: 10,}} />
                <View>
                    <Text style={{...StyleGuide.typography.tinyText, marginTop: 10,}}>
                        лицо ➜ лицом{'\n'}
                        море ➜ морем{'\n'}
                        время ➜ временем
                    </Text>
                </View>
            </View>
        </>
    );
}

export default Padesh5Notr;
