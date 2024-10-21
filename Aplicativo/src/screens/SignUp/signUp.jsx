import React, { useState } from 'react';
import styles from './styleSignUp';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { TextInputMask } from 'react-native-masked-text';
import { useNavigation } from '@react-navigation/native';
import { FIREBASE_AUTH, FIREBASE_DB } from '../../firebase/index';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

export default function SignUp() {
    const navigation = useNavigation();

    const [fullName, setFullName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = async () => {
        const auth = FIREBASE_AUTH;

        if (password !== confirmPassword) {
            console.error('As senhas não são iguais!');
            return;
        }

        const userData = {
            fullName,
            birthDate,
            email,
            password,
        };

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, userData.email, userData.password);
            const user = userCredential.user;

            await setDoc(doc(FIREBASE_DB, 'Users', user.uid), {
                FullName: userData.fullName,
                BirthDate: userData.birthDate,
                Email: userData.email,
            });

            console.log('Usuário registrado com sucesso:');
            navigation.navigate('Main');
        } catch (error) {
            console.error('Erro no cadastro de usuário:', error.message);
        }
    };

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
                    value={fullName}
                    onChangeText={setFullName}
                    placeholder='Nome completo'
                    placeholderTextColor={'#fff'}
                />

                <TextInputMask
                    style={styles.Input}
                    value={birthDate}
                    onChangeText={setBirthDate}
                    type={'datetime'}
                    options={{
                        format: 'DD/MM/YYYY'
                    }}
                    placeholder='Data de nascimento'
                    placeholderTextColor={'#fff'}
                />

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

                <TextInput
                    style={styles.Input}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    placeholder='Confirmar senha'
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