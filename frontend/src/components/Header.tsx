import React from 'react';
import {View, StyleSheet, Text, Image} from "react-native";
import profile from '../../assets/profile-picture.jpeg'


const Header = () => {

    return(
        <View style={styles.header}>
            <Text style={styles.logo}>My App</Text>
            <View style={styles.links}>
                <Text style={styles.link}>Home</Text>
                <Text style={styles.link}>About</Text>
                <Text style={styles.link}>Contact</Text>
            </View>
            <Image
                source={profile} // Replace with your image path
                style={styles.profileImage}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: 'lightgray',
    },
    logo: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    links: {
        flexDirection: 'row',
        marginRight: 20,
    },
    link: {
        marginHorizontal: 10,
        color: 'blue',
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
});



export default Header;