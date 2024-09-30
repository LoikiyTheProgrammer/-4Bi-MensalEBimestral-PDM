import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },

    BackgroundImage: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },

    header: {
        width: '100%',
        height: '15%',
    },

    welcome: {
        width: '90%',
        height: '35%',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    welcomeText: {
        fontSize: 50,
        textAlign: 'center',
    },
    
    welcomeInfo: {
        fontSize: 25,
        textAlign: 'center',
    },

    main: {
        width: '95%',
        height: '35%',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },

    buttonSignIn: {
        width: '100%',
        height: 80,
        margin: 20,
        paddingHorizontal: '5%',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#0E86D4',
    },

    buttonSignInText: {
        fontSize: 30,
        color: '#fff',
    },

    buttonSignUp: {
        width: '100%',
        height: 80,
        margin: 20,
        paddingHorizontal: '5%',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#0E86D4',
    },

    buttonSignUpText: {
        fontSize: 30,
        color: '#fff',
    },

    footer: {
        width: '100%',
        height: '15%', 
    },
});

export default styles;