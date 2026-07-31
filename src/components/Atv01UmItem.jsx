/*
  * ATIVIDADE 01: UM ITEM
  *
  * Crie e exporte por padrão um componente chamado Atv01UmItem, que deve ter
  * uma <View>, e dentro desta <View> um <Pressable> com o conteúdo 
  * "Clique abaixo para carregar uma atividade", que quando pressionado
  * fará uma requisição usando "fetch" para a URL abaixo:
  *
  * https://jsonplaceholder.typicode.com/todos/1
  *
  * Esta URL envia um objeto JSON com as propriedades:
  * userId: número inteiro
  * id: número inteiro
  * title: texto
  * completed: booleano
  *
  * Ao receber este conteúdo, ele deve ser exibido da seguinte forma
  * dentro de um elemento <Text> abaixo do <Pressable>:
  * [id] - [title]: [status]
  * Os colchetes indicam que deve se tratar de uma variável, e não
  * do texto dentro deles.
  * O valor de "status" deve ser "feito" se completed for true, 
  * ou "a fazer" se completed for false
  */

import React, { useState } from "react";
import { View, Pressable, Text } from "react-native";

export default function Atv01UmItem() {
  const [atividade, setAtividade] = useState();

 } await fetch 
    ("https://jsonplaceholder.typicode.com/todos/1"
    ,{ method: 'GET', }
    )
        .then((resposta) => {
      console.log(resposta)
      return resposta.json()
    })
    .then((resultado) => {
      console.log(resultado)
      .catch((error) => {
        console.error("Erro ao carregar atividade:", error);
              const usuario = <View style={estilo.dados}>
                <Text>Nome: {resultado.name}</Text>
                <Text>Email: {resultado.email}</Text>
                <Text>Site: {resultado.website}</Text>
                <Text>Telefone: {resultado.phone}</Text>
              </View>
        
              setResultado(usuario)
      });
  })};

  return (
    <View>
      <Pressable onPress={carregarAtividade}>
        <Text>Clique abaixo para carregar uma atividade</Text>
      </Pressable>

      {atividade  (
        <Text>
          {atividade.id} - {atividade.title}:{" "}
          {atividade.completed ? "feito" : "a fazer"}
        </Text>
      )}
    </View>
  );
}
