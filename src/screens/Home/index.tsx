import React, { useState } from 'react';
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Participant from '../../components/Participant';
import { styles } from './styles';

export default function Home() {
  const [name, setName] = useState('');
  const [participants, setParticipants] = useState([
    'Alice',
    'Bob',
    'Charlie',
    'Diana',
    'Ethan',
    'Fiona',
    'George',
    'Hannah',
    'Isaac',
    'Julia',
    'Kevin',
    'Lily',
    'Mason',
    'Nora',
    'Oliver',
    'Penelope',
    'Quentin',
    'Rose',
    'Samuel',
    'Tara',
  ]);

  function handleParticipantAdd() {
    console.log('Vc is already');
  }

  //----------------------------------------------------------------

  function handleparticipantRemove(name: string) {
    console.log(`Participante removido ${name}`);
    // Implementar a função para remover o participante do evento
  }
  //----------------------------------------------------------------
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sabádo, 08 de Março de 2025.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome do participante"
          placeholderTextColor="#cbcbcb"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant key={item} name={item} onRemove={() => handleparticipantRemove(item)} />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.emptyListText}>Nenhum participante cadastrado.</Text>
        )}
      />
    </View>
  );
}
