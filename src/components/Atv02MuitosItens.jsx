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
  
import { View, Text, Pressable, StyleSheet } from 'react-native'
import { useState } from 'react'

const estilo = StyleSheet.create({
  usuario: {
    backgroundColor: "#8ac",
    padding: "10px",
    borderRadius: "10px",
    margin: "20px",
  },

  dados: {
    backgroundColor: "#68a",
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





export default function Atv02MuitosItens() {
    const [resultado, setResultado] = useState(<Text>O usuário aparecerá aqui no lugar deste texto</Text>)
  async function carregarAtividade() {

    await fetch(
  'https://jsonplaceholder.typicode.com/todos'
      { method: 'GET', }
    )
    .then((resposta) => {
      if (!resposta.ok) {
        throw new Error(`Erro na requisição! Status: ${resposta.status}`);
      }
      return resposta.json()
    })



    .then((resultado) => {
            console.log(resultado)

      const atividades = resultado.map((atividade) => (
        <Text>
          {atividade.id} - {atividade.title}: {
            atividade.completed ? 'feito' : 'a fazer'}
        </Text>
      ))
    const lista = ( <view style={estilo.dados}> {atividade} </view>)

      setResultado(lista) 
    })
    .catch((erro)=> {
      console.log("Erro: ", erro)
    })
  }


  return(
    <View style={estilo.usuario}>

    <Pressable
        style={estilo.botao}
        onPress={() => carregarAtividade()}>
        <Text style={estilo.texBotao}>
        Carregue as atividades abaixo:
      </Text>

      </Pressable>
      {resultado}
    </View>
  )
}

