import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import Header from "../../components/Header";


const Events = () => {
    return (
        <View>
            <Header/>
            <Text style={styles.text}>Event Screen</Text>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        marginTop: 10
        // justifyContent: 'center', // Center content vertically
        // alignItems: 'center', // Center content horizontally
    },
    text: {
        fontSize: 20,
        // alignSelf: 'flex-start'
    },
});

export default Events;
