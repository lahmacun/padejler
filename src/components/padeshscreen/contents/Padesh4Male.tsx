import React from 'react';
import {Text} from "react-native";
import StyleGuide from "../../../constants/StyleGuide";

const Padesh4Male = () => {
    return (
        <>
            <Text style={StyleGuide.typography.sectionTitle}>Erkek</Text>
            <Text style={{...StyleGuide.typography.tinyText, marginTop: 10,}}>

            </Text>
        </>
    );
}

export default Padesh4Male;
