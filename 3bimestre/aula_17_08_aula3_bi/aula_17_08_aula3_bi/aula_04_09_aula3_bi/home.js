import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { useState } from 'react';
import styles from './Estilo';
import { adicionarTarefa } from './Funcoe';

export default function Home() {
  const [tarefa, setTarefa] = useState('');
  const [tarefas, setTarefas] = useState([]);

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Minhas Tarefas
      </Text>

      <Text style={styles.subtitulo}>
        Organize seu dia de forma simples
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite uma nova tarefa"
        value={tarefa}
        onChangeText={setTarefa}
      />

      <TouchableOpacity
        style={styles.botaoAdicionar}
        onPress={() =>
          adicionarTarefa(tarefa, tarefas, setTarefas, setTarefa)
        }
      >
        <Text style={styles.textoBotao}>
          + Adicionar tarefa
        </Text>
      </TouchableOpacity>

      <Text style={styles.tituloLista}>
        Minhas tarefas
      </Text>

      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.tarefa}>
            <Text style={styles.textoTarefa}>
              {item.nome}
            </Text>
          </View>
        )}
      />

    </View>
  );
}
