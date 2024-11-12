import React, { useState } from 'react';
import styles from './styleMain';
import { SafeAreaView, View, Image } from 'react-native';
import { Card, Button, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { FIREBASE_AUTH } from '../../firebase/index';
import { signOut } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Main() {
    const navigation = useNavigation();
    const [noteText, setNoteText] = useState('');

    const handleSignOut = async () => {
        const auth = FIREBASE_AUTH;
        try {
            await signOut(auth);
            console.log('User signed out successfully!');
            navigation.navigate('Home');
        } catch (error) {
            console.error('Sign out error:', error.message);
        }
    };

    const handleAddNote = async () => {
        try {
            const storedNotes = await AsyncStorage.getItem('notes');
            const notes = storedNotes ? JSON.parse(storedNotes) : [];
            const newNote = { id: Date.now().toString(), text: noteText };

            await AsyncStorage.setItem('notes', JSON.stringify([...notes, newNote]));
            setNoteText('');  // Limpa o campo de texto após salvar
            console.log('Nota adicionada com sucesso!');
        } catch (error) {
            console.error('Erro ao adicionar a nota:', error);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.BackgroundImage} source={require('../../assets/imgs/Background-Frufru.jpg')} />

            <View style={styles.main}>
                <Card>
                    <TextInput
                        mode='outlined'
                        label='Bloco de notas'
                        placeholder='Digite aqui'
                        value={noteText}
                        onChangeText={setNoteText}
                    />

                    <Card.Actions>
                        <Button onPress={() => navigation.navigate('Notepad')}>Ver notas salvas</Button>
                        <Button onPress={handleAddNote}>Adicionar nota</Button>
                    </Card.Actions>
                </Card>

                <Card.Actions>
                    <Button onPress={handleSignOut}>Sign Out</Button>
                </Card.Actions>
            </View>
        </SafeAreaView>
    );
}