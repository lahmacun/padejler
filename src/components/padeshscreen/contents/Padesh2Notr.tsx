import React from 'react';
import {Text, View} from "react-native";
import StyleGuide from "../../../constants/StyleGuide";
import SH from "../SecondaryHighlight";
import PH from "../PrimaryHighlight";

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
                <View style={{width: 10,}} />
                <View>
                    <Text style={{...StyleGuide.typography.tinyText, marginTop: 10,}}>
                        лиц<SH>о</SH> ➜ лиц<PH>а</PH>{'\n'}
                        мор<SH>е</SH> ➜ мор<PH>я</PH>{'\n'}
                        вре<SH>мя</SH> ➜ вре<PH>мени</PH>
                    </Text>
                </View>
            </View>
        </>
    );
}

export default Padesh2Notr;
