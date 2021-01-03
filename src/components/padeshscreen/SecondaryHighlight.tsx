import React from 'react';
import {Text} from 'react-native';
import StyleGuide from "../../constants/StyleGuide";
import Colors from "../../constants/Colors";

const SH = (props) => {
    return (
        <Text style={{...StyleGuide.typography.tinyText, color: Colors.secondary, ...props.style}}>{props.children}</Text>
    );
}

export default SH;
