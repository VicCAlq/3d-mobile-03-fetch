/*
  * ATIVIDADE 02: MUITOS ITENS
  *
  * Crie e exporte por padrão um componente chamado Atv02MuitosItens, que deve ter
  * uma <View>, e dentro desta <View> um <Pressable> com o conteúdo 
  * "Clique abaixo para carregar várias atividades", que quando pressionado
  * fará uma requisição usando "fetch" para a URL abaixo:
  *
  * https://jsonplaceholder.typicode.com/todos
  *
  * Esta URL envia uma lista de objetos JSON, cada um com as propriedades:
  * userId: número inteiro
  * id: número inteiro
  * title: texto
  * completed: booleano
  *
  * Ao receber este conteúdo, ele deve ser exibido da seguinte forma
  * dentro de uma <View> abaixo do <Pressable>, onde cada item será
  * um <Text> dentro dessa view:
  * [id] - [title]: [status]
  * Os colchetes indicam que deve se tratar de uma variável, e não
  * do texto dentro deles.
  * O valor de "status" deve ser "feito" se completed for true, 
  * ou "a fazer" se completed for false
  */
import React, { useState } from "react";
import { View, Pressable, Text } from "react-native";
export default function Atv02MuitosItens() {
  const [todos, setTodos] = useState([]);
  const carregarAtividades = async () => {
    try {
      const resposta = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const dados = await resposta.json();
      setTodos(dados);
    } catch (erro) {
      console.log(erro);
    }
  };
  return (
    <View>
      <Pressable onPress={carregarAtividades}>
        <Text>Clique abaixo para carregar várias atividades</Text>
      </Pressable>
      <View>
        {todos.map((item) => (
          <Text key={item.id}>
            {item.id} - {item.title}:{" "}
            {item.completed ? "feito" : "a fazer"}
          </Text>
        ))}
      </View>
    </View>
  );
}
