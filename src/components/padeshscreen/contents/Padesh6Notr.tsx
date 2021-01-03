import React from 'react';
import {Text, View} from "react-native";
import StyleGuide from "../../../constants/StyleGuide";
import SH from "../SecondaryHighlight";
import PH from "../PrimaryHighlight";

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
                        лиц<SH>о</SH> ➜ лиц<PH>е</PH>{'\n'}
                        мор<SH>е</SH> ➜ мор<PH>е</PH>{'\n'}
                        здан<SH>ие</SH> ➜ здан<PH>ии</PH>{'\n'}
                        вре<SH>мя</SH> ➜ вре<PH>мени</PH>
                    </Text>
                </View>
            </View>
        </>
    );
}

export default Padesh6Notr;
