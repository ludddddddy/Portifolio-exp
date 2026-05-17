import { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import api from '../services/api';

export default function Home() {
  const [perfil, setPerfil] = useState({});
  const [erro, setErro] = useState('');

  useEffect(() => {
    async function carregarPerfil() {
      try {
        const response = await api.get('/perfil');

        console.log(response.data);

        setPerfil(response.data);
      } catch (error) {
        console.log(error);

        setErro('Erro ao conectar API');
      }
    }

    carregarPerfil();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.nome}>
        {perfil.nome || 'Carregando...'}
      </Text>

      <Text style={styles.cargo}>
        {perfil.cargo}
      </Text>

      <Text style={styles.sobre}>
        {perfil.sobre}
      </Text>

      <Text style={{ color: 'red', marginTop: 20 }}>
        {erro}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
    justifyContent: 'center',
    padding: 25,
  },

  nome: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
  },

  cargo: {
    fontSize: 20,
    color: '#38BDF8',
    marginTop: 10,
  },

  sobre: {
    color: '#CBD5E1',
    marginTop: 20,
    fontSize: 16,
  },
});