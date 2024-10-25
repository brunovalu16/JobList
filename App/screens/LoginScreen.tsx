import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

interface LoginScreenProps {
  navigation: NavigationProp<any>; // Definindo o tipo de navigation
}

export default function LoginScreen({ navigation }: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={{ padding: 20 }}>
      <Text>Login</Text>

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
        title="Entrar"
        onPress={() => navigation.navigate('Home')} // Redireciona para a tela Home
      />

      <Button 
        title="Cadastrar"
        onPress={() => navigation.navigate('Register')} // Redireciona para a tela de cadastro
      />
    </View>
  );
}
