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

    main: {
        width: '95%',
        height: '40%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonSignOut: {
        width: '60%',
        height: 80,
        margin: 20,
        paddingHorizontal: '5%',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'red',
    },

    buttonSignOutText: {
        fontSize: 30,
        color: '#fff',
    },
});

export default styles;