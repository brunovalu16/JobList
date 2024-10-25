import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { styles } from '../styles/styles';


export default function HomeScreen() {
  // Estado para os participantes
  const [participants, setParticipants] = useState<string[]>(['Bruno Valú']);
  const [newParticipant, setNewParticipant] = useState(''); // Para o TextInput

  // Função para adicionar participante
  function handParticipantAdd() {
    if (participants.includes(newParticipant)) {
      return Alert.alert('Já existe esse participante', 'Já existe um participante na lista com esse nome');
    }

    setParticipants([...participants, newParticipant]); // Adiciona o novo participante ao estado
    setNewParticipant(''); // Limpa o TextInput
  }

  // Função para remover participante
  function handParticipantRemove(name: string) {
    Alert.alert('Remover', `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => {
          setParticipants(prevState => prevState.filter(participant => participant !== name)); // Remove o participante do estado
          //Alert.alert('Deletado!');
        },
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Quarta, 23 de Outubro de 2024</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Digite um nome..."
          placeholderTextColor={'#7f7f7f'}
          value={newParticipant} // Vinculado ao estado
          onChangeText={setNewParticipant} // Atualiza o estado ao digitar
        />

        <TouchableOpacity style={styles.button} onPress={handParticipantAdd}>
          <Ionicons style={styles.iconadd} name="add" size={32} color="#fff" />
        </TouchableOpacity>
      </View>

      

      
     </View>
  );
}
