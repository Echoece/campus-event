import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import Header from "../../components/Header";


const Profile = () => {



    return(
        <View>
            <Header/>
            <Text> Profile Page </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', // Center content vertically
        alignItems: 'center', // Center content horizontally
    },
    text: {
        fontSize: 20,
    },
});


export default Profile;