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


// Elementos necessários para o componente

import { View, Text, Pressable, StyleSheet } from 'react-native'
import { useState } from 'react'

const estilo = StyleSheet.create({
  usuario: {
    backgroundColor: "#dac",
    padding: "10px",
    borderRadius: "10px",
    margin: "20px",
  },
  dados: {
    backgroundColor: "#b78",
    padding: "5px",
    borderRadius: "5px",
    margin: "10px",
  },
  textoBotao: {
    color: "#eee",
    fontSize: "16px",
  },
  botao: {
    borderRadius: "5px",
    backgroundColor: "#505560",
    padding: "10px",
    margin: "10px",
  },
})

export default function Atv01UmItem() {


  const [conclusao, setConclusao] = useState(<Text>O usuário aparecerá aqui no lugar deste texto</Text>)

  async function carregarUsuario() {
   
    await fetch(
      'https://jsonplaceholder.typicode.com/todos/1',
      { method: 'GET', }
    )
   
    .then((resposta) => {
      
      return resposta.json()
    })
   
    .then((resultado) => {

      console.log(resultado)

      let feito = ""

      if (resultado.completed === true) {
        feito = "feito"
      } else {
        feito = "a fazer"
      }
  
      const usuario = <View style={estilo.dados}>
        <Text>{resultado.id} - {resultado.title}: {feito}</Text>
      </View>

   
      setConclusao(usuario)
    })
  }

  
  return(
    <View style={estilo.usuario}>
      <Text>
        Carregue o usuário abaixo:
      </Text>
      <Pressable style={estilo.botao} onPress={() => carregarUsuario()}>
        <Text style={estilo.textoBotao}>Carregar usuário</Text>
      </Pressable>
      {conclusao}
    </View>
  )
}
