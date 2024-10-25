import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={{ padding: 20 }}>
      <Text>Cadastrar</Text>
      <TextInput 
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
      <TextInput 
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
      <Button 
        title="Cadastrar"
        onPress={() => navigation.navigate('Login')} // Redireciona para a tela de login
      />
    </View>
  );
}
