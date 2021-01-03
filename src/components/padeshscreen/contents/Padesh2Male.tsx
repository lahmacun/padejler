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
                        ◻️ ➜ ◻️ + а{'\n'}
                        й ➜ я{'\n'}
                        ь ➜ я
                    </Text>
                </View>
                <View style={{width: 10,}} />
                <View>
                    <Text style={{...StyleGuide.typography.tinyText, marginTop: 10,}}>
                        бра<SH>т</SH> ➜ бра<PH>та</PH>{'\n'}
                        сто<SH>л</SH> ➜ сто<PH>ла</PH>{'\n'}
                        геро<SH>й</SH> ➜ геро<PH>я</PH>{'\n'}
                        учител<SH>ь</SH> ➜ учител<PH>я</PH>
                    </Text>
                </View>
            </View>
        </>
    );
}

export default Padesh2Male;
