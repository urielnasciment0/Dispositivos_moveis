import React, { useState } from 'react';
import { Button, View } from 'react-native';
import { Subject } from 'rxjs';

// Cria um observable para compartilhar a cor
export const colorSubject = new Subject();

const ButtonComponent = () => {
  // Estado para gerenciar a cor atual
  const [color, setColor] = useState('red');

  // Função para alternar a cor
  const toggleColor = () => {
    const newColor = color === 'red' ? 'blue' : 'red';
    setColor(newColor);
    // Emitir a nova cor para o observable
    colorSubject.next(newColor);
  };

  return (
    <View style={{ margin: 20 }}>
      <Button title="Alternar Cor" onPress={toggleColor} />
    </View>
  );
};

export default ButtonComponent;