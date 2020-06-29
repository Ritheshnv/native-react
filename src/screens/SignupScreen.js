import React, { useState, useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/spacer';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Spacer>
                <Text h3>Sign up for Tracker</Text>
            </Spacer>
            <Input
                label="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Spacer />
            <Input
                label="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                autoCorrect={false}
                autoCapitalize="none"
            />
            {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null}
            <Spacer>
                <Button title="Sign Up" onPress={() => signup({ email, password })} />
            </Spacer>
            <Spacer>
                <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
                    <Text style={styles.link}>Already have an account? Sign in instead</Text>
                </TouchableOpacity>
            </Spacer>
        </View>
    )
};

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 200
    },
    errorMessage: {
        color: 'red',
        marginLeft: 15,
        marginTop: 15,
        fontSize: 16
    },
    link: {
        color: 'blue'
    }
});

export default SignupScreen;