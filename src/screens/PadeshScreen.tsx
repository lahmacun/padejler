import React from 'react';
import {
    Dimensions, ScrollView,
    StyleSheet,
    Text,
    View
} from "react-native";
import BackButton from "../components/common/BackButton";
import StyleGuide from "../constants/StyleGuide";
import Colors from "../constants/Colors";
import {Route} from '@react-navigation/routers/src/types';
import Categories from "../components/padeshscreen/Categories";
import {connect} from "react-redux";

export interface IPadeshScreenProps {
    route: Route<string, object|undefined>,
}

const padeshes = {
    1: {
        title: '1. именительный падеж',
    },
    2: {
        title: '2. Родительный Падеж',
    },
    3: {
        title: '3. Дательный Падеж',
    },
    4: {
        title: '4. Винительный Падеж',
    },
    5: {
        title: '5. творительный падеж',
    },
    6: {
        title: '6. предложный падеж',
    },
};

const RulesContent = (props) => {
    return (
        <View style={{
            paddingVertical: 30,
            paddingHorizontal: 20,
            backgroundColor: Colors.darkBg,
            marginBottom: 20,
            borderRadius: 25,
        }}>
            <Text style={StyleGuide.typography.sectionTitle}>Erkek</Text>
            <Text style={{...StyleGuide.typography.tinyText, marginTop: 10,}}>
                Bu padejde herhangi bir değişiklik olmaz.
            </Text>
        </View>
    );
}

const PadeshScreen = (props): JSX.Element => {
    const params = props.route.params;
    const {padesh} = props;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <BackButton />
                <Text style={styles.headerText}>{padeshes[params.number].title}</Text>
            </View>
            <Categories />
            <ScrollView style={styles.rulesContainer}>
                {padesh.category == 'all' || padesh.category == 'male' ? <RulesContent gender={'male'} /> : null}
                {padesh.category == 'all' || padesh.category == 'female' ? <RulesContent gender={'female'} /> : null}
                {padesh.category == 'all' || padesh.category == 'notr' ? <RulesContent gender={'notr'} /> : null}
            </ScrollView>
        </View>
    );
}

const mapStateToProps = (state) => {
    return {
        padesh: state.PadeshReducer,
    }
}

export default connect(mapStateToProps)(PadeshScreen);

const styles = StyleSheet.create<Object[Object]>({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: Colors.mainBg,
        justifyContent: 'flex-start',
    },
    rulesContainer: {
        marginTop: 20,
        width: 100 + '%',
        paddingHorizontal: StyleGuide.containerPadding,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 100 + '%',
        paddingVertical: 20,
        paddingHorizontal: StyleGuide.containerPadding,
    },
    headerText: {
        ...StyleGuide.typography.sectionTitle,
        paddingHorizontal: 10,
    },
});
