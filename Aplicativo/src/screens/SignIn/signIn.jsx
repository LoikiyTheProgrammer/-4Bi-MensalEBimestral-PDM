import React, { useState } from 'react';
import styles from './styleSignIn';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { FIREBASE_AUTH } from '../../firebase/index';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function SignIn() {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async () => {
        const auth = FIREBASE_AUTH;
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log('Usuário logado com sucesso:');
            navigation.navigate('Main');
        } catch (error) {
            console.error('Erro no login de usuário:', error.message);
        }
    };

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
                    value={email}
                    onChangeText={setEmail}
                    placeholder='E-mail'
                    placeholderTextColor={'#fff'}
                    keyboardType='email-address'
                />

                <TextInput
                    style={styles.Input}
                    value={password}
                    onChangeText={setPassword}
                    placeholder='Senha'
                    placeholderTextColor={'#fff'}
                    secureTextEntry={true}
                />

                <TouchableOpacity style={styles.buttonSignIn} onPress={handleSignIn}>
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