import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, FlatList, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../styles/styles';
import Participant from '../components/Participant/index';

export default function HomeScreen() {
  // Estado para os participantes
  const [participants, setParticipants] = useState<string[]>([]); // Inicializa como lista vazia
  const [newParticipant, setNewParticipant] = useState(''); // Para o TextInput
  

 

  // Função para adicionar participante
  function handParticipantAdd() {
    if (participants.includes(newParticipant)) {
      return Alert.alert('Já existe essa tarefa', 'Adicione outra...');
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


      {/*___________________________LOGOMARCA_________________________*/}


      
      <View>
        <Image style={styles.logo}  source={require('../../assets/JobList.png')} />
      </View>

      <View>
        <Text style={styles.eventName}>Tarefas semanais</Text>
        <Text style={styles.eventDate}>Quarta, 23 de Outubro de 2024</Text>
      </View>
      


      

      {/*___________________________INPUT DE ADICIONAR TAREFAS_________________________*/}



      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Digite uma tarefa..."
          placeholderTextColor={'#7f7f7f'}
          value={newParticipant} // Vinculado ao estado
          onChangeText={setNewParticipant} // Atualiza o estado ao digitar
        />

        <TouchableOpacity style={styles.button} onPress={handParticipantAdd}>
          <Ionicons style={styles.iconadd} name="add" size={32} color="#fff" />
        </TouchableOpacity>
      </View>


      {/*___________________________CRIADAS E CONCLUÍDAS_________________________*/}



      <View style={styles.contagem}>
        <View style={styles.criadasContainer}>
              <Text style={styles.criadas}>
                  Criadas
              </Text>

              <View style={styles.caixaCriadas}>
                  <Text style={styles.numeroCriadas}>
                      0
                  </Text>
              </View>
        </View>
        
        <View style={styles.concluidasContainer}>
            <Text style={styles.concluidas}>
                Concluídas
            </Text>

            <View style={styles.caixaConcluidas}>
                <Text style={styles.numeroConcluidas}>
                    0
                </Text>
            </View>
        </View>
      </View>


      {/*___________________________FLATLIST_________________________*/}




      <View style={styles.flatList}>
        <FlatList
          data={participants}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Participant
              key={item}
              name={item}
              onRemove={() => handParticipantRemove(item)}
            />
          )}
          ListEmptyComponent={() => (
            <Text style={styles.listEmptyText}>Adicione participantes do evento.</Text>
          )}
        />
      </View>
    </View>
  );
}
