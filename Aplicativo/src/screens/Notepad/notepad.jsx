import React, { useState, useEffect } from 'react';
import styles from './styleNotepad';
import { SafeAreaView, View, ScrollView, Image } from 'react-native';
import { Card, Button, Text } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function Notepad() {
    const navigation = useNavigation();
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const storedNotes = await AsyncStorage.getItem('notes');
                if (storedNotes) {
                    setNotes(JSON.parse(storedNotes));
                }
            } catch (error) {
                console.error('Erro ao carregar notas:', error);
            }
        };

        fetchNotes();
    }, []);

    const handleDeleteNote = async (id) => {
        try {
            const updatedNotes = notes.filter(note => note.id !== id);
            setNotes(updatedNotes);

            await AsyncStorage.setItem('notes', JSON.stringify(updatedNotes));
            console.log('Nota deletada com sucesso!');
        } catch (error) {
            console.error('Erro ao deletar nota:', error);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.BackgroundImage} source={require('../../assets/imgs/Background-Frufru.jpg')} />

            <View style={styles.main}>
                <ScrollView style={styles.scrollview}>
                    {notes.map(note => (
                        <Card style={styles.card} key={note.id}>
                            <Card.Content>
                                <Text variant='bodyMedium'>{note.text}</Text>
                            </Card.Content>

                            <Card.Actions>
                                <Button onPress={() => handleDeleteNote(note.id)}>Deletar</Button>
                            </Card.Actions>
                        </Card>
                    ))}
                </ScrollView>

                <Card.Actions>
                    <Button onPress={() => navigation.navigate('Main')}>Voltar</Button>
                </Card.Actions>
            </View>
        </SafeAreaView>
    );
}