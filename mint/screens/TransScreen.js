import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TextInput, Button, FlatList } from 'react-native';
import { Searchbar, Divider } from 'react-native-paper';
import styles from '../styles/styles';
import axios from 'axios';

const TransScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Obtener las transacciones del servidor al montar el componente
    fetchTransactions();
  }, []);

  const handleSubmit = async () => {
    try {
      // Enviar los datos del formulario al servidor
      const newTransaction = { dinero: parseFloat(amount), descripcion: description };
      const response = await axios.post('http://localhost:3000/transacciones', newTransaction);

      // Actualizar la lista de transacciones con la nueva transacción
      setTransactions([...transactions, response.data]);

      // Limpia los campos después de enviar
      setAmount('');
      setDescription('');
    } catch (error) {
      console.error('Error al registrar transacción:', error);
    }
  };

  const fetchTransactions = async () => {
    try {
      const response = await axios.get('http://localhost:3000/transacciones');
      setTransactions(response.data);
    } catch (error) {
      console.error('Error al obtener transacciones:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/mint-logo.png')}></Image>
      <Text style={styles.title1}>Transacciones</Text>
      <Searchbar
        style={styles.searchbar}
        elevation={1}
        iconColor="#3E70A1"
        placeholder="Buscar"
        onChangeText={setSearchQuery}
        value={searchQuery}
      />

      <Text style={styles.title2}>Nueva Transacción</Text>
      <TextInput
        style={styles.input}
        placeholder="Monto"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      <TextInput
        style={styles.input}
        placeholder="Descripción"
        value={description}
        onChangeText={setDescription}
      />

      <Button title="Guardar" onPress={handleSubmit} />

      <FlatList
        data={transactions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>Monto: ${item.dinero}</Text>
            <Text>Descripción: {item.descripcion}</Text>
            <Divider />
          </View>
        )}
      />

      <StatusBar style="auto" />
    </View>
  );
};

export default TransScreen;