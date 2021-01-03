import React from 'react';
import {Text} from 'react-native';
import StyleGuide from "../../constants/StyleGuide";
import Colors from "../../constants/Colors";

const PH = (props) => {
    return (
        <Text style={{...StyleGuide.typography.tinyText, color: Colors.primary}}>{props.children}</Text>
    );
}

export default PH;
