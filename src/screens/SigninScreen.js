import React,{useContext} from 'react';
import { StyleSheet, View} from 'react-native';
import AuthForm from '../components/AuthForm';
import { Context as AuthContext } from '../context/AuthContext';
import NavLink from '../components/NavLink';
import { NavigationEvents } from 'react-navigation';

const SigninScreen = () => {
    const { state, signin, clearErrorMessage } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillBlur={clearErrorMessage}
            />
            <AuthForm
            headerText="Sign In to your Account"
            errorMessage={state.errorMessage}
            buttonTitle="Sign In"
            onSubmit={signin}
            />
            <NavLink
            routeName="Signup"
            text="Don't have an account? Sign up instead"
            />
        </View>
    )
}

SigninScreen.navigationOptions = () => {
    return {
        headerShown: false
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 200
    }
});

export default SigninScreen;