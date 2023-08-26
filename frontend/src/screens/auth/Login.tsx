import React, {useState} from "react";
import {Text, View, StyleSheet, Image, TextInput, Button} from "react-native";
import logo from './../../../assets/login.png';
import {AuthContext, IAuthProvider} from "../../providers/AuthProvider";


const Login = (props: any) => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const dummyData = {name: "hello", password: "1234", email: "hello@gmail.com"};

    const handlePassInput = (password: string) => setPassword(password);
    const handleEmailInput = (email: string) => setEmail(email);
    const handleOnSubmit = (loginData : IAuthProvider) => {
        // if (password === dummyData.password && email === dummyData.email){
        if (true){
            loginData.setIsLoggedIn(true);
            loginData.setEmail(email);
        }
    else
        console.log("invalid info");
    };

    const handleRegisterLink = () => props.navigation.navigate("register");



    return(
        <AuthContext.Consumer>
            {
                (auth) => (
                    <View style={styles.mainContainer}>
                        <Image source={logo} style={styles.imageStyles}/>
                        <View style={styles.inputContainer}>
                            <TextInput placeholder='Email' value={email} onChangeText={handleEmailInput} style={styles.inputStyles}/>
                            <TextInput placeholder='Password' value={password} onChangeText={handlePassInput} style={styles.inputStyles}/>
                        </View>
                        <View style={{margin: 10, width: 200}}>
                            <Button title="Login" onPress={() => handleOnSubmit(auth as IAuthProvider)}/>
                        </View>
                        <Text>Don't have an account? <Text style={{color: "#3543D3"}} onPress={handleRegisterLink}>Register</Text> a new account</Text>
                    </View>
                )
            }
        </AuthContext.Consumer>

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

export default Login;