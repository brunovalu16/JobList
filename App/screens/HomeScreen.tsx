import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

// importando o estilo da patina "styles.ts"
import { styles } from '../styles/styles'; // Para exportação nomeada sem "defaut" - usa { styles }
//importar o componente
import Tarefas  from '../components/Tarefas/index';

export default function HomeScreen() {
  //useState para limitar a quantidade de caracteres no input
  const [tarefas, setNewTarefas] = useState<string[]>(['Bruno Valú']);
  const [newTarefas, setNewtarefas] = useState('');

  const [ useTarefas, setTarefas ] = useState(['Estudar para a prova']);

  // Função para limitar a quantidade de caracteres no input
  const handleTextChange = (text: string) => {
    if (text.length > 40) {
      setNewtarefas(text.substring(0, 40)); // Limita a 40 caracteres
    } else {
      setNewtarefas(text); // Caso contrário, atualiza normalmente
    }
  }

  function handletarefasAdd() {
    if (tarefas.includes(newTarefas)) {
      return Alert.alert('Essa Tarefa já existe', 'Por favor adicione outra' )
    }
  }

  function handletarefasRemove() {
    if (tarefas.includes('Estudar para a prova')) {
      return Alert.alert('Essa Tarefa já existe', 'Por favor adicione outra' )
    }
  }

  



  return (
    <View style={styles.container}>
      
      
      
      <View style={styles.form}>
        <TextInput style={styles.input}
            placeholder='Digite uma tarefa aqui...'
            placeholderTextColor={'#808080'}
            value={newTarefas} // Controla o valor do input
            onChangeText={setNewtarefas} // Limita os caracteres no input
        />

        <TouchableOpacity style={styles.button}>
            <Ionicons name="add" size={32} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.backgroundTop}>
        <Image style={styles.logo}  source={require('../../assets/JobList.png')} />
      </View>
        
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
      

      <Tarefas name="Estudar para a aula" onRemove={handletarefasRemove}/>
      
      
      
      
    </View>
  );
}



