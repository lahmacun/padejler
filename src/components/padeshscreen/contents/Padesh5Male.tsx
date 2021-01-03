import React from 'react';
import {Text, View} from "react-native";
import StyleGuide from "../../../constants/StyleGuide";
import SH from "../SecondaryHighlight";
import PH from "../PrimaryHighlight";

const Padesh2Male = () => {
    return (
        <>
            <Text style={StyleGuide.typography.sectionTitle}>Erkek</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                    <Text style={{...StyleGuide.typography.tinyText, marginTop: 10,}}>
                        ◻️ ➜ ◻️ + ом{'\n'}
                        й ➜ ем{'\n'}
                        ь ➜ ем
                    </Text>
                </View>
                <View style={{width: 10,}} />
                <View>
                    <Text style={{...StyleGuide.typography.tinyText, marginTop: 10,}}>
                        бра<SH>т</SH> ➜ брат<PH>ом</PH>{'\n'}
                        сто<SH>л</SH> ➜ стол<PH>ом</PH>{'\n'}
                        геро<SH>й</SH> ➜ геро<PH>ем</PH>{'\n'}
                        учител<SH>ь</SH> ➜ учител<PH>ем</PH>
                    </Text>
                </View>
            </View>
        </>
    );
}

export default Padesh2Male;
