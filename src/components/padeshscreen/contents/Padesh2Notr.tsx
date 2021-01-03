import React from 'react';
import {Text, View} from "react-native";
import StyleGuide from "../../../constants/StyleGuide";

const Padesh2Notr = () => {
    return (
        <>
            <Text style={StyleGuide.typography.sectionTitle}>Nötr</Text>
            <Text style={{...StyleGuide.typography.tinyText, marginTop: 10,}}>
                Bu padejde herhangi bir değişiklik olmaz.
            </Text>
        </>
    );
}

export default Padesh2Notr;
