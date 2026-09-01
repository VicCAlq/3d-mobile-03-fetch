/*
  * ATIVIDADE 03: TRATAR ERROS DE UM
  *
  * Crie e exporte por padrão um componente chamado Atv03TratarErrosDeUm, que deve ter
  * uma <View>, e dentro desta <View> um <Pressable> com o conteúdo 
  * "Clique abaixo para carregar uma atividade", que quando pressionado
  * fará uma requisição usando "fetch" para a URL abaixo:
  *
  * https://jsonplaceholder.typicode.com/comments/20
  *
  * Esta URL envia um objeto JSON com as propriedades:
  * postId: número inteiro
  * id: número inteiro
  * name: texto
  * email: texto
  * body: texto
  *
  * Ao receber este conteúdo, você deve tratar ele dentro do primeiro ".then"
  * para verificar se existe um "ok" dentro da resposta, e tratar por erros
  * de requisição após o segundo ".then" dentro de um ".catch".
  *
  * No segundo ".then" o valor recebido deve ser exibido da forma abaixo:
  * Dentro de um elemento <View> abaixo do <Pressable>:
  * <Text>[postId]: [id] - [email]</Text>
  * <Text>[name]</Text>
  * <Text>[body]</Text>
  * Os colchetes indicam que deve se tratar de uma variável, e não
  * do texto dentro deles.
  */
import React, { useState } from "react";
import { View, Pressable, Text } from "react-native";
export default function Atv03TratarErrosDeUm() {
  const [comentario, setComentario] = useState(null);
  const carregarComentario = () => {
    fetch("https://jsonplaceholder.typicode.com/comments/20")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro na requisição");
        }
        return response.json();
      })
      .then((dados) => {
        setComentario(dados);
      })
      .catch((erro) => {
        console.log("Erro:", erro);
      });
  };
  return (
    <View>
      <Pressable onPress={carregarComentario}>
        <Text>Clique abaixo para carregar uma atividade</Text>
      </Pressable>
      {comentario && (
        <View>
          <Text>
            {comentario.postId}: {comentario.id} - {comentario.email}
          </Text>
          <Text>{comentario.name}</Text>
          <Text>{comentario.body}</Text>
        </View>
      )}
    </View>
  );
}
