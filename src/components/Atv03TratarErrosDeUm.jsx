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


export default function Atv03TratarErrosDeUm() {


  // Variável que vai armazenar a lista recebida
  const [resultado, setResultado] = useState(
    <Text>O usuário aparecerá aqui no lugar deste texto</Text>
  )


  // Função que vai carregar a lista do endereço listado.
  async function carregarUsuario() {

    // 1ª etapa: Enviar requisição
    // "fetch" é a função que envia uma mensagem para um endereço.
    await fetch(

      // Este é o endereço a ser acessado
      'https://jsonplaceholder.typicode.com/comments/20',

      // Aqui definimos o método da requisição
      { method: 'GET', }
    )

    // 2ª etapa: Receber e tratar a resposta
    .then((resposta) => {

      // Se a resposta não tiver um valor "ok", anunciamos um erro
      if (!resposta.ok) {
        throw new Error(`Erro na requisição! Status: ${resposta.status}`);
      }

      // Se não der erro, convertemos o resultado para JavaScript
      return resposta.json()
    })

    // 3ª etapa: Usar o resultado
    .then((resultado) => {

      console.log(resultado)

      const usuario = (
        <View style={estilo.dados}>

          <Text>
            {resultado.postId}: {resultado.id} - {resultado.email}
          </Text>

          <Text>
            {resultado.name}
          </Text>

          <Text>
            {resultado.body}
          </Text>

        </View>
      )

      // Jogamos o valor da lista de itens a serem exibidos para
      // a variável de estado "resultado"
      setResultado(usuario)
    })

    // Se houverem erros mais severos, estes são tratados na função de
    // "catch" abaixo:
    .catch(error => {
      console.log("Erro: ", error)
    })
  }


  // Parte visual do componente
  return(
    <View style={estilo.usuario}>

      <Text>
        Clique abaixo para carregar uma atividade
      </Text>

      <Pressable
        style={estilo.botao}
        onPress={() => carregarUsuario()}
      >
        <Text style={estilo.textoBotao}>
          Carregar atividade
        </Text>
      </Pressable>

      {resultado}

    </View>
  )
}
