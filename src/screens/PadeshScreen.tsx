import React from 'react';
import {
    ScrollView,
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
import Padesh1Male from "../components/padeshscreen/contents/Padesh1Male";
import Padesh1Female from "../components/padeshscreen/contents/Padesh1Female";
import Padesh1Notr from "../components/padeshscreen/contents/Padesh1Notr";
import Padesh2Male from "../components/padeshscreen/contents/Padesh2Male";
import Padesh2Female from "../components/padeshscreen/contents/Padesh2Female";
import Padesh2Notr from "../components/padeshscreen/contents/Padesh2Notr";
import Padesh3Male from "../components/padeshscreen/contents/Padesh3Male";
import Padesh3Female from "../components/padeshscreen/contents/Padesh3Female";
import Padesh3Notr from "../components/padeshscreen/contents/Padesh3Notr";
import Padesh4Male from "../components/padeshscreen/contents/Padesh4Male";
import Padesh4Female from "../components/padeshscreen/contents/Padesh4Female";
import Padesh4Notr from "../components/padeshscreen/contents/Padesh4Notr";
import Padesh5Male from "../components/padeshscreen/contents/Padesh5Male";
import Padesh5Female from "../components/padeshscreen/contents/Padesh5Female";
import Padesh5Notr from "../components/padeshscreen/contents/Padesh5Notr";
import Padesh6Male from "../components/padeshscreen/contents/Padesh6Male";
import Padesh6Female from "../components/padeshscreen/contents/Padesh6Female";
import Padesh6Notr from "../components/padeshscreen/contents/Padesh6Notr";

export interface IPadeshScreenProps {
    route: Route<string, object|undefined>,
}

const padeshes = {
    1: {
        title: '1. именительный падеж',
        components: {
            male: (<Padesh1Male />),
            female: (<Padesh1Female />),
            notr: (<Padesh1Notr />),
        },
    },
    2: {
        title: '2. Родительный Падеж',
        components: {
            male: (<Padesh2Male />),
            female: (<Padesh2Female />),
            notr: (<Padesh2Notr />),
        },
    },
    3: {
        title: '3. Дательный Падеж',
        components: {
            male: (<Padesh3Male />),
            female: (<Padesh3Female />),
            notr: (<Padesh3Notr />),
        },
    },
    4: {
        title: '4. Винительный Падеж',
        components: {
            male: (<Padesh4Male />),
            female: (<Padesh4Female />),
            notr: (<Padesh4Notr />),
        },
    },
    5: {
        title: '5. творительный падеж',
        components: {
            male: (<Padesh5Male />),
            female: (<Padesh5Female />),
            notr: (<Padesh5Notr />),
        },
    },
    6: {
        title: '6. предложный падеж',
        components: {
            male: (<Padesh6Male />),
            female: (<Padesh6Female />),
            notr: (<Padesh6Notr />),
        },
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
            {props.content}
        </View>
    );
}

const PadeshScreen = (props): JSX.Element => {
    const {number} = props.route.params;
    const {padesh} = props;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <BackButton />
                <Text style={styles.headerText}>{padeshes[number].title}</Text>
            </View>
            <Categories />
            <ScrollView style={styles.rulesContainer}>
                {padesh.category == 'all' || padesh.category == 'male' ? <RulesContent gender={'male'} content={padeshes[number].components.male} /> : null}
                {padesh.category == 'all' || padesh.category == 'female' ? <RulesContent gender={'female'} content={padeshes[number].components.female} /> : null}
                {padesh.category == 'all' || padesh.category == 'notr' ? <RulesContent gender={'notr'} content={padeshes[number].components.notr} /> : null}
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
