import React, {useState} from "react";
import {Text, View, StyleSheet, Image, TextInput, Button} from "react-native";
import logo from './../../../assets/register.png';


const Registration = (props: any) => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const dummyData = {name: "hello", password: "1234", email: "hello@gmail.com"};

    const handleNameInput = (name: string) => setName(name);
    const handlePassInput = (password: string) => setPassword(password);
    const handleEmailInput = (email: string) => setEmail(email);
    const handleLoginLink = () => props.navigation.navigate("login");

    const handleOnSubmit = () => {
        if (name === dummyData.name && password === dummyData.password && email === dummyData.email)
            props.navigation.navigate("login");
        else
            console.log("invalid info");
    };


    return (
        <View style={styles.mainContainer}>
            <Image source={logo} style={styles.imageStyles}/>
            <View style={styles.inputContainer}>
                <TextInput placeholder='Username' value={name} onChangeText={handleNameInput} style={styles.inputStyles}/>
                <TextInput placeholder='Email' value={email} onChangeText={handleEmailInput}
                           style={styles.inputStyles}/>
                <TextInput placeholder='Password' value={password} onChangeText={handlePassInput}
                           style={styles.inputStyles}/>

            </View>
            <View style={{margin: 10, width: 200}}>
                <Button title="SIGN UP" onPress={() => handleOnSubmit()}/>
            </View>
            <Text>Already have an account? <Text style={{color: "#3543D3"}} onPress={handleLoginLink}>Login</Text>
            </Text>
        </View>
    );
}


const styles = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageStyles: {
        height: 100,
        width: 100,
        marginTop:150
    },
    inputContainer: {
        display: 'flex',
        margin: 10
    },
    inputStyles: {
        width: 200,
        height: 40,
        marginTop: 20,
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 8,
        fontSize: 20,
        paddingHorizontal: 10
    }
})

export default Registration;