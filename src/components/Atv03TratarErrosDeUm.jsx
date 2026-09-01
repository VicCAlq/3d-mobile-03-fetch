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





export default function Atv03TratarErrosDeUm() {
    const [resultado, setResultado] = useState(<Text>O usuário aparecerá aqui no lugar deste texto</Text>)
  async function carregarAtividade() {
    await fetch(
      'https://jsonplaceholder.typicode.com/comments/20',
      { method: 'GET', }
    )
    .then((resposta) => {

      if (!resposta.ok) {
        throw new Error(`Erro na requisição! Status: ${resposta.status}`);}
      return resposta.json()
    })
    
     
    .then((resultado) => {
      const atividade=(
        <view style={estilo.dados}>
          <Text>{resultado.postId}: {resultado.id} - {resultado.email}</Text>
          <Text>{resultado.name}</Text>
          <Text>{resultado.body}</Text>
        
        </view>
      )
    

      

      setResultado(atividade) 
    })


    .catch((erro) => {
    console.log("Erro: ", erro)
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

