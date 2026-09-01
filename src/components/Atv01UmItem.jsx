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



import { View, Text, Pressable, StyleSheet } from 'react-native'
import { useState } from 'react'

const estilo = StyleSheet.create({
  dados: {cd
    backgroundColor: "#b78",
    padding: "5px",
    borderRadius: "5px",
    margin: "10px",
  },

  texBotao: {
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
    const [resultado, setResultado] = useState(<Text>O usuário aparecerá aqui no lugar deste texto</Text>)
  async function carregarAtividade() {
    await fetch(
      'https://jsonplaceholder.typicode.com/todos/1',
      { method: 'GET', }
    )
    .then((resposta) => {
      return resposta.json()
    })
    .then((resultado) => {
            console.log(resultado)

      const atividade = (<View style={estilo.dados}>
        <Text>{resultado.id} - {resultado.title}: {resultado.completed ? 'feito' : 'a fazer'}
          </Text>
        </View>
      )

      setResultado(atividade) 
    })
  }


  return(
    <View>

    <Pressable
        style={estilo.botao}
        onPress={() => carregarAtividade()}>
        <Text style={estilo.texBotao}>
        Carregue a atividade abaixo:
      </Text>

      </Pressable>
      {resultado}
    </View>
  )
}


