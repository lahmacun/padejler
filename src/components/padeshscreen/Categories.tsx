import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import StyleGuide from "../../constants/StyleGuide";
import Colors from "../../constants/Colors";
import {connect} from "react-redux";
import {setPadeshCategory} from "../../redux/actions/PadeshActions";

const Category = (props) => {
    return (
        <TouchableOpacity
            style={{
                minWidth: 100,
                height: 52,
                borderRadius: 12,
                backgroundColor: props.active ? Colors.primary : Colors.darkBg,
                marginRight: 7,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
            }}
            onPress={props.onPress}
        >
            {props.icon ?
                <Text style={{
                    fontSize: 14,
                    top: -1,
                    marginRight: 10,
                }}>{props.icon}</Text>
            : null}
            <Text style={{
                ...StyleGuide.typography.sectionTitle,
                fontSize: 14,
                color: props.active ? Colors.lighterText : Colors.lightText,
            }}>{props.label}</Text>
        </TouchableOpacity>
    );
}

const Categories = (props) => {
    const {padesh, setPadeshCategory} = props;

    return (
        <View style={{height: 52,}}>
            <ScrollView style={styles.container} horizontal={true}>
                <View style={{
                    flexDirection: 'row',
                    paddingLeft: StyleGuide.containerPadding,
                    paddingRight: StyleGuide.containerPadding - 7,
                }}>
                    <Category
                        label={"Tümü"}
                        active={padesh.category == 'all'}
                        onPress={() => {
                            props.setPadeshCategory("all");
                        }}
                    />
                    <Category
                        icon={"👨🏻"}
                        label={"Erkek"}
                        active={padesh.category == 'male'}
                        onPress={() => {
                            props.setPadeshCategory("male");
                        }}
                    />
                    <Category
                        icon={"👩🏻"}
                        label={"Kadın"}
                        active={padesh.category == 'female'}
                        onPress={() => {
                            props.setPadeshCategory("female");
                        }}
                    />
                    <Category
                        icon={"⚪️"}
                        label={"Nötr"}
                        active={padesh.category == 'notr'}
                        onPress={() => {
                            props.setPadeshCategory("notr");
                        }}
                    />
                </View>
            </ScrollView>
        </View>
    );
}

const mapStateToProps = (state) => {
    return {
        padesh: state.PadeshReducer,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPadeshCategory: payload => dispatch(setPadeshCategory(payload)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);

const styles = StyleSheet.create<Object[Object]>({
    container: {
        minWidth: 100 + '%',
    },
});
