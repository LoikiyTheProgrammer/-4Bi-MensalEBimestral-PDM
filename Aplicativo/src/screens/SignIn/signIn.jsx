import React from 'react';
import styles from './styleSignIn';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

export default function SignIn() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.BackgroundImage} source={require('../../assets/imgs/Background-Frifri.jpg')}/>
            <View style={styles.header}/>

            <View style={styles.welcome}>
                <Text style={styles.welcomeText}>Sign In</Text>
                <Text style={styles.welcomeInfo}>Insira seus dados de acesso</Text>
            </View>

            <View style={styles.main}>
                <TextInput
                    style={styles.Input}
                    placeholder='Digite seu e-mail'
                    placeholderTextColor={'#fff'}
                    keyboardType='email-address'
                />

                <TextInput
                    style={styles.Input}
                    placeholder='Digite sua senha'
                    placeholderTextColor={'#fff'}
                    secureTextEntry={true}
                />

                <TouchableOpacity style={styles.buttonSignIn} onPress={ () => navigation.navigate('Main')}>
                    <Text style={styles.buttonSignInText}>Entrar</Text>
                    <Icon name='arrowright' size={40} color='#fff'/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonReturn} onPress={ () => navigation.navigate('Home')}>
                    <Text style={styles.buttonReturnText}>Voltar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.footer}/>
        </SafeAreaView>
    );
}