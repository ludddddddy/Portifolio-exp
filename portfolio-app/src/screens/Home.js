import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import api from '../services/api';

export default function Home() {
  const [perfil, setPerfil] = useState({});

  useEffect(() => {
    async function carregarPerfil() {
      const response = await api.get('/perfil');

      setPerfil(response.data);
    }

    carregarPerfil();
  }, []);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 28, fontWeight: 'bold' }}>
        {perfil.nome}
      </Text>

      <Text style={{ fontSize: 20 }}>
        {perfil.cargo}
      </Text>

      <Text style={{ marginTop: 20 }}>
        {perfil.sobre}
      </Text>
    </View>
  );
}