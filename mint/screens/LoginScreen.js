import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Text, SafeAreaView, View, TextInput, Button, Image, Alert } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../components/login-styles.js';
import { Card } from 'react-native-paper';

import HomeScreen from '../screens/HomeScreen';

const LogoImage = require('../assets/logo.png');

const correctEmail = 'jasiel@gmail.com'; // Define el email correcto
const correctPassword = 'jasiel123'; // Define la contraseña correcta

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleLogin = () => {
    if (email === correctEmail && password === correctPassword) {
      Alert.alert('¡INICIO DE SESIÓN EXITOSO!', '¡Bienvenid@ a la aplicación!');
      navigation.navigate('Home');
    } else {
      Alert.alert('ERROR DE INICIO DE SESIÓN ', 'Credenciales incorrectas.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Logo */}
      <Image source={LogoImage} style={styles.logo} />

      {/* Títulos */}
      <Text style={styles.title1}>INICIAR</Text>
      <Text style={styles.title2}>SESION</Text>

      {/* Contenido del cuadro */}
      <Card style={styles.halfScreenCard}>
        {/* Campos de entrada */}
        <View style={styles.inputContainer}>
          <View>
            <Text style={styles.inputTitle}>Correo electrónico</Text>
            <View style={styles.inputWithIcon}>
              <Icon name="envelope" size={20} color="#3E70A1" style={{ marginRight: 10 }} />
              <TextInput
                style={styles.input}
                placeholder="Correo electrónico"
                value={email}
                onChangeText={setEmail}
              />
            </View>
          </View>

          <View>
            <Text style={styles.inputTitle}>Contraseña</Text>
            <View style={styles.inputWithIcon}>
              <Icon name="lock" size={20} color="#3E70A1" style={{ left: 3, marginRight: 16 }} />
              <TextInput
                style={styles.input}
                placeholder="Contraseña"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
            </View>
          </View>
        </View>

        {/* Botón de inicio de sesión */}
        <View style={styles.buttonContainer}>
          <Button title="Iniciar Sesión" color="#3E70A1" onPress={handleLogin} />
        </View>

        <View style={styles.separator}></View>
      </Card>
    </SafeAreaView>
  );
};

export default LoginScreen;