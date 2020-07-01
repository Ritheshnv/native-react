import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Text, Button, Input} from 'react-native-elements';
import Spacer from '../components/spacer';

const AuthForm = ({headerText, errorMessage, onSubmit, buttonTitle}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
        <Spacer>
                <Text h3>{headerText}</Text>
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
            {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
            <Spacer>
                <Button title={buttonTitle} onPress={() => onSubmit({ email, password })} />
            </Spacer>
            </>
    )

}


const styles = StyleSheet.create({
    errorMessage: {
        color: 'red',
        marginLeft: 15,
        marginTop: 15,
        fontSize: 16
    }
})

export default AuthForm;