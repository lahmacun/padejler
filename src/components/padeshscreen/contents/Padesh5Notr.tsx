import React from 'react';
import {Text, View} from "react-native";
import StyleGuide from "../../../constants/StyleGuide";
import SH from "../SecondaryHighlight";
import PH from "../PrimaryHighlight";

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
                        лиц<SH>о</SH> ➜ лиц<PH>ом</PH>{'\n'}
                        мор<SH>е</SH> ➜ мор<PH>ем</PH>{'\n'}
                        вре<SH>мя</SH> ➜ вре<PH>менем</PH>
                    </Text>
                </View>
            </View>
        </>
    );
}

export default Padesh5Notr;
