import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import Registration from "./src/screens/auth/Registration";
import {createStackNavigator} from "@react-navigation/stack";
import Login from "./src/screens/auth/Login";
import Events from "./src/screens/event/Events";
import {NavigationContainer} from "@react-navigation/native";
import {AuthProvider, AuthContext} from "./src/providers/AuthProvider";
import Profile from "./src/screens/profile/Profile";

export default function App() {
    const AuthStack = createStackNavigator();
    const AppStack = createStackNavigator();

    const AuthStackScreens = () => {
        return (
            <AuthStack.Navigator initialRouteName="register">
                <AuthStack.Screen name="register" component={Registration} options={{headerShown: false}}/>
                <AuthStack.Screen name="login" component={Login} options={{headerShown: false}}/>
            </AuthStack.Navigator>
        )
    }

    const AppStackScreens = () => {
        return (
            <AppStack.Navigator initialRouteName="event">
                    <AppStack.Screen name="event" component={Events} options={{headerShown: false}}/>
                    <AppStack.Screen name="profile" component={Profile} options={{headerShown: false}}/>
            </AppStack.Navigator>
        )
    }


    return (
        <AuthProvider>
            <AuthContext.Consumer>
                {
                    (auth) =>
                        <NavigationContainer>
                            {auth?.isLoggedIn ? <AppStackScreens/> : <AuthStackScreens/>}
                        </NavigationContainer>
                }
            </AuthContext.Consumer>
        </AuthProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
});
