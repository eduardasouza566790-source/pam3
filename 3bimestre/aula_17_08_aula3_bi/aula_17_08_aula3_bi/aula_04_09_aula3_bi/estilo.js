import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5F7FB',
    padding: 25,
    paddingTop: 60,
  },

  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#252A34',
    marginBottom: 8,
  },

  subtitulo: {
    fontSize: 16,
    color: '#777',
    marginBottom: 30,
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E1E5EB',
    marginBottom: 15,
  },

  botaoAdicionar: {
    backgroundColor: '#6C63FF',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 30,
  },

  textoBotao: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },

  tituloLista: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#252A34',
    marginBottom: 15,
  },

  tarefa: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 12,
    marginBottom: 12,
    borderLeftWidth: 5,
    borderLeftColor: '#6C63FF',
    elevation: 2,
  },

  textoTarefa: {
    fontSize: 17,
    color: '#333',
  },

});
