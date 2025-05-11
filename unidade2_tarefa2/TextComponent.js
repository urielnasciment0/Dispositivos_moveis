import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { colorSubject } from './ButtonComponent';

const TextComponent = () => {
  // Estado para armazenar a cor do texto
  const [textColor, setTextColor] = useState('red');

  // Inscrever-se no observable para atualizar a cor
  useEffect(() => {
    const subscription = colorSubject.subscribe((color) => {
      setTextColor(color);
    });

    // Limpar a inscrição ao desmontar o componente
    return () => subscription.unsubscribe();
  }, []);

  return (
    <View style={{ margin: 20 }}>
      <Text style={{ color: textColor, fontSize: 20 }}>
        Texto com cor alternável
      </Text>
    </View>
  );
};

export default TextComponent;