import React from 'react';
import styles from './styleHome';
import { SafeAreaView, View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.BackgroundImage} source={require('../../assets/imgs/Background-Frufru.jpg')}/>
            <View style={styles.header}/>

            <View style={styles.welcome}>
                <Text style={styles.welcomeText}>Início</Text>
                <Text style={styles.welcomeInfo}>Escolha um modo de acesso</Text>
            </View>

            <View style={styles.main}>
                <TouchableOpacity style={styles.buttonSignIn} onPress={ () => navigation.navigate('SignIn')}>
                    <Text style={styles.buttonSignInText}>Sign In</Text>
                    <Icon name='arrowright' size={40} color='#fff'/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonSignUp} onPress={ () => navigation.navigate('SignUp')}>
                    <Text style={styles.buttonSignUpText}>Sign Up</Text>
                    <Icon name='plus' size={40} color='#fff'/>
                </TouchableOpacity>
            </View>

            <View style={styles.footer}/>
        </SafeAreaView>
    );
}