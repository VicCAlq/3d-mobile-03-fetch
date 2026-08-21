
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
// Elementos necessários para o componente
import { View, Text, Pressable, StyleSheet } from 'react-native'
import { useState } from 'react'


// Estilos de "CSS"
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


export default function Exemplo02Tratamento() {

  const [resultado, setResultado] = useState(<Text>O usuário aparecerá aqui no lugar deste texto</Text>)

  async function carregarUsuario() {

    await fetch(

      'https://jsonplaceholder.typicode.com/todos',

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
      let usuario = resultado.map((item, i) => {
 
        return <View style={estilo.dados} key={i}>
          <Text>{item.id} - {item.email}</Text>
          <Text>{item.name}</Text>
          <Text>{item.body}</Text>
        </View>
      })
     
      setResultado(usuario)
    })

    .catch(error => {
      console.log("Erro: ", error)
    })
  }

  return(
    <View style={estilo.usuario}>
      <Text>
        Clique abaixo para carregar várias atividades
      </Text>
      <Pressable style={estilo.botao} onPress={() => carregarUsuario()}>
        <Text style={estilo.textoBotao}>Carregar usuário</Text>
      </Pressable>
      {resultado}
    </View>
  )
}