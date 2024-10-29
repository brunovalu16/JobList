import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, FlatList, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../styles/styles';
import Participant from '../components/Participant/index';

export default function HomeScreen() {
  // Estado para os participantes
  const [participants, setParticipants] = useState<string[]>([]); // Inicializa como lista vazia
  const [newParticipant, setNewParticipant] = useState(''); // Para o TextInput
  const [taskCriadas, setTaskCriadas] = useState(0); // Para o campo "criadas"
  const [newTaskCriadas, setNewTaskCriadas] = useState(0); // Para o campo "criadas"
 
  



    {/*___________________________INÍCIO FUNÇÕES_________________________*/} 




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



// FUNÇÃO PARA COMBINAR O CLIQUE DO ADICIONAR TAREFA PARA ADD UMA NOVA TAREFA E ATUALIZAR O CAMPO "CRIADAS"
  const combinedHandleAdd = () => {
        handParticipantAdd();
        handleAddTask();
        
  };

  // FUNÇÃO PARA ATUALIZAR O CAMPO "CRIADAS"
  const handleAddTask = () => {
        setTaskCriadas(prevCount => prevCount + 1); // Incrementa taskCount como número
        setNewTaskCriadas(0); // Limpa o campo de entrada, assumindo que é do tipo number
  };


    
    // Função para resetar o valor de "criadas"
const handleRemoveTask = () => {
  setTaskCriadas(prevCount => (prevCount > 0 ? prevCount - 1 : 0)); // Decrementa taskCriadas, mas garante que não fique negativo
};
  
  





 


  {/*___________________________FIM FUNÇÕES_________________________*/} 

  




  return (
    <View style={styles.container}>


      {/*___________________________LOGOMARCA_________________________*/}


      
      <View>
        <Image style={styles.logo}  source={require('../../assets/JobList.png')} />
      </View>


      {/*___________________________TÍTULO E SUBTÍTULO_________________________*/}



      <View style={styles.titulo}>
        <Text style={styles.eventName}>Tarefas semanais</Text>
        <Text style={styles.eventDate}>Crie suas tarefas semanis</Text>
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

        <TouchableOpacity style={styles.button} onPress={combinedHandleAdd}>
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
                     {taskCriadas}
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
              onRemove={() => {
                handParticipantRemove(item); // Remove o participante específico da lista
                handleRemoveTask(); // Decrementa o contador de tarefas
              }}
              
            />
          )}
          ListEmptyComponent={() => (
            <Text style={styles.listEmptyText}>Adicione suas tarefas... </Text>
          )}
        />
      </View>
    </View>
  );
}
