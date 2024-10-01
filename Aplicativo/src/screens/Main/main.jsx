import React from 'react';
import styles from './styleMain';
import { SafeAreaView, View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { FIREBASE_AUTH } from '../../firebase/index';
import { signOut } from 'firebase/auth';

export default function Main() {
    const navigation = useNavigation();

    const handleSignOut = async () => {
        const auth = FIREBASE_AUTH;
        try {
            await signOut(auth)
            console.log('User signed out successfully!')
            navigation.navigate('Home')
        } catch (error) {
            console.error('Sign out error:', error.message)
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.BackgroundImage} source={require('../../assets/imgs/Background-Frufru.jpg')}/>

            <View style={styles.main}>
                <TouchableOpacity style={styles.buttonSignOut} onPress={handleSignOut}>
                    <Text style={styles.buttonSignOutText}>Sign Out</Text>
                    <Icon name='close' size={40} color='#fff'/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}