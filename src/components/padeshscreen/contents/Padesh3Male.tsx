import React from 'react';
import {Text, View} from "react-native";
import StyleGuide from "../../../constants/StyleGuide";
import SH from "../SecondaryHighlight";
import PH from "../PrimaryHighlight";

const Padesh3Male = () => {
    return (
        <>
            <Text style={StyleGuide.typography.sectionTitle}>Erkek</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                    <Text style={{...StyleGuide.typography.tinyText, marginTop: 10,}}>
                        ◻️ ➜ ◻️ + у{'\n'}
                        й ➜ ю{'\n'}
                        ь ➜ ю
                    </Text>
                </View>
                <View style={{width: 10,}} />
                <View>
                    <Text style={{...StyleGuide.typography.tinyText, marginTop: 10,}}>
                        бра<SH>т</SH> ➜ бра<PH>ту</PH>{'\n'}
                        сто<SH>л</SH> ➜ сто<PH>лу</PH>{'\n'}
                        геро<SH>й</SH> ➜ геро<PH>ю</PH>{'\n'}
                        учител<SH>ь</SH> ➜ учител<PH>ю</PH>
                    </Text>
                </View>
            </View>
        </>
    );
}

export default Padesh3Male;
