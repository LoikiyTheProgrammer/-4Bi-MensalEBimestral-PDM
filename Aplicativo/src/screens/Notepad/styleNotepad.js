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
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    scrollview: {
        width: '80%',
        paddingHorizontal: '5%',
        backgroundColor: '#fff',
    },

    card: {
        marginVertical: '5%',
    }
});

export default styles;