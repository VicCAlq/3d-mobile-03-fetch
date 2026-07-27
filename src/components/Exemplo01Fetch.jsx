// Elementos necessários para o componente
import { View, Text, Pressable, StyleSheet } from 'react-native'
import { useState } from 'react'

// Estilos de "CSS"
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

export default function Exemplo01Fetch() {

  // Variável que vai armazenar a lista recebida
  const [resultado, setResultado] = useState(<Text>O usuário aparecerá aqui no lugar deste texto</Text>)

  // Função que vai carregar os dados do endereço listado.
  // Como ela depende de um resultado que não depende apenas do
  // próprio programa, ela se trada de uma função "assíncrona"
  async function carregarUsuario() {
    // 1ª etapa: Enviar a requisição
    // "fetch" é a função que envia uma mensagem para um endereço.
    // O resultado de "fetch" é assíncrono: ele entrega uma "Promessa"
    // de resultado, que quando concluída tem seu resultado processado.
    await fetch(
      // Este é o endereço a ser acessado
      'https://jsonplaceholder.typicode.com/users/1',
      // Aqui definimos o método da requisição
      { method: 'GET', }
    )
    // 2ª etapa: Tratar a resposta
    // O ".then" abaixo define código a ser executado quando o "fetch"
    // traz seu resultado. Ele traz o resultado em um formato que precisa
    // ser convertido para código JavaScript
    .then((resposta) => {
      // convertemos o resultado para JavaScript
      return resposta.json()
    })
    // 3ª etapa: Usar a resposta
    // O próximo ".then" é onde definimos o que fazer com o resultado
    // já processado do "fetch". Estamos aqui chamando o resultado de "resultado"
    .then((resultado) => {
      // Aqui enviamos para o console do navegador. No site, aperte F12
      // e na janela que aparecer mude para a aba do "console"
      // para ver este resultado
      console.log(resultado)

      // O código abaixo vai organizar as informações recebidas em
      // elementos do React Native:
      const usuario = <View style={estilo.dados}>
        <Text>Nome: {resultado.name}</Text>
        <Text>Email: {resultado.email}</Text>
        <Text>Site: {resultado.website}</Text>
      </View>

      // Jogamos o valor da lista de itens a serem exibidos para
      // a variável de estado "resultado"
      setResultado(usuario)
    })
  }

  // Parte visual do componente
  return(
    <View style={estilo.usuario}>
      <Text>
        Carregue o usuário abaixo:
      </Text>
      <Pressable style={estilo.botao} onPress={() => carregarUsuario()}>
        <Text style={estilo.textoBotao}>Carregar usuário</Text>
      </Pressable>
      {resultado}
    </View>
  )
}
