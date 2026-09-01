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
// Elementos necessários para o componente
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


export default function Atv02MuitosItens() {


  // Variável que vai armazenar a lista recebida
  const [resultado, setResultado] = useState(
    <Text>As atividades aparecerão aqui no lugar deste texto</Text>
  )


  // Função que vai carregar a lista do endereço listado.
  async function carregarUsuario() {

    // 1ª etapa: Enviar requisição
    // "fetch" é a função que envia uma mensagem para um endereço.
    await fetch(
      // Este é o endereço a ser acessado
      'https://jsonplaceholder.typicode.com/todos',

      // Aqui definimos o método da requisição
      { method: 'GET', }
    )

    // 2ª etapa: Receber e tratar a resposta
    .then((resposta) => {

      // Se a resposta não tiver um valor "ok", anunciamos um erro
      if (!resposta.ok) {
        throw new Error(Erro na requisição! Status: ${resposta.status});
      }

      // Se não der erro, convertemos o resultado para JavaScript
      return resposta.json()
    })

    // 3ª etapa: Usar o resultado
    .then((resultado) => {

      console.log(resultado)

      let usuario = (
        <View style={estilo.dados}>

          {resultado.map((item) => {

            let feito = ""

            if (item.completed === true) {
              feito = "feito"
            }
            else {
              feito = "a fazer"
            }

            return (
              <Text key={item.id}>
                {item.id} - {item.title}: {feito}
              </Text>
            )
          })}

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
        Clique abaixo para carregar várias atividades
      </Text>

      <Pressable
        style={estilo.botao}
        onPress={() => carregarUsuario()}
      >
        <Text style={estilo.textoBotao}>
          Carregar atividades
        </Text>
      </Pressable>

      {resultado}

    </View>
  )
}
