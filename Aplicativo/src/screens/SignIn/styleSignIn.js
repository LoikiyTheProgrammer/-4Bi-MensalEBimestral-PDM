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
        height: '10%',
    },

    welcome: {
        width: '90%',
        height: '40%',
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
        height: '40%',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    Input: {
        width: '100%',
        height: 70,
        margin: 10,
        paddingLeft: '5%',
        borderRadius: 10,
        fontSize: 25,
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0E86D4',
    },

    buttonSignIn: {
        width: '60%',
        height: 70,
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

    buttonReturn: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonReturnText: {
        fontSize: 30,
        color: '#68bbe3',
    },

    footer: {
        width: '100%',
        height: '10%', 
    },
});

export default styles;