import React from 'react';
import {Text, View} from "react-native";
import StyleGuide from "../../../constants/StyleGuide";
import SH from "../SecondaryHighlight";
import PH from "../PrimaryHighlight";

const Padesh6Male = () => {
    return (
        <>
            <Text style={StyleGuide.typography.sectionTitle}>Erkek</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                    <Text style={{...StyleGuide.typography.tinyText, marginTop: 10,}}>
                        ◻️ ➜ ◻️ + е{'\n'}
                        й ➜ е{'\n'}
                        ь ➜ е
                    </Text>
                </View>
                <View style={{width: 10,}} />
                <View>
                    <Text style={{...StyleGuide.typography.tinyText, marginTop: 10,}}>
                        бра<SH>т</SH> ➜ бра<PH>те</PH>{'\n'}
                        сто<SH>л</SH> ➜ сто<PH>ле</PH>{'\n'}
                        геро<SH>й</SH> ➜ геро<PH>е</PH>{'\n'}
                        учител<SH>ь</SH> ➜ учител<PH>е</PH>
                    </Text>
                </View>
            </View>
        </>
    );
}

export default Padesh6Male;
