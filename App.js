import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';

export default function App() {
  const [tarefa, setTarefa] = useState('');
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = () => {
    if (tarefa.trim() !== '') {
      setTarefas([...tarefas, { id: Date.now().toString(), texto: tarefa }]);
      setTarefa('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Tarefas</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite uma tarefa"
          value={tarefa}
          onChangeText={setTarefa}
        />
        <TouchableOpacity style={styles.botao} onPress={adicionarTarefa}>
          <Text style={styles.botaoTexto}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>{item.texto}</Text>
          </View>
        )}
        style={styles.lista}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
  },
  botao: {
    marginLeft: 10,
    backgroundColor: '#007AFF',
    borderRadius: 5,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 20,
  },
  lista: {
    marginTop: 10,
  },
  card: {
    padding: 15,
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
    marginBottom: 10,
  },
});
