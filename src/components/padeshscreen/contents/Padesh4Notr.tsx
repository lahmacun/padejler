import React from 'react';
import {Text, View} from "react-native";
import StyleGuide from "../../../constants/StyleGuide";
import SH from "../SecondaryHighlight";
import PH from "../PrimaryHighlight";

const Padesh4Notr = () => {
    return (
        <>
            <Text style={StyleGuide.typography.sectionTitle}>Nötr</Text>
            <Text style={StyleGuide.typography.tinyText}>Bu padejde bu grup için değişiklik olmaz.</Text>
        </>
    );
}

export default Padesh4Notr;
