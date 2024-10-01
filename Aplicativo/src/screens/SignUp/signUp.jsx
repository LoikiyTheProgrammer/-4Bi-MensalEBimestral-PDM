import React, { useState } from 'react';
import styles from './styleSignUp';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { FIREBASE_AUTH } from '../../firebase/index';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function SignUp() {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async () => {
        const auth = FIREBASE_AUTH;
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            console.log('User created successfully!')
            navigation.navigate('Main')
        } catch (error) {
            console.error('Authentication error:', error.message)
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.BackgroundImage} source={require('../../assets/imgs/Background-Frifri.jpg')}/>
            <View style={styles.header}/>

            <View style={styles.welcome}>
                <Text style={styles.welcomeText}>Sign Up</Text>
                <Text style={styles.welcomeInfo}>Insira seus dados de acesso</Text>
            </View>

            <View style={styles.main}>
                <TextInput
                    style={styles.Input}
                    value={email}
                    onChangeText={setEmail}
                    placeholder='Digite seu e-mail'
                    placeholderTextColor={'#fff'}
                    keyboardType='email-address'
                />

                <TextInput
                    style={styles.Input}
                    value={password}
                    onChangeText={setPassword}
                    placeholder='Digite sua senha'
                    placeholderTextColor={'#fff'}
                    secureTextEntry={true}
                />

                <TouchableOpacity style={styles.buttonSignUp} onPress={handleSignUp}>
                    <Text style={styles.buttonSignUpText}>Criar</Text>
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