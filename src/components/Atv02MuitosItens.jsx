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

// Estilos de "CSS"
const estilo = StyleSheet.create({
  usuario: {
    backgroundColor: "#8c8",
    padding: "10px",
    borderRadius: "10px",
    margin: "20px",
  },
  dados: {
    backgroundColor: "#6a6",
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
  const [resultado, setResultado] = useState(<Text>A lista de usuários aparecerá aqui no lugar deste texto</Text>)

  // Função que vai carregar a lista do endereço listado.
  async function carregarLista() {
    // 1ª etapa: Enviar requisição
    await fetch(
      'https://jsonplaceholder.typicode.com/todos',
      { method: 'GET', }
    )
    // 2ª etapa: Receber e tratar a resposta
    .then((resposta) => {
      return resposta.json()
    })
    // 3ª etapa: Usar o resultado
    .then((resultado) => {
      // Aqui como se trata de uma lista de usuários, usaremos um método
      // chamado "map", que funciona como um loop de "for item in lista"
      const listaDeUsuarios = <View>
        {resultado.map((conteudo) => {
          return <View style={estilo.dados}>
            <Text>{conteudo.id} - {conteudo.title}:  </Text>
           
          </View>
        })}
      </View>

      // Jogamos o valor da lista de itens a serem exibidos para
      // a variável de estado "lista"
      setResultado(listaDeUsuarios)
    })
  
  // Parte visual do componente
  return(
    <View style={estilo.usuario}>
      <Text>
        Carregue a lista de usuários abaixo:
      </Text>
      <Pressable style={estilo.botao} onPress={() => carregarLista()}>
        <Text style={estilo.textoBotao}>Carregar usuário</Text>
      </Pressable>
      {resultado}
    </View>
  )
}
